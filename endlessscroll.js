// generates inner html for insertion of repeated phrases,
// phrases in repeating order,
// tagged with classname
const generate_wall = (amount, phrases, classname) => {
  let body = "";
  const len = phrases.length;
  for (let i = 0; i < amount; i++) {
    body += `<p class="${classname}">${phrases[i % len]}</p>\n`;
  }
  return body;
};

// scroll by `px` every `delay` ms for `duration` ms
const interval_scroll = (delay, px, duration) => {
  let interval = setInterval(() => {
    window.scrollBy({
      top: px,
      left: 0,
      behavior: "instant",
    });
  }, delay);
  setTimeout(() => {
    clearInterval(interval);
  }, duration);
};

// main payload
const endless_scroll = (selector, phrases, link, duration) => {
  const offsets = {
    c: 6000,
    up: 2000,
    down: 2000,
  };
  const inner = generate_wall(200, phrases, "endlesstext");
  s.waitElement(selector).then((element) => {
    element.insertAdjacentHTML("beforeend", inner);
    window.addEventListener("scroll", (e) => {
      if (this.scrollY >= offsets.c + offsets.up) {
        window.scroll(0, offsets.c - offsets.down + 200);
      }
      if (this.scrollY <= offsets.c - offsets.down) {
        window.scroll(0, offsets.c + offsets.up - 200);
      }
    });
    window.scroll(0, offsets.c);
    interval_scroll(16, 1, duration - 2000);
    setTimeout(() => {
      window.Story.show(link);
    }, duration);
  });
};
