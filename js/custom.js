(function($) {
  $(document).ready(function() {
    const win = $(window),
      sectionWrapper = $('.section-video'),
      contentWrapper = $('.sticky-content'),
      introWrapper = $('.video-intro-wrapper'),
      videoIntro1 = $('.video-intro-1'),
      videoIntro2 = $('.video-intro-2'),
      manifestoWrapper = $('.video-manifesto-wrapper'),
      videoScrim = $('.video-scrim'),
      totalScrollArea = sectionWrapper.height() - contentWrapper.height(),
      videoOpacity = oValue => {
        videoScrim.css({ opacity: oValue });
      },
      introOpacity = oValue => {
        introWrapper.css({ opacity: oValue });
      },
      manifestoOpacity = oValue => {
        manifestoWrapper.css({ opacity: oValue });
      },
      introTransform = ty => {
        introWrapper.css({
          transform: `matrix(1, 0, 0, 1, 0, ${ty})`
        });
      },
      manifestoTransform = ty => {
        manifestoWrapper.css({
          transform: `matrix(1, 0, 0, 1, 0, ${ty})`
        });
      },
      moveIntro = pageYOffset => {
        console.log(
          pageYOffset,
          introWrapper.height(),
          manifestoWrapper.height() * 1.5 - pageYOffset,
          (manifestoWrapper.height() * 1.5 - pageYOffset / 1.8) / 1.8
        );
        let oValue;
        if (
          pageYOffset >=
          introWrapper.height() + introWrapper.height() / 1.2
        ) {
          console.log(1);
          videoOpacity(0.8);
          manifestoOpacity(1);
          manifestoTransform(manifestoWrapper.height() * 3 - pageYOffset);
        }
        if (
          pageYOffset >= introWrapper.height() + introWrapper.height() / 12 &&
          pageYOffset < introWrapper.height() + introWrapper.height() / 1.2
        ) {
          console.log(2);
          manifestoOpacity(0);
          // manifestoTransform(introWrapper.height() / 1.5);
          manifestoTransform(manifestoWrapper.height() * 1.5);
          videoIntro2.removeClass('hidden');
          videoOpacity(0);
        }
        if (
          pageYOffset >= introWrapper.height() &&
          pageYOffset < introWrapper.height() + introWrapper.height() / 12
        ) {
          videoIntro1.removeClass('hidden');
          videoIntro2.addClass('hidden');
          introOpacity(1);
          videoOpacity(0.8);
        }
        if (pageYOffset >= 400 && pageYOffset < introWrapper.height()) {
          introOpacity(0.15);
          videoIntro1.addClass('hidden');
          videoOpacity(1);
        }
        if (pageYOffset == 0) {
          introOpacity(0);
        }
        introOpacity(oValue);
        introTransform((introWrapper.height() - pageYOffset) / 1.8);
      },
      init = () => {
        videoOpacity(1);
        introTransform(introWrapper.height() / 1.8);
        introOpacity(0);
        manifestoTransform(manifestoWrapper.height() * 1.5);
        manifestoOpacity(0);
      };
    init();
    win.scroll(function(e) {
      if (e.currentTarget.pageYOffset === 0) {
        videoOpacity(1);
      }
      moveIntro(e.currentTarget.pageYOffset);
    });
  });
})(jQuery);
