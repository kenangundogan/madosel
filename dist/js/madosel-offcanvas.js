window.Offcanvas=function(){function a(a,n){a.offcanvasContainer.classList.remove("visible","transform"),setTimeout((function(){a.offcanvasContainer.classList.remove(n.dataPostion,n.dataSize,"show"),n.offcanvasWrapper.style=""}),n.dataTransition)}document.querySelectorAll(".offcanvasBtn").forEach((function(n){var t=n.getAttribute("data-target");!function(n){if(n.offcanvasContainer){var t=n.offcanvasContainer.querySelector(".offcanvas-close"),o=n.offcanvasContainer.querySelector(".offcanvas-wrapper"),e=n.offcanvasContainer.getAttribute("data-position"),s=n.offcanvasContainer.getAttribute("data-size"),i=n.offcanvasContainer.getAttribute("data-transition");""!=e&&null!=e||(e="left"),""!=s&&null!=s||(s="small"),""!=i&&null!=i||(i="300"),options={offcanvasClose:t,offcanvasWrapper:o,dataPostion:e,dataSize:s,dataTransition:i},function(n,t){n.offcanvasButton.addEventListener("click",(function(){n.offcanvasContainer.classList.add("show",t.dataPostion,t.dataSize),setTimeout((function(){t.offcanvasWrapper.style.transition="".concat(t.dataTransition,"ms"),n.offcanvasContainer.classList.add("visible"),n.offcanvasContainer.classList.add("transform")}),0),function(n,t){t.offcanvasClose&&(t.offcanvasClose.addEventListener("click",(function(){a(n,t)})),window.addEventListener("keydown",(function(o){"Escape"!==o.key&&"Esc"!==o.key||a(n,t)})))}(n,t)}))}(n,options)}}({offcanvasButton:n,offcanvasContainer:document.querySelector(t)})}))};