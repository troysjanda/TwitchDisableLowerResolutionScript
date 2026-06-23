This is a Userscript that stops Twitch from lowing resolution when currnet tb is not in focus. Please use violentfox, Tampermonkey for best results.


What has changed since version 1.3

* get: () => instead of value: — Using a getter means the spoofed value can never be overwritten by Twitch's own JS at runtime, even without writable. More resilient.
* configurable: true — Allows the property to be redefined if needed (e.g. by the script itself on re-execution or future updates) without throwing.
* visibilityState spoofed — Patches the second property Twitch likely checks alongside hidden.
* visibilitychange suppressed — Stops the event before any Twitch listener sees it, using capture phase (true) so it fires first.
* iframe patching — Twitch's video player often runs in a child iframe. The MutationObserver watches for injected iframes and applies the same spoof to their document, covering that case.
* blur/focus suppression — Some players use window.blur as a fallback signal to reduce quality. Blocking both events closes that gap.
* Bumped version to 1.4 — Reflects the meaningful changes over your 1.3.
