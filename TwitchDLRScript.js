// ==UserScript==
// @name         Disable Twitch Lower Resolution when not in focus.
// @namespace    http://troysjanda.com/
// @version      1.0
// @updateURL    https://github.com/ryanbr/TwitchAdSolutions/raw/master/vaft/vaft.user.js
// @downloadURL  https://github.com/ryanbr/TwitchAdSolutions/raw/master/vaft/vaft.user.js
// @description  Disable Twitch Lower Resolution when not in focus.
// @author       Troy Janda
// @match        https://www.twitch.tv/*
// @match        https://player.twitch.tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    Object.defineProperty(document, "hidden", { value : false});
})();
