(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.isObjectType = {}));
}(this, (function (exports) { 'use strict';

    function isObjectType(obj) {
        return Object.prototype.toString.call(obj).slice(8, -1);
    }

    exports.isObjectType = isObjectType;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
