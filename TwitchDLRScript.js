// ==UserScript==
// @name         Disable Twitch Lower Resolution/Blur when tab not in focus.
// @namespace    https://github.com/troysjanda
// @version      1.4.1
// @updateURL    https://raw.githubusercontent.com/troysjanda/TwitchDisableLowerResolutionScript/refs/heads/main/TwitchDLRScript.js
// @downloadURL  https://raw.githubusercontent.com/troysjanda/TwitchDisableLowerResolutionScript/refs/heads/main/TwitchDLRScript.js
// @description  Disable Twitch Lower Resolution/Blur when tab not in focus.
// @author       Troy Janda
// @match        https://www.twitch.tv/*
// @match        https://player.twitch.tv/*
// @grant        none
// ==/UserScript==
(function () {
    'use strict';

    // Spoof visibility API properties
    const defineHidden = (obj) => {
        Object.defineProperty(obj, 'hidden', { get: () => false, configurable: true });
        Object.defineProperty(obj, 'visibilityState', { get: () => 'visible', configurable: true });
    };

    defineHidden(document);

    // Block visibilitychange events before Twitch handlers can see them
    document.addEventListener('visibilitychange', (e) => e.stopImmediatePropagation(), true);

    // Also block Page Visibility API on any iframes Twitch injects (e.g. the player iframe)
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.tagName === 'IFRAME') {
                    node.addEventListener('load', () => {
                        try {
                            defineHidden(node.contentDocument);
                        } catch {
                            // Cross-origin iframe — can't access contentDocument, skip
                        }
                    });
                }
            }
        }
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });

    // Block window focus/blur events Twitch may use as a fallback
    window.addEventListener('blur', (e) => e.stopImmediatePropagation(), true);
    window.addEventListener('focus', (e) => e.stopImmediatePropagation(), true);

})();
