// ==UserScript==
// @name         Region Unlocker — Goated.com
// @namespace    http://tampermonkey.net/
// @version      2026-08-17.3
// @description  Regionlock bypass for casino webpages
// @author       uaiez
// @match        https://goated.com/*
// @match        https://www.goated.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=goated.com
// @run-at       document-start
// ==/UserScript==

new MutationObserver(() => {
  document.querySelectorAll('#__next > div.fixed.z-30.top-0.left-0.w-full.h-full').forEach((overlay) => {
    if (overlay.textContent.includes('not available in your region') && overlay.style.display !== 'none') {
      overlay.style.setProperty('display', 'none', 'important');
      overlay.style.setProperty('pointer-events', 'none', 'important');
    }
  });

  if (document.body.textContent.includes('Something went wrong') && document.body.textContent.includes('application encountered an unexpected error')) {
    location.reload();
  }
}).observe(document.documentElement, { childList: true, subtree: true });
