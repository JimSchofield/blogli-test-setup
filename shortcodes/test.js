module.exports = [
  {
    name: "test-replace",
    match: /(hello)/g,
    resolve: (_matchStr) => "world",
  }
]
