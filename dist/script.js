/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*******************!*\
  !*** ./script.ts ***!
  \*******************/


//const msg: string = "Hello!";
//alert(msg);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ThemeSwitcher = /*#__PURE__*/function () {
  function ThemeSwitcher(defaultTheme, themeFiles) {
    _classCallCheck(this, ThemeSwitcher);
    this.activeTheme = defaultTheme;
    this.themes = themeFiles;
    // Ustaw domyślny motyw
    this.switchTheme(this.activeTheme);
    // Inicjuj interakcje z elementami na stronie
    this.initClickHandlers();
  }
  // Zmiana aktualnego motywu
  return _createClass(ThemeSwitcher, [{
    key: "switchTheme",
    value: function switchTheme(themeName) {
      var _a;
      if (!(themeName in this.themes)) {
        console.warn("Theme '".concat(themeName, "' is not available."));
        return;
      }
      var currentLink = document.getElementById('theme-stylesheet');
      if (currentLink) {
        (_a = currentLink.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(currentLink);
      }
      var linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.href = this.themes[themeName];
      linkElement.id = 'theme-stylesheet';
      document.head.appendChild(linkElement);
      this.activeTheme = themeName;
    }
    // Inicjalizacja obsługi kliknięć
  }, {
    key: "initClickHandlers",
    value: function initClickHandlers() {
      var _this = this;
      var themeLinks = document.querySelectorAll('a[data-theme]');
      themeLinks.forEach(function (element) {
        element.addEventListener('click', function (e) {
          e.preventDefault();
          var clickedElement = e.target;
          var selectedTheme = clickedElement.getAttribute('data-theme');
          if (selectedTheme) {
            _this.switchTheme(selectedTheme);
          }
        });
      });
    }
  }]);
}();
var themeFiles = {
  'style1': 'css/style1.css',
  'style2': 'css/style2.css'
};
new ThemeSwitcher('style1', themeFiles);
/******/ })()
;