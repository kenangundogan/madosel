/*!
 * Madosel Dropdown 1.0.0-alpha6
 * Copyright 2020-2021 Kenan Gündoğan
 * https://www.madosel.com
 * Licensed under MIT https://github.com/kenangundogan/madosel/blob/master/LICENSE
 * Released under the MIT License
 */

const Dropdown = function () {

    const dropdownContainers = document.querySelectorAll(".dropdown-container");

    dropdownContainers.forEach(container => {

        let dropdownBtn = container.querySelector(".dropdown-btn"),
            dropdownList = container.querySelector(".dropdown-list"),
            dataPosition = dropdownList.getAttribute("data-position"),
            dataTarget = dropdownBtn.getAttribute("data-target"),
            id = dropdownList.id,
            dataHeight = dropdownList.getAttribute("data-height");
        if (dataPosition == "" || dataPosition == null) { dataPosition = "bottom" }
        if (dataHeight == "" || dataHeight == null) { dataHeight = "" }

        const selector = {
            dropdownContainers,
            dropdownBtn,
            dropdownList,
            dataPosition,
            dataHeight,
            dataTarget,
            id
        };
        eventFunc(selector);
    });

    function eventFunc(selector) {

        selector.dropdownBtn.addEventListener("click", () => {
            selector.dropdownList.classList.forEach(show => {
                if (show == "show") {
                    resetFunc(selector);
                }
                else {
                    if (selector.id == selector.dataTarget) {
                        resetFunc(selector);
                        if (selector.dataPosition == "top") {
                            selector.dropdownList.style.transform = `translate(0px, -${selector.dropdownBtn.offsetHeight}px)`;
                            selector.dropdownList.style.inset = "auto auto 0px 0px";
                        }
                        else if (selector.dataPosition == "bottom") {
                            selector.dropdownList.style.transform = `translate(0px, ${selector.dropdownBtn.offsetHeight}px)`;
                            selector.dropdownList.style.inset = "0px auto auto 0px";
                        }
                        else if (selector.dataPosition == "right") {
                            selector.dropdownList.style.transform = `translate(${selector.dropdownBtn.offsetWidth}px, 0px)`;
                            selector.dropdownList.style.inset = "0px auto auto 0px";
                        }
                        else if (selector.dataPosition == "left") {
                            selector.dropdownList.style.transform = `translate(-${selector.dropdownBtn.offsetWidth}px, 0px)`;
                            selector.dropdownList.style.inset = "0px 0px auto auto";
                        }

                        selector.dropdownList.classList.add("show", selector.dataPosition);
                        selector.dropdownList.style.height = `${selector.dataHeight}px`;
                    }
                }
            });
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === "Escape" || event.key === "Esc") {
                resetFunc(selector);
            }
        });

    }

    function resetFunc(selector) {

        selector.dropdownContainers.forEach(container => {
            let containerList = container.querySelector(".dropdown-list");
            let dataPosition = containerList.getAttribute("data-position");
            containerList.classList.remove("show", dataPosition);
            containerList.style.height = "";
        });

    }
}

document.addEventListener('DOMContentLoaded', () => {
    Dropdown();
})