import { Hono } from 'hono'

const app = new Hono()

async function authMiddleware (c:any,next:any){
  if(c.req.header("Authorization")){
    await next()
  }else{
    return c.text("dont have access")
  }
}

app.use(authMiddleware);


app.post('/', async(c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  return c.text('Hello Hono!')
})
// c gives both req,res params
export default app
