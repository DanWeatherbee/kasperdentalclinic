
/*
Written in a Object Oriented pattern OOP by Dan Weatherbee
index.js
main container
*/
var indexMainContentContainer = '<main class="container animated fadeIn" id="index-main-container"></main>';
/*
 Content 1 ============================= new ======================================
rows
*/
var indexMainContent1Row1 = '<section id="index-main-row1"></section>';
var indexMainContent2Row2 = '<section id="index-main-row2"></section>';
// cols
var indexMainContent1Row1Col1 = '<article class="col-xs-2 col-sm-3 col-md-2 col-lg-3" id="index-main-row1-col1"></article>';
var indexMainContent1Row1Col2 = '<article class="col-xs-8 col-sm-6 col-md-8 col-lg-6 text-center" id="index-main-row1-col2"></article>';
var indexMainContent1Row1Col3 = '<article class="col-xs-2 col-sm-3 col-md-2 col-lg-3" id="index-main-row1-col3"></article>';
// tags
var indexMainContent1Row1Col2HeaderH1Tag = '<h1 id="index-main-row1-col2-header-h1-tag"></h1>';
var indexMainContent1Row1Col2HeaderH2Tag = '<h2 id="index-main-row1-col2-header-h2-tag"></h2>';
var indexMainContent1Row1Col2HeaderH3Tag = '<h3 id="index-main-row1-col2-header-h3-tag"></h3>';
var indexMainContent1Row1Col2PTag = '<p class="header-text" id="index-main-row1-col2-p-tag"></p>';

// text
var indexMainContent1Row1Col2HeaderH1TagText = 'Kasper';
var indexMainContent1Row1Col2HeaderH2TagText = 'Denture Clinic LTD';
var indexMainContent1Row1Col2HeaderH3TagText = '250-542-7423';
var indexMainContent1Row1Col2PTagText = '<b>Let us restore your healthy smile.</b>' +
' Our expertise is in high quality, removable dental prosthesis.<br />' +
' Our aim is to restore your healthy smile in a calm,<br />' +
' relaxed atmosphere where your needs' +
' and well-being are our highest priority.';

// img
var indexMainContent1Row1Col2ImgSrc= 'images/jason-pic-team.png';
var indexMainContent1Row1Col2Img = '<img class="gradient img-thumbnail img-responsive center-block" ' +
'src="'+
indexMainContent1Row1Col2ImgSrc +
'" id="index-jason-pic" alt="' +
indexMainContent1Row1Col2ImgSrc +
'">';
var shareButtons = // share buttons ====================================================
'<script src="https://apis.google.com/js/platform.js" async defer></script>' +
// g - plus
'<div class="g-plus" data-action="share">' +
'</div>' +
// twitter
'<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">' +
'Tweet</a>' +
'<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>' +
'<br />' +
// facebook
'<div class="fb-share-button" data-href="http://kasperdentureclinic.ca/"' +
' data-layout="button" data-size="small" data-mobile-iframe="false">' +
'<a class="fb-xfbml-parse-ignore" target="_blank" ' +
'href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fkasperdentureclinic.ca%2F&amp;src=sdkpreparse">' +
'Share</a>' +
'</div>' +
'<br /><br /><br /><br />';
// icon down
var indexMainContent1Row1Col2IconDown = '<a style="background-color:white;color:inherit;border-radius:100%;border-color:black;" ' +
'href="#index-main-row2-parallax-container"><i class="fa fa-arrow-down fa-6" id="index-move-to-parallax-icon"></i></a>';

