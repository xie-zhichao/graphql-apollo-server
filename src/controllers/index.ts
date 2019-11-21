import Router from 'koa-router'
import { appHome } from './appHome'
import { getAllUsers } from './userCenter'

const router = new Router()

router.get('/app-home', appHome)
router.get('/all-users', getAllUsers)

export default router
