import { createBlogInput, CreateBlogInput, updateblogInput } from "@shubair/medium-common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_STRING: string;
  },
  Variables: {
    userId: string;
  },
}>();

blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("authorization") || "";
  try {
    const user = await verify(authHeader, c.env.JWT_STRING ) as {id: string}
    if (user) {
      c.set("userId", user.id);
     await next();
    } else{
      c.status(403);
      return c.json({
        message: "you are not logged in"
      })
    }
  } catch (e) {
    c.status(403);
    return c.json({
      message: "you are not logged in"
    })
  }
})

blogRouter.post('/', async (c) => {
  const body = await c.req.json();
  const {success} = createBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Your Inputs are invalid or incorrect"
    })
  }
  const authorId = c.get("userId");

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: Number(authorId)
    }
  })
  return c.json({
    id: blog.id
  })
})

blogRouter.put('/', async (c) => {
  const body = await c.req.json();
  const {success} = updateblogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Your Inputs are invalid or incorrect"
    })
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const blog = await prisma.blog.update({
    where: {
      id: body.id
    },
    data: {
      title: body.title,
      content: body.content,
    }
  })
  return c.json({
    id: blog.id
  })
})


// add pagination here means not all the blogs render here but instead some like 10 blogs in landing page eventually when user wants more so we adding 10 by 10 
blogRouter.get('/bulk', async (c) => {
  console.log('Incoming request:', c);
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  
  try {
    const Allblogs = await prisma.blog.findMany({
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            username: true
          }
        }
      }
    });
    console.log('Blogs fetched successfully');
    return c.json(Allblogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return c.json({ error: 'Failed to fetch blogs' }, 500);
  }
});



blogRouter.get('/:id', async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    const blog = await prisma.blog.findFirst({
      where: {
        id: Number(id)
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            username: true,
          }
        }
      }
    });

    if (!blog) {
      c.status(404);
      return c.json({
        message: "Blog not found"
      });
    }

    return c.json({
      blog
    })

  } catch (e) {
    c.status(411);
    return c.json({
      message: "error while fetching your blogs so go the /blog route"
    })

  }

})
