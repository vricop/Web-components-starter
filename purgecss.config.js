module.exports = {
  content: ['index.html'],
  css: ['main.min.css'],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[\w-:/%+*>&\[\].]+(?<!:)/g) || [];
        }
      },
      extensions: ['html']
    }
  ]
};
