// n from last, link
const rewrite_history_link = (offset, link, state) => {
  let history = window.Story.history.history;
  let idx = history.length - offset;
  if (state === undefined) {
    history[idx] = {
      passageName: link,
      state: history[idx].state,
    };
  } else {
    history[idx] = {
      passageName: link,
      state,
    };
  }
};
