#!/usr/bin/python

import sys, collections

# consume from itertools docs
def consume(iterator, n=None):
    if n is None:
        collections.deque(iterator, maxlen=0)
    else:
        next(islice(iterator, n, n), None)

def substitute(line: str) -> str | list[str]:
    # trailing space is significant
    prefix = "#include "
    if not line.startswith(prefix):
        return line
    filepath = line[len(prefix):].strip()

    contents = []
    with open(filepath) as f:
        contents = f.readlines()
    return contents

def substitute_all_and_flatten(l: list[str | list[str]]) -> list[str]:
    return [ ''.join(x) if type(x) == list 
             else x
             for x in [ e for e in map(substitute, l)] ]

def main():
    if len(sys.argv) == 1:
        print("usage: preprocessor.py filename")
        return 
    filepath = sys.argv[1]
    with open(filepath) as f:
        lines = f.readlines()
    substitute_all_and_flatten(lines)
    consume(print(l, end = '') for l in substitute_all_and_flatten(lines))

if __name__=="__main__":
    main()
