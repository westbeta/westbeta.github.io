const moment = require('moment');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function(config) {
  config.addPlugin(pluginRss);
  config.addPlugin(pluginSyntaxHighlight);
  config.setDataDeepMerge(true);

  config.addFilter('formatDate', (dateObj) => {
    return moment(dateObj).format('YYYY-MM-DD');
  });

  config.addCollection('pages', (collection) => {
    return collection.getAll();
  });

  config.addPassthroughCopy('./src/assets');
  config.addPassthroughCopy('../CNAME');

  return {
    templateFormats: [ 'md', 'njk', 'html' ],
    dir: {
      input: 'src',
      data: 'data',
      output: 'site',
      includes: 'layouts',
    }
  };
};
