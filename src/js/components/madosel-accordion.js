/*!
 * Javascript Accordion 1.0.0
 * Copyright 2021 Kenan Gündoğan
 * Released under the MIT License
 */

const Accordion = function (options) {
    const element = options.element,
        event = options.event == null ? "click" : options.event,
        transition = options.transition == null ? "300" : options.transition,
        activeTab = options.activeTab,
        multipleTab = options.multipleTab,
        items = document.querySelectorAll(element + " .accordion-item");

    items.forEach((item, key) => {
        let head, body, wrapper, active;
        head = item.querySelector(".head");
        body = item.querySelector(".body");
        wrapper = item.querySelector(".wrapper");
        activeTabFunc(item, key, activeTab, body, wrapper);
        head.addEventListener(event, () => {
            item.classList.forEach(show => {
                active = show == "show" ? show : "";
            });

            if (active) {
                body.style.height = "";
                setTimeout(() => {
                    item.classList.remove("show");
                    body.style = "";
                }, transition);
            }
            else {
                if (multipleTab != true) { itemsFunc(items, transition); }
                item.classList.add("show");
                body.style.transition = `${transition}ms`;
                body.style.height = `${wrapper.offsetHeight}px`;
            }
        });

    });

    function itemsFunc(items, transition) {
        items.forEach(item => {
            item.classList.forEach(show => {
                if (show == "show") {
                    item.querySelector(".body").style.height = "";
                    setTimeout(() => {
                        item.classList.remove("show");
                        item.querySelector(".body").style = "";
                    }, transition);
                }
            });
        });
    }

    function activeTabFunc(item, key, activeTab, body, wrapper) {
        if (activeTab == (key + 1)) {
            item.classList.add("show");
            body.style.transition = `${transition}ms`;
            body.style.height = `${wrapper.offsetHeight}px`;
        }
    }
}

window.Accordion = Accordion;