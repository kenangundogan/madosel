/*!
 * Madosel Accordion 1.0.0-alpha9
 * Copyright 2020-2021 Kenan Gündoğan
 * https://www.madosel.com
 * Licensed under MIT https://github.com/kenangundogan/madosel/blob/master/LICENSE
 * Released under the MIT License
 */
var Accordion = function Accordion(options) {
    var element = options.element,
        event = options.event == null ? "click" : options.event,
        transition = options.transition == null ? "300" : options.transition,
        activeTab = options.activeTab,
        multipleTab = options.multipleTab,
        items = document.querySelectorAll(element + " .accordion-item");
    items.forEach(function (item, key) {
        var head, body, wrapper, active;
        head = item.querySelector(".head");
        body = item.querySelector(".body");
        wrapper = item.querySelector(".wrapper");
        activeTabFunc(item, key, activeTab, body, wrapper);
        head.addEventListener(event, function () {
            item.classList.forEach(function (show) {
                active = show == "show" ? show : "";
            });

            if (active) {
                body.style.height = "";
                setTimeout(function () {
                    item.classList.remove("show");
                    body.style = "";
                }, transition);
            } else {
                if (multipleTab != true) {
                    itemsFunc(items, transition);
                }

                item.classList.add("show");
                body.style.transition = "".concat(transition, "ms");
                body.style.height = "".concat(wrapper.offsetHeight, "px");
            }
        });
    });

    function itemsFunc(items, transition) {
        items.forEach(function (item) {
            item.classList.forEach(function (show) {
                if (show == "show") {
                    item.querySelector(".body").style.height = "";
                    setTimeout(function () {
                        item.classList.remove("show");
                        item.querySelector(".body").style = "";
                    }, transition);
                }
            });
        });
    }

    function activeTabFunc(item, key, activeTab, body, wrapper) {
        if (activeTab == key + 1) {
            item.classList.add("show");
            body.style.transition = "".concat(transition, "ms");
            body.style.height = "".concat(wrapper.offsetHeight, "px");
        }
    }
};

window.Accordion = Accordion;
//# sourceMappingURL=madosel-accordion.js.map