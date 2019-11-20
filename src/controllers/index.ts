import Router from 'koa-router'
import { funHome } from './funHome'

const router = new Router()

router.get('/funHome', funHome)

export default router
