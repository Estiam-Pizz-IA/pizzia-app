const uuid = require('uuid')

const logBeforeAndAfter = (req, res, next) => {
  const resDotSendInterceptor = (res, send) => (content) => {
    res.contentBody = typeof(content) === "string" && (content.startsWith('{') || content.startsWith('[')) ? JSON.parse(content) : content;
    res.send = send;
    res.send(content);
  };
  res.send = resDotSendInterceptor(res, res.send);

  req.uuid = req.uuid || uuid.v1(Date.now());

  const method = req.method;
  const path = req.path;
  let body = { ...req.body };
  if (body?.password) body.password = "#SECRET#";
  if (typeof(body) === 'object') body = JSON.stringify(body, null, 2);

  console.info(new Date().toISOString(), req.uuid, "<<<", method, path, body);
  
  res.on('finish', () => {
    const body = typeof(res.contentBody) === 'object' ? JSON.stringify(res.contentBody, null, 2) : res.contentBody;
    console.info(new Date().toISOString(), req.uuid, ">>>", method, path, res.statusCode, body);
  })
  next();
}

module.exports = logBeforeAndAfter