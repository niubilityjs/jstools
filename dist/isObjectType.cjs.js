'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isObjectType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
}

exports.isObjectType = isObjectType;
