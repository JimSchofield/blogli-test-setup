const header = require('./header');
const footer = require('./footer');

module.exports = (config, {meta, ...item}, content) => {
    const title =
    config.siteMeta.siteTitle +
    (meta.title && meta.title.length > 0 ? " - " + meta.title : "");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- Primary Meta Tags -->
    <title>${title}</title>
    ${item.metaMarkup}
    <link href="/${
      config.siteMeta.assetsDir
    }/prism.css" rel="stylesheet" type="text/css"/>
    <link href="/${
      config.siteMeta.assetsDir
    }/test.css" rel="stylesheet" type="text/css"/>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet"> 
</head>
<body>
  ${header(config)}
  ${content}
  ${footer()}
</body>
</html>`
};
