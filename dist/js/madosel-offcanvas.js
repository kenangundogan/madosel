/*!
 * Madosel Offcanvas 1.0.0-alpha11
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
//# sourceMappingURL=madosel-offcanvas.js.map