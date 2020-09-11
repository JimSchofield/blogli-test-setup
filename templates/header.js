module.exports = (config) => {
return `
<style>
header {
  display: flex;
  margin: 0;
  padding: 0;
  background: #cde;
}
</style>
<header>
  <h1>${config.siteMeta.siteTitle}</h1>
  <ul>
    ${config.siteMeta.pagesIndex.map(page => {
      return `<li><a href="/${page.url}">${page.title}</a></li>`
    }).join("")}
  </ul>
</header>
`};
