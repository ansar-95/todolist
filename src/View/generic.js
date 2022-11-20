export const createEl = (tag, textContent, classList, parent) => {
  const el = document.createElement(tag);
  el.textContent = textContent;
  el.classList = classList;

  parent.append(el);

  return el;
};

export const addAttribute = (object, ...args) => {
  //[]
  args.forEach((element) => {
    object.setAttribute(element[0], element[1]);
  });
  return object;
};
