// disables a given link click handler
s.disableLink = (element) =>
  element.addEventListener("click", (e) => {
    e.preventDefault();
  });

// makes a link go to a destination page
s.attachShow = (element, dest) =>
  element.addEventListener("click", (e) => {
    e.preventDefault();
    window.Story.show(dest);
  });

// https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
s.waitElement = (selector) => {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
};

// forEach on queried elements
s.mapOnElements = (fn, selector) =>
  document.querySelectorAll(selector).forEach((element) => fn(element));

// hook links to change inner text on hover
// after a small delay (goes to destination story segment)
s.delayedHoverTextLinks = (selector, text, destination) => {
  console.log("hooking links on", selector);
  s.mapOnElements((element) => {
    s.disableLink(element);
    element.addEventListener("mouseover", (event) => {
      event.srcElement.text = text;
      setTimeout(() => {
        s.attachShow(element, destination);
      }, 500);
    });
    // mobile
    element.addEventListener("click", (event) => {
      event.srcElement.text = text;
      setTimeout(() => {
        s.attachShow(element, destination);
      }, 500);
    });
  }, selector);
};
