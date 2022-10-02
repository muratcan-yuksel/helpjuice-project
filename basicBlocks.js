const basicBlocks = [
  {
    container: { type: "div", class: "listItem", id: "itemText" },
    image: { type: "img", class: "icon", src: "/assets/text.png" },
    divider: { type: "div", class: "listItemDivider" },
    title: { type: "h4", class: "listItemTitle", text: "Text" },
    para: {
      type: "p",
      class: "listItemPara",
      text: "Just start writing with plain text.",
    },
  },
  {
    container: { type: "div", class: "listItem", id: "itemTodo" },
    image: { type: "img", class: "icon", src: "/assets/todo.png" },
    divider: { type: "div", class: "listItemDivider" },
    title: { type: "h4", class: "listItemTitle", text: "To-do list" },
    para: {
      type: "p",
      class: "listItemPara",
      text: "Track tasks with a to-do list.",
    },
  },
  {
    container: { type: "div", class: "listItem", id: "itemH1" },
    image: { type: "img", class: "icon", src: "/assets/h1.png" },
    divider: { type: "div", class: "listItemDivider" },
    title: { type: "h4", class: "listItemTitle", text: "Heading 1" },
    para: {
      type: "p",
      class: "listItemPara",
      text: "Big section heading.",
    },
  },
  {
    container: { type: "div", class: "listItem", id: "itemH2" },
    image: { type: "img", class: "icon", src: "/assets/h2.png" },
    divider: { type: "div", class: "listItemDivider" },
    title: { type: "h4", class: "listItemTitle", text: "Heading 2" },
    para: {
      type: "p",
      class: "listItemPara",
      text: "Medium section heading.",
    },
  },
  {
    container: { type: "div", class: "listItem", id: "itemH3" },
    image: { type: "img", class: "icon", src: "/assets/h3.png" },
    divider: { type: "div", class: "listItemDivider" },
    title: { type: "h4", class: "listItemTitle", text: "Heading 3" },
    para: {
      type: "p",
      class: "listItemPara",
      text: "Small section heading.",
    },
  },
  {
    container: { type: "div", class: "listItem", id: "itemTable" },
    image: { type: "img", class: "icon", src: "/assets/table.png" },
    divider: { type: "div", class: "listItemDivider" },
    title: { type: "h4", class: "listItemTitle", text: "Table" },
    para: {
      type: "p",
      class: "listItemPara",
      text: "Add simple tabular content to your page.",
    },
  },
  {
    container: { type: "div", class: "listItem", id: "itemBulletedList" },
    image: { type: "img", class: "icon", src: "/assets/bullet.png" },
    divider: { type: "div", class: "listItemDivider" },
    title: { type: "h4", class: "listItemTitle", text: "Bulleted list" },
    para: {
      type: "p",
      class: "listItemPara",
      text: "Create a simple bulleted list.",
    },
  },
  {
    container: { type: "div", class: "listItem", id: "itemNumberedList" },
    image: { type: "img", class: "icon", src: "/assets/numbered.png" },
    divider: { type: "div", class: "listItemDivider" },
    title: { type: "h4", class: "listItemTitle", text: "Numbered list" },
    para: {
      type: "p",
      class: "listItemPara",
      text: "Create a list with numbering.",
    },
  },
  {
    container: { type: "div", class: "listItem", id: "itemToggleList" },
    image: { type: "img", class: "icon", src: "/assets/toggle.png" },
    divider: { type: "div", class: "listItemDivider" },
    title: { type: "h4", class: "listItemTitle", text: "Toggle list" },
    para: {
      type: "p",
      class: "listItemPara",
      text: "Toggles can hide and show content inside.",
    },
  },
  {
    container: { type: "div", class: "listItem", id: "itemQuote" },
    image: { type: "img", class: "icon", src: "/assets/quote.png" },
    divider: { type: "div", class: "listItemDivider" },
    title: { type: "h4", class: "listItemTitle", text: "Quote" },
    para: {
      type: "p",
      class: "listItemPara",
      text: "Capture a quote.",
    },
  },
  {
    container: { type: "div", class: "listItem", id: "itemDivider" },
    image: { type: "img", class: "icon", src: "/assets/divider.png" },
    divider: { type: "div", class: "listItemDivider" },
    title: { type: "h4", class: "listItemTitle", text: "Numbered list" },
    para: {
      type: "p",
      class: "listItemPara",
      text: "Visually divide blocks.",
    },
  },
  {
    container: { type: "div", class: "listItem", id: "itemCallout" },
    image: { type: "img", class: "icon", src: "/assets/callout.png" },
    divider: { type: "div", class: "listItemDivider" },
    title: { type: "h4", class: "listItemTitle", text: "Numbered list" },
    para: {
      type: "p",
      class: "listItemPara",
      text: "Make writing stand out.",
    },
  },
];

export default basicBlocks;
