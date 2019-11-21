import { allUsers } from '../loader/prisma/userLoader'
import { ParameterizedContext } from 'koa'
import Router from 'koa-router'

export const getAllUsers = async (ctx: ParameterizedContext<any, Router.IRouterParamContext<any, {}>>) => {
  const { response } = ctx
  response.set('Content-Type', 'application/json;charset=UTF-8')
  ctx.body = await allUsers()
}
