export default async (req, res) => {
  return await res
    .writeHead(302, { Location: `/?code=${req.query.code}` })
    .end()
}
