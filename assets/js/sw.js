"use strict";
importScripts("sw-toolbox.js");
toolbox.precache(["home.html","assets/*", "images/*"]);
toolbox.router.get("images/*", toolbox.cacheFirst); toolbox.router.get("/*", toolbox.networkFirst, { networkTimeoutSeconds: 5});