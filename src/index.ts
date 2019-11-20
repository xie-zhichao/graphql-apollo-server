import Koa from 'koa'
import Body from 'koa-body'
import apolloServer from './graphql'
import router from './controllers'

const app = new Koa()

app.use(apolloServer.getMiddleware({}))
app.use(Body()).use(router.routes())

// The `listen` method launches a web server.
app.listen(4000, () => {
  console.log(`🚀  Server ready at http://localhost:4000`)
})
