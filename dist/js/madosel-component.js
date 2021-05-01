/*!
 * Madosel Accordion 1.0.0-alpha10
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

/*!
 * Madosel Dropdown 1.0.0-alpha10
 * Copyright 2020-2021 Kenan Gündoğan
 * https://www.madosel.com
 * Licensed under MIT https://github.com/kenangundogan/madosel/blob/master/LICENSE
 * Released under the MIT License
 */
var Dropdown = function Dropdown() {
    var dropdownContainers = document.querySelectorAll(".dropdown-container");
    dropdownContainers.forEach(function (container) {
        var dropdownBtn = container.querySelector(".dropdown-btn"),
            dropdownList = container.querySelector(".dropdown-list"),
            dataPosition = dropdownList.getAttribute("data-position"),
            dataTarget = dropdownBtn.getAttribute("data-target"),
            id = dropdownList.id,
            dataHeight = dropdownList.getAttribute("data-height");

        if (dataPosition == "" || dataPosition == null) {
            dataPosition = "bottom";
        }

        if (dataHeight == "" || dataHeight == null) {
            dataHeight = "";
        }

        var selector = {
            dropdownContainers: dropdownContainers,
            dropdownBtn: dropdownBtn,
            dropdownList: dropdownList,
            dataPosition: dataPosition,
            dataHeight: dataHeight,
            dataTarget: dataTarget,
            id: id
        };
        eventFunc(selector);
    });

    function eventFunc(selector) {
        selector.dropdownBtn.addEventListener("click", function () {
            selector.dropdownList.classList.forEach(function (show) {
                if (show == "show") {
                    resetFunc(selector);
                } else {
                    if (selector.id == selector.dataTarget) {
                        resetFunc(selector);

                        if (selector.dataPosition == "top") {
                            selector.dropdownList.style.transform = "translate(0px, -".concat(selector.dropdownBtn.offsetHeight, "px)");
                            selector.dropdownList.style.inset = "auto auto 0px 0px";
                        } else if (selector.dataPosition == "bottom") {
                            selector.dropdownList.style.transform = "translate(0px, ".concat(selector.dropdownBtn.offsetHeight, "px)");
                            selector.dropdownList.style.inset = "0px auto auto 0px";
                        } else if (selector.dataPosition == "right") {
                            selector.dropdownList.style.transform = "translate(".concat(selector.dropdownBtn.offsetWidth, "px, 0px)");
                            selector.dropdownList.style.inset = "0px auto auto 0px";
                        } else if (selector.dataPosition == "left") {
                            selector.dropdownList.style.transform = "translate(-".concat(selector.dropdownBtn.offsetWidth, "px, 0px)");
                            selector.dropdownList.style.inset = "0px 0px auto auto";
                        }

                        selector.dropdownList.classList.add("show", selector.dataPosition);
                        selector.dropdownList.style.height = "".concat(selector.dataHeight, "px");
                    }
                }
            });
        });
        document.addEventListener('keydown', function (event) {
            if (event.key === "Escape" || event.key === "Esc") {
                resetFunc(selector);
            }
        });
    }

    function resetFunc(selector) {
        selector.dropdownContainers.forEach(function (container) {
            var containerList = container.querySelector(".dropdown-list");
            var dataPosition = containerList.getAttribute("data-position");
            containerList.classList.remove("show", dataPosition);
            containerList.style.height = "";
        });
    }
};

document.addEventListener('DOMContentLoaded', function () {
    Dropdown();
});

/*!
 * Madosel Modal 1.0.0-alpha10
 * Copyright 2020-2021 Kenan Gündoğan
 * https://www.madosel.com
 * Licensed under MIT https://github.com/kenangundogan/madosel/blob/master/LICENSE
 * Released under the MIT License
 */
var Modal = function Modal() {
    var modalButtons = document.querySelectorAll(".modalBtn");
    modalButtons.forEach(function (modalButton) {
        var dataTarget = modalButton.getAttribute("data-target");
        var modalContainer = document.querySelector(dataTarget);
        var selector = {
            modalButton: modalButton,
            modalContainer: modalContainer
        };
        modalGetAttr(selector);
    });

    function modalGetAttr(selector) {
        if (selector.modalContainer) {
            var modalClose = selector.modalContainer.querySelector(".modal-close");
            var modalWrapper = selector.modalContainer.querySelector(".modal-wrapper");
            var dataPostion = selector.modalContainer.getAttribute("data-position");
            var dataSize = selector.modalContainer.getAttribute("data-size");
            var dataTransition = selector.modalContainer.getAttribute("data-transition");

            if (dataPostion == "" || dataPostion == null) {
                dataPostion = "center";
            }

            if (dataSize == "" || dataSize == null) {
                dataSize = "small";
            }

            if (dataTransition == "" || dataTransition == null) {
                dataTransition = "300";
            }

            options = {
                modalClose: modalClose,
                modalWrapper: modalWrapper,
                dataPostion: dataPostion,
                dataSize: dataSize,
                dataTransition: dataTransition
            };
            modalEventFunc(selector, options);
        }
    }

    function modalEventFunc(selector, options) {
        selector.modalButton.addEventListener("click", function () {
            selector.modalContainer.classList.add("show", options.dataPostion, options.dataSize);
            setTimeout(function () {
                options.modalWrapper.style.transition = "".concat(options.dataTransition, "ms");
                selector.modalContainer.classList.add("visible");
                selector.modalContainer.classList.add("transform");
            }, 0);
            modalCloseEventFunc(selector, options);
        });
    }

    function modalCloseEventFunc(selector, options) {
        if (options.modalClose) {
            options.modalClose.addEventListener("click", function () {
                modalCloseFunc(selector, options);
            });
            document.addEventListener('keydown', function (event) {
                if (event.key === "Escape" || event.key === "Esc") {
                    modalCloseFunc(selector, options);
                }
            });
        }
    }

    function modalCloseFunc(selector, options) {
        selector.modalContainer.classList.remove("visible", "transform");
        setTimeout(function () {
            selector.modalContainer.classList.remove(options.dataPostion, options.dataSize, "show");
            options.modalWrapper.style = "";
        }, options.dataTransition);
    }
};

window.Modal = Modal;

/*!
 * Madosel Navigation Tabs 1.0.0-alpha10
 * Copyright 2020-2021 Kenan Gündoğan
 * https://www.madosel.com
 * Licensed under MIT https://github.com/kenangundogan/madosel/blob/master/LICENSE
 * Released under the MIT License
 */
var NavigationTabs = function NavigationTabs(options) {
    var element = options.element,
        event = options.event == null ? "click" : options.event,
        direction = options.direction == undefined ? "top" : options.direction,
        activeTab = options.activeTab,
        navigationTabMenu = "".concat(element, " .navigation-tab-menu"),
        navigationTabMenuItem = "".concat(navigationTabMenu, " .navigation-tab-menu-item"),
        navigationTabContent = "".concat(element, " .navigation-tab-content"),
        navigationContentItem = "".concat(navigationTabContent, " .navigation-tab-content-item"),
        navigationContainer = document.querySelector(element),
        navigationMenuItems = document.querySelectorAll(navigationTabMenuItem),
        navigationContentItems = document.querySelectorAll(navigationContentItem);
    navigationContainer.classList.add(direction);
    navigationMenuItems.forEach(function (menuItem) {
        menuItem.addEventListener(event, function () {
            menuItemDataId = menuItem.getAttribute("data-id");
            navigationContentItems.forEach(function (contentItem) {
                contentItemDataId = contentItem.getAttribute("data-id");

                if (menuItemDataId == contentItemDataId) {
                    navigationTabHideFunc();
                    menuItem.classList.add("show");
                    contentItem.classList.add("show");
                }
            });
        });
    });

    function navigationTabHideFunc() {
        navigationMenuItems.forEach(function (menuItem) {
            menuItem.classList.remove("show");
        });
        navigationContentItems.forEach(function (contentItem) {
            contentItem.classList.remove("show");
        });
    }

    function navigationActiveTabFunc(activeTab) {
        navigationMenuItems.forEach(function (menuItem, key) {
            if (activeTab == key + 1) {
                menuItem.classList.add("show");
            }
        });
        navigationContentItems.forEach(function (contentItem, key) {
            if (activeTab == key + 1) {
                contentItem.classList.add("show");
            }
        });
    }

    navigationActiveTabFunc(activeTab);
};

window.NavigationTabs = NavigationTabs;

/*!
 * Madosel Offcanvas 1.0.0-alpha10
 * Copyright 2020-2021 Kenan Gündoğan
 * https://www.madosel.com
 * Licensed under MIT https://github.com/kenangundogan/madosel/blob/master/LICENSE
 * Released under the MIT License
 */
var Offcanvas = function Offcanvas() {
    var offcanvasButtons = document.querySelectorAll(".offcanvasBtn");
    offcanvasButtons.forEach(function (offcanvasButton) {
        var dataTarget = offcanvasButton.getAttribute("data-target");
        var offcanvasContainer = document.querySelector(dataTarget);
        var selector = {
            offcanvasButton: offcanvasButton,
            offcanvasContainer: offcanvasContainer
        };
        offcanvasGetAttr(selector);
    });

    function offcanvasGetAttr(selector) {
        if (selector.offcanvasContainer) {
            var offcanvasClose = selector.offcanvasContainer.querySelector(".offcanvas-close");
            var offcanvasWrapper = selector.offcanvasContainer.querySelector(".offcanvas-wrapper");
            var dataPostion = selector.offcanvasContainer.getAttribute("data-position");
            var dataSize = selector.offcanvasContainer.getAttribute("data-size");
            var dataTransition = selector.offcanvasContainer.getAttribute("data-transition");

            if (dataPostion == "" || dataPostion == null) {
                dataPostion = "left";
            }

            if (dataSize == "" || dataSize == null) {
                dataSize = "small";
            }

            if (dataTransition == "" || dataTransition == null) {
                dataTransition = "300";
            }

            options = {
                offcanvasClose: offcanvasClose,
                offcanvasWrapper: offcanvasWrapper,
                dataPostion: dataPostion,
                dataSize: dataSize,
                dataTransition: dataTransition
            };
            offcanvasEventFunc(selector, options);
        }
    }

    function offcanvasEventFunc(selector, options) {
        selector.offcanvasButton.addEventListener("click", function () {
            selector.offcanvasContainer.classList.add("show", options.dataPostion, options.dataSize);
            setTimeout(function () {
                options.offcanvasWrapper.style.transition = "".concat(options.dataTransition, "ms");
                selector.offcanvasContainer.classList.add("visible");
                selector.offcanvasContainer.classList.add("transform");
            }, 0);
            offcanvasCloseEventFunc(selector, options);
        });
    }

    function offcanvasCloseEventFunc(selector, options) {
        if (options.offcanvasClose) {
            options.offcanvasClose.addEventListener("click", function () {
                offcanvasCloseFunc(selector, options);
            });
            window.addEventListener("keydown", function (event) {
                if (event.key === "Escape" || event.key === "Esc") {
                    offcanvasCloseFunc(selector, options);
                }
            });
        }
    }

    function offcanvasCloseFunc(selector, options) {
        selector.offcanvasContainer.classList.remove("visible", "transform");
        setTimeout(function () {
            selector.offcanvasContainer.classList.remove(options.dataPostion, options.dataSize, "show");
            options.offcanvasWrapper.style = "";
        }, options.dataTransition);
    }
};

window.Offcanvas = Offcanvas;
//# sourceMappingURL=madosel-component.js.map