/*!
 * Madosel 1.0.0-alpha3
 * Copyright 2020-2021 Kenan Gündoğan
 * https://www.madosel.com
 * Licensed under MIT https://github.com/kenangundogan/madosel/blob/master/LICENSE
 * Released under the MIT License
 */
window.NavigationTabs=function(t){var n=t.element,a=null==t.event?"click":t.event,e=null==t.direction?"top":t.direction,o=t.activeTab,c="".concat(n," .navigation-tab-menu"),i="".concat(c," .navigation-tab-menu-item"),s="".concat(n," .navigation-tab-content"),d="".concat(s," .navigation-tab-content-item"),u=document.querySelector(n),l=document.querySelectorAll(i),r=document.querySelectorAll(d);u.classList.add(e),l.forEach((function(t){t.addEventListener(a,(function(){menuItemDataId=t.getAttribute("data-id"),r.forEach((function(n){contentItemDataId=n.getAttribute("data-id"),menuItemDataId==contentItemDataId&&(l.forEach((function(t){t.classList.remove("show")})),r.forEach((function(t){t.classList.remove("show")})),t.classList.add("show"),n.classList.add("show"))}))}))})),function(t){l.forEach((function(n,a){t==a+1&&n.classList.add("show")})),r.forEach((function(n,a){t==a+1&&n.classList.add("show")}))}(o)};