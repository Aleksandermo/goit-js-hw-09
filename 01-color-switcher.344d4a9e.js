const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");const r=e=>{"Start"===e?(t.disabled=!0,timerId=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)):"Stop"===e&&(t.disabled=!1,clearInterval(timerId))};t.addEventListener("click",(()=>r("Start"))),e.addEventListener("click",(()=>r("Stop")));
//# sourceMappingURL=01-color-switcher.344d4a9e.js.map
