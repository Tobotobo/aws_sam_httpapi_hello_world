exports.handler = async event => {
  const random0to9 = Math.floor(Math.random() * 10);
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8" />
    <title>Hello World!</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>0 から 9 のランダムな値: ${random0to9}</p>
</body>
</html>`
  };
};
