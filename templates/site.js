const header = require('./header');
const footer = require('./footer');

module.exports = ({siteTitle, assetsDir}) => ({ meta, content}) => (`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>${siteTitle + " - " + meta.title}</title>
    <link href="/${assetsDir}/test.css" rel="stylesheet" type="text/css"/>
    <link href="/${assetsDir}/prism.css" rel="stylesheet" type="text/css"/>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet"> 
    <style>body { margin: 0; }</style>
</head>
<body>
    ${header({ title: siteTitle })}
    ${content}
    ${footer()}
</body>
</html>`);
