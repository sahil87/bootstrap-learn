var SPORTSCAFE = {};
SPORTSCAFE.page3Animated = false;
SPORTSCAFE.page3Animation = function() {
  //alert("trying to animate");
  $('.collage').removeWhitespace().collagePlus({
    allowPartialLastRow: true,
    effect: 'effect-6',
    targetHeight: 450
  });
};

// SPORTSCAFE.resizeTimer = null;
// SPORTSCAFE.page3Animate = function() {
//     if (!this.page3Animated) {
//       this.page3Animation();
//       this.page3Animated = true;
//     } else {
//       var collage = $('.collage');
//       var newCollage = collage.cloneNode(true);
//       collage.parentNode.replaceChild(newCollage, collage);
//       //$('.collage .image_wrapper').css("opacity", 0);
//       //this.page3Animation();
//       // set a timer to re-apply the plugin
//       if (this.resizeTimer) clearTimeout(resizeTimer);
//       this.resizeTimer = setTimeout(this.page3Animation, 2000);
//     }
//   }
//$(window).load(function () {
//  SPORTSCAFE.page3Animation();
//});

$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
    //afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
    afterLoad: function(anchorLink, index) {
      var loadedSlide = $(this);
      if (anchorLink == 'thirdPage') {
        //alert("on third page");
        SPORTSCAFE.page3Animation();
      } else if (anchorLink == 'firstPage') {
        setTimeout(SPORTSCAFE.page1Animate, 2000);
      }
    }
  });
});

$.wait = function(ms) {
    var defer = $.Deferred();
    setTimeout(function() { defer.resolve(); }, ms);
    return defer;
};

SPORTSCAFE.page1Animate = function() {
  $('#text1').addClass("animated fadeInLeft");
  setTimeout(function(){$('#divider1').addClass("animated fadeIn");}, 1000);
  setTimeout(function(){$('#text2').addClass("animated fadeInUp");}, 1500);
  setTimeout(function(){$('#divider2').addClass("animated fadeIn");}, 2500);
  setTimeout(function(){$('#text3').addClass("animated fadeInRight");}, 3000);
  //$('#text2').wait(5000).addClass("animated fadeIn");
  //$('#text3').wait(2000).addClass("animated fadeIn");
};
//setTimeout(SPORTSCAFE.textAnimate, 2000);
