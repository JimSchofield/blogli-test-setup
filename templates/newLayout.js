const site = require('./site');

module.exports = (siteMeta, meta, content) => {
  return site(siteMeta, meta, `
   <h1>TEST TEST TEST IT WORKS!</h1>     
   <blockquote>
   ${content}
   </blockquote>
  `);
}
