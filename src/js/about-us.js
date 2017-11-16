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

   var contentMain = '<section class="container" id="about-content">' +
       '<section class="row">' +
       '<div class="col-lg-12">' +
       '<h1 class="header-h1">Welcome To Our Dental Team</h1>' +
       '<p class="header-text">Thank you for choosing our office for your denture needs.' +
       ' We appreciate the confidence you place in our practice and will do our best to provide you with personalized ' +
       'care, products and service. We are here to make living with ' +
       'dentures as stress free as possible. At Kasper Denture Clinic we believe that it is essential to keep up to date with ' +
       'current advances in our field. Our team consists of friendly, educated ' +
       'and knowledgeable professionals who love what they do.' +
       '</div>' +
       '</section>' +
       '<section class="row">' +
       '<div class="col-lg-6 card-body">' +
       '<img class="card-img-top img-thumbnail" src="images/placeholder.jpg" alt="Registered Denturist">' +
       '<h4 class="card-title">Oley Kasper - Registered Denturist</h4>' +
       '<p class="card-text">Card Demo Content text goes here...</p>' +
       '<a href="oley-kasper.html" class="btn btn-outline-primary">Oley Kasper</a>' +
       '</div>' +
       '<div class="col-lg-6 card-body">' +
       '<img class="card-img-top img-thumbnail" src="images/placeholder.jpg" alt="Registered Denturist">' +
       '<h4 class="card-title">Jason Kasper - Registered Denturist</h4>' +
       '<p class="card-text">Card Demo Content text goes here...</p>' +
       '<a href="jason-kasper.html" class="btn btn-outline-primary">Jason Kasper</a>' +
       '</div>' +
       '</section>' +
       '</section>' +
       '<section class="container-fluid" id="parallax-about-us">' +
       '<div class="morph-delay qoute-box" style="margin-top:150px;color:white;">' +
       '<i class="morph-delay fa fa-quote-left"></i> We will never know all the good a simple smile can do. Nanno' +
       '<i class="morph-delay fa fa-quote-right"></i>' +
       '</div>' +
       '</section>';

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