/*!
 * Madosel 1.0.0-alpha3
 * Copyright 2020-2021 Kenan Gündoğan
 * https://www.madosel.com
 * Licensed under MIT https://github.com/kenangundogan/madosel/blob/master/LICENSE
 * Released under the MIT License
 */
window.Accordion=function(t){var e=t.element,o=null==t.event?"click":t.event,n=null==t.transition?"300":t.transition,s=t.activeTab,c=t.multipleTab,i=document.querySelectorAll(e+" .accordion-item");i.forEach((function(t,e){var l,a,r,u;l=t.querySelector(".head"),a=t.querySelector(".body"),r=t.querySelector(".wrapper"),function(t,e,o,s,c){o==e+1&&(t.classList.add("show"),s.style.transition="".concat(n,"ms"),s.style.height="".concat(c.offsetHeight,"px"))}(t,e,s,a,r),l.addEventListener(o,(function(){t.classList.forEach((function(t){u="show"==t?t:""})),u?(a.style.height="",setTimeout((function(){t.classList.remove("show"),a.style=""}),n)):(1!=c&&function(t,e){t.forEach((function(t){t.classList.forEach((function(o){"show"==o&&(t.querySelector(".body").style.height="",setTimeout((function(){t.classList.remove("show"),t.querySelector(".body").style=""}),e))}))}))}(i,n),t.classList.add("show"),a.style.transition="".concat(n,"ms"),a.style.height="".concat(r.offsetHeight,"px"))}))}))};