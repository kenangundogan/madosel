/*!
 * Madosel Offcanvas 1.0.0-alpha9
 * Copyright 2020-2021 Kenan Gündoğan
 * https://www.madosel.com
 * Licensed under MIT https://github.com/kenangundogan/madosel/blob/master/LICENSE
 * Released under the MIT License
 */

const Offcanvas = function () {
    const offcanvasButtons = document.querySelectorAll(".offcanvasBtn");
    offcanvasButtons.forEach(offcanvasButton => {
        const dataTarget = offcanvasButton.getAttribute("data-target");
        const offcanvasContainer = document.querySelector(dataTarget);
        const selector = {
            offcanvasButton,
            offcanvasContainer
        }
        offcanvasGetAttr(selector);
    });

    function offcanvasGetAttr(selector) {
        if (selector.offcanvasContainer) {
            const offcanvasClose = selector.offcanvasContainer.querySelector(".offcanvas-close");
            const offcanvasWrapper = selector.offcanvasContainer.querySelector(".offcanvas-wrapper");
            let dataPostion = selector.offcanvasContainer.getAttribute("data-position");
            let dataSize = selector.offcanvasContainer.getAttribute("data-size");
            let dataTransition = selector.offcanvasContainer.getAttribute("data-transition");
            if (dataPostion == "" || dataPostion == null) { dataPostion = "left"; }
            if (dataSize == "" || dataSize == null) { dataSize = "small"; }
            if (dataTransition == "" || dataTransition == null) { dataTransition = "300"; }
            options = {
                offcanvasClose,
                offcanvasWrapper,
                dataPostion,
                dataSize,
                dataTransition
            }
            offcanvasEventFunc(selector, options);
        }
    }

    function offcanvasEventFunc(selector, options) {
        selector.offcanvasButton.addEventListener("click", () => {
            selector.offcanvasContainer.classList.add("show", options.dataPostion, options.dataSize);
            setTimeout(() => {
                options.offcanvasWrapper.style.transition = `${options.dataTransition}ms`;
                selector.offcanvasContainer.classList.add("visible");
                selector.offcanvasContainer.classList.add("transform");
            }, 0);
            offcanvasCloseEventFunc(selector, options);
        });
    }

    function offcanvasCloseEventFunc(selector, options) {
        if (options.offcanvasClose) {
            options.offcanvasClose.addEventListener("click", () => {
                offcanvasCloseFunc(selector, options);
            });
            window.addEventListener("keydown", (event) => {
                if (event.key === "Escape" || event.key === "Esc") {
                    offcanvasCloseFunc(selector, options);
                }
            });
        }
    }

    function offcanvasCloseFunc(selector, options) {
        selector.offcanvasContainer.classList.remove("visible", "transform");
        setTimeout(() => {
            selector.offcanvasContainer.classList.remove(options.dataPostion, options.dataSize, "show");
            options.offcanvasWrapper.style = "";
        }, options.dataTransition);
    }
}

window.Offcanvas = Offcanvas;