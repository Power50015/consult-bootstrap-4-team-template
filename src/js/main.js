/*import css files */
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css";
global.$ = require('jquery');

$(function () {
  "use strict";
  var bgHight = $(window).height() - $("header .top").height();
  $("header .header-background").height(bgHight);
});
