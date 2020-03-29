module.exports = {
  content: ['**/*.html', '**/*.js'],
  css: ['assets/css/main.min.css'],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[\w-:/%+*>&\(\).]+(?<!:)/g) || [];
        }
      },
      extensions: ['html', 'js']
    }
  ]
};