/*!
 * Madosel 1.0.0-alpha5
 * Copyright 2020-2021 Kenan Gündoğan
 * https://www.madosel.com
 * Licensed under MIT https://github.com/kenangundogan/madosel/blob/master/LICENSE
 * Released under the MIT License
 */

window.Modal=function(){function t(t,a){t.modalContainer.classList.remove("visible","transform"),setTimeout((function(){t.modalContainer.classList.remove(a.dataPostion,a.dataSize,"show"),a.modalWrapper.style=""}),a.dataTransition)}document.querySelectorAll(".modalBtn").forEach((function(a){var o=a.getAttribute("data-target");!function(a){if(a.modalContainer){var o=a.modalContainer.querySelector(".modal-close"),n=a.modalContainer.querySelector(".modal-wrapper"),e=a.modalContainer.getAttribute("data-position"),i=a.modalContainer.getAttribute("data-size"),d=a.modalContainer.getAttribute("data-transition");""!=e&&null!=e||(e="center"),""!=i&&null!=i||(i="small"),""!=d&&null!=d||(d="300"),options={modalClose:o,modalWrapper:n,dataPostion:e,dataSize:i,dataTransition:d},function(a,o){a.modalButton.addEventListener("click",(function(){a.modalContainer.classList.add("show",o.dataPostion,o.dataSize),setTimeout((function(){o.modalWrapper.style.transition="".concat(o.dataTransition,"ms"),a.modalContainer.classList.add("visible"),a.modalContainer.classList.add("transform")}),0),function(a,o){o.modalClose&&(o.modalClose.addEventListener("click",(function(){t(a,o)})),document.addEventListener("keydown",(function(n){"Escape"!==n.key&&"Esc"!==n.key||t(a,o)})))}(a,o)}))}(a,options)}}({modalButton:a,modalContainer:document.querySelector(o)})}))};