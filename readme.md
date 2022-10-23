# twine utilities

collection of stuff i've been using with twine's [snowman](https://videlais.github.io/snowman/#/) format

## preprocessor.py

adds a quick method of including files into extwee/tw2 where it wouldn't normally be supported

the only directive is `#include` and it works how you think it would

**usage**

```
./preprocessor.py storyfile > storyfile.p
```

storyfile:
```
:: story-link

#include bodytest.txt

:: story-link-2

text text text

<%
#include script.js
%>
```

## other js

will document soon