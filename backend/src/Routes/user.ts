import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signupInput } from '@shubair/medium-common'

export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_STRING: string;
    },
    }>();

    userRouter.post('/signup', async (c) => {
      const body = await c.req.json();
      
      // Validate inputs using Zod
      const parsed = signupInput.safeParse(body);
      if (!parsed.success) {
        console.error(parsed.error);  // Log the error for debugging
        c.status(400);  // Bad Request
        return c.json({
          message: "Inputs are not correct",
          errors: parsed.error.errors,  // Provide validation errors to the client
        });
      }
    
      const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
    
      try {
        // Create new user with username, email, and password
        const user = await prisma.user.create({
          data: {
            username: body.username,
            email: body.email,
            password: body.password,
          },
        });
    
        // Generate JWT token
        const jwt = await sign({ id: user.id }, c.env.JWT_STRING);
        return c.text(jwt);
      } catch (e) {
        console.error(e);  // Log the error
        c.status(500);  // Internal Server Error
        return c.text("Invalid Request!");
      }
    });
    
    userRouter.post('/signin', async (c) => {
      const body = await c.req.json();
      const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
    
      try {
        const user = await prisma.user.findFirst({
          where: {
            email: body.email,
            password: body.password,
          },
        });
    
        if (!user) {
          c.status(401);  // Unauthorized
          return c.json({
            message: "Invalid credentials or username and password",
          });
        }
    
        const jwt = await sign({ id: user.id }, c.env.JWT_STRING);
        return c.text(jwt);
      } catch (e) {
        console.error(e);  // Log error
        c.status(500);  // Internal Server Error
        return c.text("Invalid Request!");
      }
    });
    