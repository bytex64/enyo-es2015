# Enyo + ES2015

This is a tiny example application loosely based off of the [Enyo
Bootplate](https://github.com/enyojs/bootplate) hello world example,
which integrates Babel 6 and Webpack to enable the use of ES2015 and CSS
Modules in Enyo apps.

Enyo itself is built with Enyo's minifier the same as it's always been.
The Enyo JS and CSS are then copied by Webpack into the `build`
directory along with everything else. (It is necessary for Webpack to
handle this or otherwise it won't serve the Enyo libraries from the
Webpack dev server) I've also included the layout and onyx libraries.
The Enyo libraries are version 2.5.2.

## Quickstart

- `git submodule update --init`
- `npm run build-enyo`
- `npm install`
- `node_modules/.bin/webpack` *or*
  `node_modules/.bin/webpack-dev-server`

Of course, all of this could be wrapped up in some convenient build
configuration, but there are many to choose from that I wouldn't presume
to tell you which one you should use (my favorite is `make`, and I'm
aware that it makes me a horrible person). :P

## Differences from vanilla Enyo

The main difference is that instead of using `package.js` and
`enyo.depends()`, you use ES2015 module syntax. Since Enyo handles
component namespacing, you don't actually have to import any names.
Components just have to be imported somewhere so that Webpack will find
them.

CSS Modules means that class names are locally scoped to the import, so
the imported names will have to be used instead of strings. For example:

**Before**:

```
enyo.kind({
    classes: "foo"
    //...
});
```

**After**:

```
import styles from './styles.css';

enyo.kind({
    classes: styles.foo,
    // ...
});
```

Effectively the import is a mapping between your class names and the
mangled names webpack generates to preserve encapsulation.  This also
makes it somewhat more difficult to use class names with hyphens.  For
composing multiple classes, I recommend using the
[classnames](https://github.com/JedWatson/classnames) package,
particularly the [bind functionality for CSS
Modules](https://github.com/JedWatson/classnames#alternate-bind-version-for-css-modules).
