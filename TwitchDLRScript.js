// ==UserScript==
// @name         Disable Twitch Lower Resolution when not in focus.
// @namespace    https://github.com/troysjanda
// @version      1.2
// @updateURL    https://raw.githubusercontent.com/troysjanda/TwitchDisableLowerResolutionScript/refs/heads/main/TwitchDLRScript.js
// @downloadURL  https://raw.githubusercontent.com/troysjanda/TwitchDisableLowerResolutionScript/refs/heads/main/TwitchDLRScript.js
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
