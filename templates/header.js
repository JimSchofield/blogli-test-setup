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
    <li><a href="#">link 1</a></li>
    <li><a href="#">link 2</a></li>
</header>
`
