var SC = {};
SC.page3Animated = false;
SC.page3Animation = function() {
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
  $('body').scrollspy({ target: '#navbar-example' });
  $('#fullpage').fullpage({
    anchors: ['sportscafe', 'allsports', 'youridols', 'whyus', 'aboutus'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['SportCafe', 'All Sports', 'Your Idols', 'Why us', 'About US'],
    //afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
    afterLoad: function(anchorLink, index) {
      var loadedSlide = $(this);
      if (anchorLink == 'youridols') {
        //alert("on third page");
        SC.page3Animation();
      } else if (anchorLink == 'sportscafe') {
        setTimeout(SC.page1Animate, 200);
      }
      $("#navbar").find(".active").removeClass("active");
      $('#navbar a[href="#' + anchorLink + '"]').parent().addClass("active");
    },
    onLeave: function(index, nextIndex, direction) {
      var leavingSection = $(this);
      if (index == 1) {
        SC.testAnim('#text-container',"hinge");
        setTimeout(function(){
          $("#text-container").children().addClass("page1-text");
        }, 500);
      }
    }
  });
});

SC.testAnim = function(element, x) {
  //alert("Animating with " + element + x);
  $(element).removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass();
  });
};

SC.page1Animate = function() {
  SC.testAnim('#logo',"flipInY");
  SC.testAnim('#text1',"slideInLeft");
  setTimeout(function(){SC.testAnim('#divider1', "bounceInDown");}, 500);
  setTimeout(function(){SC.testAnim('#text2', "fadeInUp");}, 1000);
  setTimeout(function(){SC.testAnim('#divider2', "bounceInDown");}, 1500);
  setTimeout(function(){SC.testAnim('#text3', "slideInRight");}, 2000);
  //$('#text2').wait(5000).addClass("animated fadeIn");
  //$('#text3').wait(2000).addClass("animated fadeIn");
};
