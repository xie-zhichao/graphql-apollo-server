import { getHomePageDatas } from '../services/app/homeService'
import { ParameterizedContext } from 'koa'
import Router from 'koa-router'

export const appHome = async (ctx: ParameterizedContext<any, Router.IRouterParamContext<any, {}>>) => {
  const { response } = ctx
  response.set('Content-Type', 'application/json;charset=UTF-8')
  ctx.body = await getHomePageDatas()
}
