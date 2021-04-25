/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************************!*\
  !*** ./js/components/madosel-dropdown.js ***!
  \*******************************************/
/*!
 * Madosel Dropdown 1.0.0-alpha8
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
/******/ })()
;
//# sourceMappingURL=madosel-dropdown.js.map