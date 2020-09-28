
export const asyncFlow = (...fns: CallableFunction[]) => (start: any) =>
  fns.reduce(async (state, fn) => {
    const next = await state
    return await fn(next)
  }, Promise.resolve(start))
