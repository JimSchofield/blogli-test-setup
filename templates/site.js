const header = require('./header');
const footer = require('./footer');

module.exports = ({siteTitle, assetsDir}) => ({ meta, content}) => (`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>${siteTitle + " - " + meta.title}</title>
    <link href="/${assetsDir}/prism.css" rel="stylesheet" type="text/css"/>
    <style>body { margin: 0; }</style>
</head>
<body>
    ${header({ title: siteTitle })}
    ${content}
    ${footer()}
</body>
</html>`);
