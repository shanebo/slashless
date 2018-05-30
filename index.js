module.exports = () => {
  return (req, res, next) => {
    if (req.pathname !== '/' && /\/$/.test(req.pathname)) {
      res.status(301).redirect(req.url.replace(/\/([^/]*)$/, '$1'));
    } else {
      next();
    }
  }
}
