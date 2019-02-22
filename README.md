EZFN
====

Are your functions professionally namespaced and difficult to reach?  Would you like to kick back, throw caution to the wind, and call functions with the greatest of ease?  EZFN is there for you.

Pollute the global namespace! Namespacing is a honking bad idea, let's do less of that!

Install
-------

```
npm install --save ezfn
```

Usage
-----

Here's a very smart example of making all p5 functions callable globally.

```js
const ezfn = require("ezfn");
const p5 = require("p5");

ezfn(p5);
```

And here is a very foolish example of making all `Array` functions global.

```js
const ezfn = require("ezfn");

ezfn([]);
```

API
---

EZFN only has one function.  That function only has two arguments.  Here they are.

 - **src** {Object} - the object with functions
 - **dest** {Object} [optional] - The destination object onto which `src`'s functions are copied.  It defaults to `window` because why would you *not* want to copy everything there?

Both own and inherited functions are copied.

Inspiration
-----------

[p5](https://p5js.org/) is the main inspiration.  p5 is wonderfully approachable, in large part because every function is in the global namespace.

I wanted to preserve that, while also using p5 in an ES module.

Obviously, namespacing is a good idea.
