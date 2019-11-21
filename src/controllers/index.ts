import Router from 'koa-router'
import { appHome } from './appHome'

const router = new Router()

router.get('/app-home', appHome)

export default router
