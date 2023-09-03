export default (error, req, res, next) => {
  return res.status(500).json({
    response: null,
    messages: error.messages,
  });
  //next();
};
