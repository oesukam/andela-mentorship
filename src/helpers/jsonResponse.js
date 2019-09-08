const jsonResponse = data =>
  data.res.status(data.status).json({
    ...data,
    res: undefined
  });

export default jsonResponse;
