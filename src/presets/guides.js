module.exports = function preset(context, opts = {}) {
    return {
      themes: [['classic', {...opts.theme, id: 'guide'}]],
      plugins: [
        ['@docusaurus/plugin-content-docs', {...opts.rio, id: 'rio'}]
      ],
    };
  };
  