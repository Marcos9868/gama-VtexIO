import { json } from 'co-body'
import { UserInputError } from '@vtex/api'

export async function statusPost(ctx: Context, next: () => Promise<any>) {
  
  const body = (await json(ctx.req)) as { code: number }

  if(!body?.code) {
    throw new UserInputError('Please supply the code')
  }
  
  const { code } = body
  const codeNumber = parseInt('200' as string, 10)

	const res = await ctx.clients.status.getStatus(codeNumber).catch((reason) => {
		return reason?.response?.data
	})
	
	console.log(res)

	ctx.set('Cache-Control', 'no-cache no-store')
	ctx.body = { ok: false }
	ctx.body = res
	ctx.status = code

  await next()
}
