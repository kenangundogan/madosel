/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./js/components/madosel-modal.js ***!
  \****************************************/
/*!
 * Madosel Modal 1.0.0-alpha8
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
/******/ })()
;
//# sourceMappingURL=madosel-modal.js.map