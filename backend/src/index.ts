import { Hono } from 'hono'
import { userRouter } from './Routes/user';
import { blogRouter } from './Routes/blog';
import { cors } from 'hono/cors'


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_STRING: string;
  }
}>()

app.use('/*', cors());
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);



export default app
