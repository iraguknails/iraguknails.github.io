"use strict";
importScripts("sw-toolbox.js");
toolbox.precache(["index.html","assets/css/font-awesome.min.css","assets/css/main.css","images/bg.jpg","images/thumbs/01.jpg","images/thumbs/02.jpg","images/thumbs/03.jpg","images/thumbs/04.jpg","images/thumbs/05.jpg","images/thumbs/06.jpg","images/thumbs/07.jpg","images/thumbs/08.jpg","images/thumbs/09.jpg","images/thumbs/10.jpg","images/thumbs/11.jpg","images/thumbs/12.jpg",]);
toolbox.router.get("images/*", toolbox.cacheFirst); toolbox.router.get("/*", toolbox.networkFirst, { networkTimeoutSeconds: 5});
