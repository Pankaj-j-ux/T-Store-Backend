// try-catch and Async-await || use promises

module.exports = (func) => (req, res, next) =>
  Promise.resolve(func(req, res, next)).catch(next);
