!function(n){function o(t){if(e[t])return e[t].exports;var a=e[t]={i:t,l:!1,exports:{}};return n[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}var e={};o.m=n,o.c=e,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},o.p="",o(o.s=0)}([function(n,o,e){n.exports=e(1)},function(n,o){$(function(){$("#bs-example-navbar-collapse-1").on("shown.bs.collapse",function(){$("#navbar-hamburger").addClass("hidden"),$("#navbar-close").removeClass("hidden")}).on("hidden.bs.collapse",function(){$("#navbar-hamburger").removeClass("hidden"),$("#navbar-close").addClass("hidden")})}),$(document).on("click",".navbar-collapse.in",function(n){$(n.target).is("a")&&"dropdown-toggle"!=$(n.target).attr("class")&&$(this).collapse("hide")}),$(function(){$(document).click(function(n){$(".navbar-collapse").collapse("hide")})}),$(document).ready(function(){setTimeout(function(){$("#cookieConsent").fadeIn(200)},4e3),$("#closeCookieConsent, .cookieConsentOK").click(function(){$("#cookieConsent").fadeOut(200)})}),$(document).ready(function(){var n=0,o=$("#scroll_navbar"),e=o.offset();o.length&&$(document).scroll(function(){(n=$(this).scrollTop())>e.top?($(".navbar-default").addClass("navbar-scroll"),$(".navbar-desktop img").attr("src","https://mrdemonwolf.github.io/jslhub_com/assets/images/logo_text_dark.png")):($(".navbar-default").removeClass("navbar-scroll"),$(".navbar-desktop img").attr("src","https://mrdemonwolf.github.io/jslhub_com/assets/images/logo_text_light.png"))})})}]);