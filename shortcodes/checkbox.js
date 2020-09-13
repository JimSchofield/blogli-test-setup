module.exports = [
  {
    name: "empty-checkbox",
    match: /(\[ \])/g,
    resolve: (_matchStr) => "<input type='checkbox' disabled>",
  },
  {
    name: "checked-checkbox",
    match: /(\[x\])/g,
    resolve: (_matchStr) => "<input type='checkbox' checked disabled>"
  }
];
