const sidebarData = require('./config/sidebar/index.json');

const getDocId = (doc) => doc && doc
  .replace(/\.mdx?$/, '');

const getItem = (item) => {
  const { type } = item;

  const itemProps = {
    type,
    label: item.label || item.title,
  };

  if (type === 'doc') {
    if (!item.document) {
      return [];
    }

    itemProps.id = getDocId(item.document);

    if (item.label) {
      itemProps.label = item.label;
    }
  }

  if (type === 'category') {
    if (item.title) {
      itemProps.label = item.title;
    }

    if (item.link && item.link !== 'none') {
      if (item.link === 'doc' && item.docLink) {
        itemProps.link = {
          type: 'doc',
          id: getDocId(item.docLink),
        };
      } else if (item.link === 'generated') {
        itemProps.link = {
          type: 'generated-index',
        };
      } else {
        return [];
      }
    }

    itemProps.items = item.items.flatMap((i) => getItem(i));
  }

  if (type === 'link') {
    if (item.href && item.title) {
      itemProps.label = item.title;
      itemProps.href = item.href;
    } else {
      return [];
    }
  }

  return [itemProps];
};

const sidebars = {
  tutorialSidebar: sidebarData.items.flatMap((item) => getItem(item)),
};

module.exports = sidebars;
