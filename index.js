// pattern copied from fetch polyfill: https://github.com/github/fetch/blob/master/fetch.js
(function(self) {
    'use strict'
    var debugClient = require('debug')('onorientationchange')
    self.onorientationchange = self.onorientationchange || function(e) { debugClient("called with", e) }
})(typeof self !== 'undefined' ? self : this)
