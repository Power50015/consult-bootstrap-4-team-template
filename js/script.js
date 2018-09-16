/*global $, window*/
$(function () {
	'use strict';
	var bgHight = ($(window).height()) - ($('header .top').height());
    $('header .header-background').height(bgHight);
});