module.exports = ({ content, itemIndex }) => {
  return `
    ${content}
    <ul>
      ${itemIndex.map(item => {
        return `
          <li><a href="${item.url}">${item.title} yoooooo</a></li>
        `
      }).join("")}
    </ul>
  `
}
