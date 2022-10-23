// intro-hovertext
const hovertext = (prefix, selectors, bodies, link) => {
  promises = selectors.map((suffix, i) => {
    selector = prefix + suffix;
    console.log(selector);
    return s.waitElement(selector);
  });

  Promise.all(promises).then(() => {
    selectors.forEach((suffix, i) => {
      sel = prefix + suffix;
      s.delayedHoverTextLinks(sel, bodies[i], link);
    });
  });
};
