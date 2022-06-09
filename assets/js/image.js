CMS.registerEditorComponent({
  label: 'Image',
  id: 'image',
  fromBlock: match =>
    match && {
      image: match[1],
      alt: match[2],
      title: match[3],
      classes: match[4],
      action: match[5]

    },
  toBlock: function({image, alt, title, classes, action}, getAsset, fields) {
    return `<img src="${image || ''}" alt="${alt || ''}" title="${title || ''}" class="${classes || ''}" data-action="${action || ''}"/>`
  },
  toPreview: ({ image, alt, title, classes, action }, getAsset, fields) => {
    return `<img src="${image}" alt="${alt}" title="${title}" class="${classes}" data-action="${action}"/>`;
  },
  pattern:  /^<img src="(.*?)" alt="(.*?)" title="(.*?)" class="(.*?)" data="(.*?)"\/>$/s,
  fields: [
    {
      label: 'Picture',
      name: 'image',
      widget: 'image',
      media_library: {
        allow_multiple: true,
      },
    },
    {
      label: 'Alt Text',
      name: 'alt',
    },
    {
      label: 'Title',
      name: 'title'
    },
    {
      label: 'CSS Classes',
      name: 'classes',
      default: 'post-image'
    },
    {
      label: 'Data-action',
      name: 'action',
      default: 'zoom'
    },
  ]
})
