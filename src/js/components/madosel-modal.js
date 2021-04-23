/*!
 * Madosel Modal 1.0.0-alpha6
 * Copyright 2020-2021 Kenan Gündoğan
 * https://www.madosel.com
 * Licensed under MIT https://github.com/kenangundogan/madosel/blob/master/LICENSE
 * Released under the MIT License
 */

const Modal = function () {
    const modalButtons = document.querySelectorAll(".modalBtn");
    modalButtons.forEach(modalButton => {
        const dataTarget = modalButton.getAttribute("data-target");
        const modalContainer = document.querySelector(dataTarget);
        const selector = {
            modalButton,
            modalContainer
        }
        modalGetAttr(selector);
    });

    function modalGetAttr(selector) {
        if (selector.modalContainer) {
            const modalClose = selector.modalContainer.querySelector(".modal-close");
            const modalWrapper = selector.modalContainer.querySelector(".modal-wrapper");
            let dataPostion = selector.modalContainer.getAttribute("data-position");
            let dataSize = selector.modalContainer.getAttribute("data-size");
            let dataTransition = selector.modalContainer.getAttribute("data-transition");
            if (dataPostion == "" || dataPostion == null) { dataPostion = "center"; }
            if (dataSize == "" || dataSize == null) { dataSize = "small"; }
            if (dataTransition == "" || dataTransition == null) { dataTransition = "300"; }
            options = {
                modalClose,
                modalWrapper,
                dataPostion,
                dataSize,
                dataTransition
            }
            modalEventFunc(selector, options);
        }
    }

    function modalEventFunc(selector, options) {
        selector.modalButton.addEventListener("click", () => {
            selector.modalContainer.classList.add("show", options.dataPostion, options.dataSize);
            setTimeout(() => {
                options.modalWrapper.style.transition = `${options.dataTransition}ms`;
                selector.modalContainer.classList.add("visible");
                selector.modalContainer.classList.add("transform");
            }, 0);
            modalCloseEventFunc(selector, options);
        });
    }

    function modalCloseEventFunc(selector, options) {
        if (options.modalClose) {
            options.modalClose.addEventListener("click", () => {
                modalCloseFunc(selector, options);
            });
            document.addEventListener('keydown', (event) => {
                if (event.key === "Escape" || event.key === "Esc") {
                    modalCloseFunc(selector, options);
                }
            });
        }
    }

    function modalCloseFunc(selector, options) {
        selector.modalContainer.classList.remove("visible", "transform");
        setTimeout(() => {
            selector.modalContainer.classList.remove(options.dataPostion, options.dataSize, "show");
            options.modalWrapper.style = "";
        }, options.dataTransition);
    }
}

window.Modal = Modal;