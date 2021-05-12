var isObjectType = (function (exports) {
    'use strict';

    function isObjectType(obj) {
        return Object.prototype.toString.call(obj).slice(8, -1);
    }

    exports.isObjectType = isObjectType;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
