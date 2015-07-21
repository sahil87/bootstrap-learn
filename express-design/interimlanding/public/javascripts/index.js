var SC = {};
SC.page3Animated = false;
SC.page3Animate = function() {
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
    anchors: ['sportscafe', 'allsports', 'youridols', 'whyus', 'aboutus'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['SportCafe', 'All Sports', 'Your Idols', 'Why us', 'About US'],
    //afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
    afterLoad: function(anchorLink, index) {
      var loadedSlide = $(this);
      switch(anchorLink) {

        case "sportscafe": {
          SC.page1Animate();
          break;
        }
        case "allsports": {
            SC.page2Animate();
            break;
        }
        case "youridols": {
            SC.page3Animate();
            break;
        }

        default:
          break;
      }
      $("#navbar").find(".active").removeClass("active");
      $("#navbar").find("a:hover").removeClass("a:hover");
      $("#navbar").find("a:focus").removeClass("a:focus");
      $('#navbar a[href="#' + anchorLink + '"]').parent().addClass("active");
    },
    onLeave: function(index, nextIndex, direction) {
      var leavingSection = $(this);
      if (index == 1) {
        SC.testAnim('#page1-text-container',"hinge");
        setTimeout(function(){
          $("#page1-text-container").children().addClass("page1-text");
        }, 500);
      }
    }
  });
});

SC.testAnim = function(element, x) {
  $(element).removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass();
  });
};

SC.page1Animate = function() {
  setTimeout(function(){SC.testAnim('#page1-logo', "fadeIn");}, 3000);
  setTimeout(function(){SC.testAnim('#page1-text1', "fadeInLeft");}, 2000);
  setTimeout(function(){SC.testAnim('#page1-divider1', "fadeIn");}, 2800);
  setTimeout(function(){SC.testAnim('#page1-text2', "fadeInUp");}, 2200);
  setTimeout(function(){SC.testAnim('#page1-divider2', "fadeIn");}, 2800);
  setTimeout(function(){SC.testAnim('#page1-text3', "fadeInRight");}, 2200);
};

SC.page2Animate = function() {
  setTimeout(function(){SC.testAnim('#page2-text', "zoomIn");}, 1000);
};
