var express = require('express');

module.exports = function(app) {
  // Install a "/ping" route that returns "pong"
  app.use('/', express.static('client'));
}