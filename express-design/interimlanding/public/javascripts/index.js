var SC = {};

$(document).ready(function() {
  $('#pagepiling').pagepiling({
    anchors: ['sportscafe', 'allsports', 'youridols', 'whyus', 'aboutus'],
    //animateAnchor: true,
    menu: "#menuanchor",
    navigation: {
      'textColor': '#000',
      'bulletsColor': '#000',
      'position': 'right',
      'tooltips': ['SportCafe', 'All Sports', 'Your Idols', 'Why Us', 'About']
    },
    //afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
    afterLoad: function(anchorLink, index) {
      var loadedSlide = $(this);
      switch (anchorLink) {

        case "sportscafe":
          {
            SC.page1Animate();
            break;
          }
        case "allsports":
          {
            SC.page2Animate();
            break;
          }
        case "youridols":
          {
            SC.page3Animate();
            break;
          }
        case "whyus":
          {
            SC.page4Animate();
            break;
          }
        default:
          break;
      }

      // $("#navbar").find("a:hover").removeClass("a:hover");
      // $("#navbar").find("a:focus").removeClass("a:focus");
      // $('#navbar a[href="#' + anchorLink + '"]').parent().addClass("active");
    },
    onLeave: function(index, nextIndex, direction) {
      var leavingSection = $(this);
      if (index == 1) {
        SC.testAnim('#page1-text-container', "hinge");
        setTimeout(function() {
          $("#page1-text-container").children().addClass("page1-text");
        }, 500);
      }
    },
    afterRender: function() {
      SC.page1Animate();
    }
  });
});

SC.testAnim = function(element, x) {
  $(element).removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass();
  });
};

SC.page1Animate = function() {
  setTimeout(function() {
    SC.testAnim('#page1-logo', "fadeIn");
  }, 1000);
  setTimeout(function() {
    SC.testAnim('#page1-text1', "fadeInLeft");
  }, 1000);
  setTimeout(function() {
    SC.testAnim('#page1-divider1', "fadeIn");
  }, 1800);
  setTimeout(function() {
    SC.testAnim('#page1-text2', "fadeInUp");
  }, 1200);
  setTimeout(function() {
    SC.testAnim('#page1-divider2', "fadeIn");
  }, 1800);
  setTimeout(function() {
    SC.testAnim('#page1-text3', "fadeInRight");
  }, 1200);
};

SC.page2Animate = function() {
  setTimeout(function() {
    SC.testAnim('#page2-text', "zoomIn");
  }, 0);
};

SC.page3Animate = function() {
  setTimeout(function() {
    SC.testAnim('#page3-text', "bounceInLeft");
  }, 0);
};
SC.page4Animate = function() {
  setTimeout(function() {
    SC.testAnim('#page4-panel-left', "bounceInLeft");
    $(function() {
      $('.page4-panel-left-text').textillate({ in: { effect: 'rollIn' } });
    });
    $(function() {
      $('.page4-panel-right-text').textillate({ in: { effect: 'rollIn', reverse: true } });
    });
  }, 0);
  setTimeout(function() {
    SC.testAnim('#page4-panel-right', "bounceInRight");
  }, 0);
};
