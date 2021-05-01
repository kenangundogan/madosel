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
//# sourceMappingURL=madosel-navigation-tabs.js.map