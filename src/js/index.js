   var contentNav = '<nav class="navbar navbar-inverse navbar-fixed-top" id="topnav1" role="navigation">' +
       '<div class="navbar-header">' +
       '<button type="button" class="morph-delay navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">' +
       '<span class="morph-delay sr-only">Toggle navigation</span>' +
       '<span class="morph-delay icon-bar"></span>' +
       '<span class="morph-delay icon-bar"></span>' +
       '<span class="morph-delay icon-bar"></span>' +
       '</button>' +
       '<div class="navbar-brand" href="index.html">' +
       '<img class="img-responsive" style="height:35px;width:110px;" src="images/logo.png" alt="logo.png">' +
       '</div>' +
       '</div>' +
       '<div class="morph-delay collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">' +
       '<ul class="morph-delay nav navbar-nav">' +
       '<li class="morph-delay divider" id="nav1"></li>' +
       '<li class="animated flipInX" id="nav1"><a href="services.html">Services</a></li>' +
       '<li class="morph-delay divider" id="nav2"></li>' +
       '<li class="animated flipInX" id="nav2"><a href="denture.html">Dentures </a></li>' +
       ' <li class="morph-delay divider" id="nav3"></li>' +
       '<li class="animated flipInX" id="nav3"><a href="about-us.html">About</a></li>' +
       '<li class="morph-delay divider" id="nav4"></li>' +
       '<li class="animated flipInX" id="nav4"><a href="before-after.html">Photos</a></li>' +
       '<li class="morph-delay divider" id="nav5"></li>' +
       '<li class="animated flipInX" id="nav5"><a href="testimonials.html">Testimonials</a></li>' +
       '<li class="morph-delay divider" id="nav6"></li>' +
       '<li class="animated flipInX" id="nav6"><a href="news.html">News</a></li>' +
       '<li class="morph-delay divider" id="nav7"></li>' +
       '<li class="animated flipInX" id="nav7"><a href="appointment.html">Appointment</a></li>' +
       '<li class="morph-delay divider" id="nav8"></li>' +
       '<li class="animated flipInX" id="nav8"><a href="contact.html">Clinic</a></li>' +
       '</ul>' +
       '</div>' +
       '</nav>';

   var contentMain = '<section class="container center-block" id="main">' +
       '<div class="row text-center">' +
       '<div class="col-12 text-center">' +
       '<img class="img-responsive" id="index-logo-main" src="images/logo.png" alt="logo.png">' +
       '<h3 id="phone-num">250-542-7423</h3>' +
       '<br />' +
       '<div id="sharebuttons">' +
       '<i class="fa fa-facebook-square  fa-3x"></i>' +
       '<i class="fa fa-twitter-square fa-3x"></i>' +
       '<i class="fa fa-google-plus-square fa-3x"></i>' +
       '</div>' +
       '<p class="lead">Our expertise is in high quality, removable dental prosthesis for all ages. ' +
       'Our aim is to restore your healthy smile in a calm, relaxed atmosphere where your needs' +
       ' and well-being are our highest priority.</p>' +
       '</div>' +
       '</div>' +
       '</section>' +
       '<div class="container-fluid">' +
       '<div class="row">' +
       '<div class="col-12" id="parallax">' +
       '<div class="qoute-box">' +
       '<i class="fa fa-quote-left"></i>' +
       '<p>Everytime you smile at someone,</p>' +
       '<p>it is an action of love,</p>' +
       '<p>a gift to that person, a beautifull thing.</p>' +
       '<p>Mother Teresa</p>' +
       '<i class="fa fa-quote-right"></i>' +
       '</div>' +
       '</div>' +
       '</div>' +
       '</div>';

   var contentFooter = '<section class="container-fluid bg-black footer">' +
       '<div class="bg-black row text-center">' +
       '<div class="bg-black col-md-5">' +
       '<p>' +
       '<b>Our Location</b>' +
       '<br> 3414 28 Ave' +
       '<br> Vernon, B.C. V1T 1W9' +
       '<br> 250-542-7423' +
       '</p>' +
       '</div>' +
       '<div class="bg-black col-sm-2">' +
       '<div class="text-center">' +
       '<img class="img-responsive" src="images/logo.png" alt="">' +
       '</div>' +
       '</div>' +
       '<div class="bg-black col-sm-5">' +
       '<p class="text-center">' +
       '<b>Our Hours</b>' +
       '<br>' +
       '<em> Monday to Friday</em>' +
       '<br> 8:30am - 12:00pm' +
       '<br> 1:00pm 4:30pm' +
       '<br>' +
       '</p>' +
       '</div>' +
       '</div>' +
       '<div class="row">' +
       '<div class="bg-black col-sm-12">' +
       '<div class="text-center" style="padding-top:10px;padding-bottom:40px">' +
       '<a href="index.html">' +
       'Home' +
       '</a> &nbsp; &nbsp;' +
       '<a href="contact.html">' +
       'Contact' +
       '</a> &nbsp; &nbsp;' +
       '</div>' +
       '<div class="text-center" style="padding-top:10px;padding-bottom:40px">' +
       '<a class="copyright" href="">CopyRight &#169; Kasper Denture Clinic L.T.D. 2017</a>' +
       '<br>' +
       '<br>' +
       '<a class="copyright" href="http://danweatherbee-front-end-web-developer.com">Created by Dan Weatherbee</a>' +
       '</div>' +
       '</div>' +
       '</div>' +
       '</section>';

   $('body').append(
       contentNav,
       contentMain,
       contentFooter
   );