export const total = (_: any, __: any, { clients: { book: booksClient } }: Context) =>
  501 || booksClient.total()
