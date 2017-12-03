
var aboutMainContentContainer = '<main class="container animated fadeIn" id="about-main-container"></main>';
// rows
var aboutMainContent1Row1 = '<section class="row" id="about-main-row1"></section>';
var aboutMainContent2Row2 = '<section class="row" id="about-main-row2"></section>';
var aboutMainContent3Row3 = '<section class="row" id="about-main-row3"></section>';
/*
 Content 1 ===================================================================
 row 1

 */
// col 1
var aboutMainContent1Row1Col1 = '<article class="col-xs-12 text-center" id="about-main-row1-col1"></article>';


var aboutMainContent1Row1Col2HeaderH1Tag = '<h1 id="about-main-row1-col1-header-h1-tag" class="text-center"></h1>';
var aboutMainContent1Row1Col2HeaderH1TagText = 'Welcome To Our Dental Team';
var aboutMainContent1Row1Col2PTag = '<p class="header-text" id="about-main-row1-col2-p-tag"></p>';
var aboutMainContent1Row1Col2PTagText = 'Thank you for choosing our office for your denture needs.' +
    ' We appreciate the confidence you place in our practice and will do our best to provide you with personalized ' +
    'care, products and service. We are here to make living with ' +
    'dentures as stress free as possible. ' +
    'At Kasper Denture Clinic we believe that it is essential to keep up to date with ' +
    'current advances in our field. Our team consists of friendly, educated ' +
    'and knowledgeable professionals who love what they do.';

/*
 Content 2 ===================================================================
 row 2
 col 1
 */
var aboutMainContent2Row2Col1 = '<article class="col-xs-1 col-sm-2 col-md-3" id="about-main-row2-col1"></article>';
//col 2
var aboutMainContent2Row2Col2 = '<article class="col-xs-5 col-sm-4 col-md-3 team-img-container text-center" id="about-main-row2-col2"></article>';
// col 3
var aboutMainContent2Row2Col3 = '<article class="col-xs-5 col-sm-4 col-md-3 team-img-container text-center" id="about-main-row2-col3"></article>';
// col 4
var aboutMainContent2Row2Col4 = '<article class="col-xs-1 col-sm-2 col-md-3" id="about-main-row2-col4"></article>';


var aboutMainContent2Row2Col2Img = '<img class="gradient img-thumbnail img-responsive team-img center-block" src="images/oley-pic-team.png" alt="oley-pic-team.png">';
var aboutMainContent2Row2Col2ImgButton = '<a class="btn btn-success" href="oley-kasper.html">Oley Kasper</a>';

var aboutMainContent2Row2Col3Img = '<img class="gradient img-thumbnail img-responsive team-img center-block" src="images/jason-pic-team.png" alt="jason-pic-team.png">';
var aboutMainContent2Row2Col3ImgButton = '<a class="btn btn-success" href="jason-kasper.html">Jason Kasper</a>';

/*
 Content 3 ===================================================================
row 3
 parallax
 col 1
 */
var aboutMainContent3ParallaxRow3Col1 = '<article class="col-xs-12" id="about-main-parallax-row3-col1"></article>';

var aboutMainContent3Row3ParallaxContainer = '<section class="container-fluid" id="about-main-row3-parallax"></section>';
// quote box
var aboutMainContent3Row3ParallaxQuoteBox = '<div class="qoute-box" style="margin-top:150px;color:white;" id="about-main-row3-parallax-quote-box"></div>';
// quote box icons
var aboutMainContent3Row3ParallaxQuoteBoxFonAwesomeIconLeft = '<i class="fa fa-quote-left" id="about-main-row3-parallax-quote-box-icon-left"></i>';
var aboutMainContent3Row3ParallaxQuoteBoxFonAwesomeIconRight = '<i class="fa fa-quote-right" id="about-main-row3-parallax-quote-box-icon-right"></i>';
// quote box text
var aboutMainContent3Row3ParallaxQuoteBoxText = 'We will never know all the good a simple smile can do. Nanno';


// Data Object (database)
var layoutAboutPage = {
    'main': {
        'content1': [{
                'row1': aboutMainContent1Row1
            },
            {
                'row1Col1': aboutMainContent1Row1Col1
            },
            {
                'row1Col2HeaderH1Tag': aboutMainContent1Row1Col2HeaderH1Tag
            },
            {
                'row1Col2HeaderH1TagText': aboutMainContent1Row1Col2HeaderH1TagText
            },
            {
                'row1Col2PTag': aboutMainContent1Row1Col2PTag
            },
            {
                'row1Col2PTagText': aboutMainContent1Row1Col2PTagText
            }
        ],
        'content2': [{
                'row2': aboutMainContent2Row2
            },
            {
                'row2Col1': aboutMainContent2Row2Col1,
                'row2Col2': aboutMainContent2Row2Col2,
                'row2Col3': aboutMainContent2Row2Col3,
                'row2Col4': aboutMainContent2Row2Col4
            },
            {

                'row2Col2Button': aboutMainContent2Row2Col2ImgButton,
                'row2Col3Button': aboutMainContent2Row2Col3ImgButton

            },
            {
                'row2Col2Img': aboutMainContent2Row2Col2Img,
                'row2Col3Img': aboutMainContent2Row2Col3Img
            }
        ],
        'content3': [{
                'row3ParallaxContainer': aboutMainContent3Row3ParallaxContainer,
                'row3ParallaxQuoteBox' : aboutMainContent3Row3ParallaxQuoteBox,
                'row3ParallaxQuoteBoxText' :aboutMainContent3Row3ParallaxQuoteBoxText,
                'row3ParallaxIconLeft': aboutMainContent3Row3ParallaxQuoteBoxFonAwesomeIconLeft,
                 'row3ParallaxIconRight': aboutMainContent3Row3ParallaxQuoteBoxFonAwesomeIconRight
            },
            {
                'aboutMainContent3ParallaxRow3': aboutMainContent3Row3,
                'aboutMainContent3ParallaxRow3Col1': aboutMainContent3ParallaxRow3Col1
            }
        ]
    }
};

// Layout builder Class
LayoutClass = function(
    layout
) {
    var self = this;
    self.layout = layout;
};

var init = new LayoutClass(layoutAboutPage);

// Content1 ============================================================
// row
// $('#root').append(init.layout.main.content1[0].row1);
// cols
$('#about-main-row1').append(init.layout.main.content1[1].row1Col1);
// // h1 - header
$('#about-main-row1-col1').append(init.layout.main.content1[2].row1Col2HeaderH1Tag);
// h1 text
$('#about-main-row1-col1-header-h1-tag').append(init.layout.main.content1[3].row1Col2HeaderH1TagText);
// p - paragraph
$('#about-main-row1-col1').append(init.layout.main.content1[4].row1Col2PTag);
// p text
$('#about-main-row1-col2-p-tag').append(init.layout.main.content1[5].row1Col2PTagText);
console.log(init.layout.main.content1);
// // Content2 ============================================================
// $('#root').append(init.layout.main.content2[0].row2);
$('#about-main-row2').append(init.layout.main.content2[1].row2Col1);
$('#about-main-row2').append(init.layout.main.content2[1].row2Col2);
$('#about-main-row2').append(init.layout.main.content2[1].row2Col3);
$('#about-main-row2').append(init.layout.main.content2[1].row2Col4);
$('#about-main-row2-col2').append(init.layout.main.content2[3].row2Col2Img);
$('#about-main-row2-col2').append(init.layout.main.content2[2].row2Col2Button);
$('#about-main-row2-col3').append(init.layout.main.content2[3].row2Col3Img);
$('#about-main-row2-col3').append(init.layout.main.content2[2].row2Col3Button);

// Content3 ============================================================
// $('#root').append(init.layout.main.content3[1].aboutMainContent3ParallaxRow3);
$('#about-main-row3').append(init.layout.main.content3[1].aboutMainContent3ParallaxRow3Col1);

$('#about-main-parallax-row3-col1').append(init.layout.main.content3[0].row3ParallaxContainer);

$('#about-main-row3-parallax').append(init.layout.main.content3[0].row3ParallaxQuoteBox);
$('#about-main-row3-parallax-quote-box').append(init.layout.main.content3[0].row3ParallaxIconLeft);
$('#about-main-row3-parallax-quote-box').append(init.layout.main.content3[0].row3ParallaxQuoteBoxText);
$('#about-main-row3-parallax-quote-box').append(init.layout.main.content3[0].row3ParallaxIconRight);









