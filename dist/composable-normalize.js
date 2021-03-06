(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@bcombinator/prelude')) :
  typeof define === 'function' && define.amd ? define(['exports', '@bcombinator/prelude'], factory) :
  (factory((global.composableNormalize = global.composableNormalize || {}),global.bcombinatorPrelude));
}(this, (function (exports,_bcombinator_prelude) { 'use strict';

var dedupeSlashes = /([^:]\/)\/+/g
var dedupeDots = /\/\.+/g
var defaultPorts = /(:80|:443)/

var normalize = _bcombinator_prelude.compose(
  _bcombinator_prelude.replace(dedupeSlashes, '$1'),
  _bcombinator_prelude.replace(dedupeDots, '/'),
  _bcombinator_prelude.replace(defaultPorts, ''),
  _bcombinator_prelude.toLower,
  _bcombinator_prelude.append('/'),
  _bcombinator_prelude.decode
)

exports.normalize = normalize;
exports.compose = _bcombinator_prelude.compose;

Object.defineProperty(exports, '__esModule', { value: true });

})));