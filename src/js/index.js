   var contentIndex = '<main class="container animated fadeIn center-block">' +
       '<div class="row">' +
       '<div class="col-xs-2 col-sm-3 col-md-2 col-lg-3">' +
       '</div>' +
       '<div class="col-xs-8 col-sm-6 col-md-8 col-lg-6 text-center">' +
       '<h1>Kasper</h1>' +
       '<h2>Denture Clinic LTD</h2>' +
       '<img class="gradient img-thumbnail img-responsive center-block" src="images/jason-pic-team.png" id="index-jason-pic" alt="jason-pic-team.png">' +
       '<h3 id="phone-num">250-542-7423</h3>' +
       '<script src="https://apis.google.com/js/platform.js" async defer></script>' +
       '<div class="g-plus" data-action="share"></div>' +
       '<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">' +
       'Tweet</a>' +
       '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>' +
       '<br />' +
       '<div class="fb-share-button" data-href="http://kasperdentureclinic.ca/"' +
       ' data-layout="button" data-size="small" data-mobile-iframe="false">' +
       '<a class="fb-xfbml-parse-ignore" target="_blank" ' +
       'href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fkasperdentureclinic.ca%2F&amp;src=sdkpreparse">' +
       'Share</a></div>' +
       '<br /><br /><br /><br />' +
       '<p class="lead"><b>Let us restore your healthy smile.</b> Our expertise is in high quality, removable dental prosthesis for all ages. ' +
       'Our aim is to restore your healthy smile in a calm, relaxed atmosphere where your needs' +
       ' and well-being are our highest priority.<br />' +
       '<a style="background-color:white;color:inherit;border-radius:100%;border-color:black;" ' +
       'href="#parallax"><i class="fa fa-arrow-down fa-6"></i></a>' +
       '</div>' +
       '</div>' +
       '<div class="col-xs-2 col-sm-3 col-md-2 col-lg-3 center-block">' +
       '</div>' +
       '</div>' +
       '</main>';

   var contentParallax = '<div class="container-fluid" id="parallax">' +
       '<div class="qoute-box">' +
       '<p><i class="fa fa-quote-left"></i> Everytime you smile at someone,</p>' +
       '<p>it is an action of love,</p>' +
       '<p>a gift to that person, a beautiful thing.</p>' +
       '<p>Mother Teresa <i class="fa fa-quote-right"></i></p>' +
       '</div>' +
       '</div>';
   // TODO semantic tags.....main...
   $('body').append(
       contentIndex,
       contentParallax
   );