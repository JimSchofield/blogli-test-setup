const site = require('./site');

module.exports = (config, item, content) => {
  return site(config, item, `
   <h1>TEST TEST TEST IT WORKS!</h1>     
   <blockquote>
   ${content}
   </blockquote>
  `);
}
