// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*
 *  Vide - v0.5.0
 *  Easy as hell jQuery plugin for video backgrounds.
 *  http://vodkabears.github.io/vide/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):b("object"==typeof exports?require("jquery"):a.jQuery)}(this,function(a){"use strict";function b(a){var b,c,d,e,f,g,h,i={};for(f=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,",").split(","),h=0,g=f.length;g>h&&(c=f[h],-1===c.search(/^(http|https|ftp):\/\//)&&-1!==c.search(":"));h++)b=c.indexOf(":"),d=c.substring(0,b),e=c.substring(b+1),e||(e=void 0),"string"==typeof e&&(e="true"===e||("false"===e?!1:e)),"string"==typeof e&&(e=isNaN(e)?e:+e),i[d]=e;return null==d&&null==e?a:i}function c(a){a=""+a;var b,c,d,e=a.split(/\s+/),f="50%",g="50%";for(d=0,b=e.length;b>d;d++)c=e[d],"left"===c?f="0%":"right"===c?f="100%":"top"===c?g="0%":"bottom"===c?g="100%":"center"===c?0===d?f="50%":g="50%":0===d?f=c:g=c;return{x:f,y:g}}function d(b,c){var d=function(){c(this.src)};a('<img src="'+b+'.gif">').load(d),a('<img src="'+b+'.jpg">').load(d),a('<img src="'+b+'.jpeg">').load(d),a('<img src="'+b+'.png">').load(d)}function e(c,d,e){if(this.$element=a(c),"string"==typeof d&&(d=b(d)),e?"string"==typeof e&&(e=b(e)):e={},"string"==typeof d)d=d.replace(/\.\w*$/,"");else if("object"==typeof d)for(var f in d)d.hasOwnProperty(f)&&(d[f]=d[f].replace(/\.\w*$/,""));this.settings=a.extend({},g,e),this.path=d;try{this.init()}catch(i){if(i.message!==h)throw i}}var f="vide",g={volume:1,playbackRate:1,muted:!0,loop:!0,autoplay:!0,position:"50% 50%",posterType:"detect",resizing:!0,bgColor:"transparent",className:""},h="Not implemented";e.prototype.init=function(){var b,e,g=this,i=g.path,j=i,k="",l=g.$element,m=g.settings,n=c(m.position),o=m.posterType;e=g.$wrapper=a("<div>").addClass(m.className).css({position:"absolute","z-index":-1,top:0,left:0,bottom:0,right:0,overflow:"hidden","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","background-color":m.bgColor,"background-repeat":"no-repeat","background-position":n.x+" "+n.y}),"object"==typeof i&&(i.poster?j=i.poster:i.mp4?j=i.mp4:i.webm?j=i.webm:i.ogv&&(j=i.ogv)),"detect"===o?d(j,function(a){e.css("background-image","url("+a+")")}):"none"!==o&&e.css("background-image","url("+j+"."+o+")"),"static"===l.css("position")&&l.css("position","relative"),l.prepend(e),"object"==typeof i?(i.mp4&&(k+='<source src="'+i.mp4+'.mp4" type="video/mp4">'),i.webm&&(k+='<source src="'+i.webm+'.webm" type="video/webm">'),i.ogv&&(k+='<source src="'+i.ogv+'.ogv" type="video/ogg">'),b=g.$video=a("<video>"+k+"</video>")):b=g.$video=a('<video><source src="'+i+'.mp4" type="video/mp4"><source src="'+i+'.webm" type="video/webm"><source src="'+i+'.ogv" type="video/ogg"></video>');try{b.prop({autoplay:m.autoplay,loop:m.loop,volume:m.volume,muted:m.muted,defaultMuted:m.muted,playbackRate:m.playbackRate,defaultPlaybackRate:m.playbackRate})}catch(p){throw new Error(h)}b.css({margin:"auto",position:"absolute","z-index":-1,top:n.y,left:n.x,"-webkit-transform":"translate(-"+n.x+", -"+n.y+")","-ms-transform":"translate(-"+n.x+", -"+n.y+")","-moz-transform":"translate(-"+n.x+", -"+n.y+")",transform:"translate(-"+n.x+", -"+n.y+")",visibility:"hidden",opacity:0}).one("canplaythrough."+f,function(){g.resize()}).one("playing."+f,function(){b.css({visibility:"visible",opacity:1}),e.css("background-image","none")}),l.on("resize."+f,function(){m.resizing&&g.resize()}),e.append(b)},e.prototype.getVideoObject=function(){return this.$video[0]},e.prototype.resize=function(){if(this.$video){var a=this.$wrapper,b=this.$video,c=b[0],d=c.videoHeight,e=c.videoWidth,f=a.height(),g=a.width();g/e>f/d?b.css({width:g+2,height:"auto"}):b.css({width:"auto",height:f+2})}},e.prototype.destroy=function(){delete a[f].lookup[this.index],this.$video&&this.$video.off(f),this.$element.off(f).removeData(f),this.$wrapper.remove()},a[f]={lookup:[]},a.fn[f]=function(b,c){var d;return this.each(function(){d=a.data(this,f),d&&d.destroy(),d=new e(this,b,c),d.index=a[f].lookup.push(d)-1,a.data(this,f,d)}),this},a(document).ready(function(){var b=a(window);b.on("resize."+f,function(){for(var b,c=a[f].lookup.length,d=0;c>d;d++)b=a[f].lookup[d],b&&b.settings.resizing&&b.resize()}),b.on("unload."+f,function(){return!1}),a(document).find("[data-"+f+"-bg]").each(function(b,c){var d=a(c),e=d.data(f+"-options"),g=d.data(f+"-bg");d[f](g,e)})})});
