module.exports = ({ title }) => `
<style>
header {
  display: flex;
  margin: 0;
  padding: 0;
  background: #cde;
}
</style>
<header>
  <h1>${title}</h1>
  <ul>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/posts">Posts</a></li>
</header>
`
