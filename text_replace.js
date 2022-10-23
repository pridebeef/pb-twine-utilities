// fancy replacement: not that helpful! could be later

/* passages [<passage names>...]
 * replace: [{source: <substitute>},...] case sensitive
 * verb_swap: [
 *   {
 *      replace: int // replacement
 *      offset: int  // n words after "x" replacement
 *      word: str    // replace preexisting word @ idx of src + offset w/ word
 *   }
 * ]
 *
 * verb_swap MUST be sorted
 */
const text_replace = (text, r, v) => {
  let c = {
    next: 0, // next replacement index in sorted list
    idx: 0, // cursor to index of v
  };
  let words = text.split(" ");
  words.forEach((w, i) => {
    if (w in r) {
      words[i] = r[w].word;
      while (c.next == i) {
        swap = v[c.idx];
        words[i + swap.offset] = swap.word;
        c.idx++;
        if (c.idx < v.length) {
          c.next = v[c.idx].replace;
        } else {
          break;
        }
      }
    }
  });
  return words.join(" ");
};

window.Story.passages.forEach((p, idx) => {
  if (passages.includes(p.name)) {
    window.Story.passages[idx].source = replace(
      p.source,
      replacements,
      verb_swap
    );
  }
});
