/*!
 * Madosel 1.0.0-alpha4
 * Copyright 2020-2021 Kenan Gündoğan
 * https://www.madosel.com
 * Licensed under MIT https://github.com/kenangundogan/madosel/blob/master/LICENSE
 * Released under the MIT License
 */

const NavigationTabs = options => {
    const element = options.element,
        event = options.event == null ? "click" : options.event,
        direction = options.direction == undefined ? "top" : options.direction,
        activeTab = options.activeTab,
        navigationTabMenu = `${element} .navigation-tab-menu`,
        navigationTabMenuItem = `${navigationTabMenu} .navigation-tab-menu-item`,
        navigationTabContent = `${element} .navigation-tab-content`,
        navigationContentItem = `${navigationTabContent} .navigation-tab-content-item`,
        navigationContainer = document.querySelector(element),
        navigationMenuItems = document.querySelectorAll(navigationTabMenuItem),
        navigationContentItems = document.querySelectorAll(navigationContentItem);

    navigationContainer.classList.add(direction);

    navigationMenuItems.forEach((menuItem) => {
        menuItem.addEventListener(event, () => {
            menuItemDataId = menuItem.getAttribute("data-id");
            navigationContentItems.forEach((contentItem) => {
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
        navigationMenuItems.forEach(menuItem => {
            menuItem.classList.remove("show");
        });
        navigationContentItems.forEach(contentItem => {
            contentItem.classList.remove("show");
        });
    }

    function navigationActiveTabFunc(activeTab) {
        navigationMenuItems.forEach((menuItem, key) => {
            if (activeTab == (key + 1)) {
                menuItem.classList.add("show");
            }
        });
        navigationContentItems.forEach((contentItem, key) => {
            if (activeTab == (key + 1)) {
                contentItem.classList.add("show");
            }
        });
    }
    navigationActiveTabFunc(activeTab);
}

window.NavigationTabs = NavigationTabs;