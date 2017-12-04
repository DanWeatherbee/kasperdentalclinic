// about-us render method

$('#root').append(init.layout.main.content1[0].mainContainer);
// Content1 ============================================================
// row
$('#about-main-container').append(self.aboutMainContent1Row1);
// cols
$('#about-main-row1').append(self.aboutMainContent1Row1Col1);
$('#about-main-row1').append(self.aboutMainContent1Row1Col2);
$('#about-main-row1').append(self.aboutMainContent1Row1Col3);
/*
Tags
 h1 - header
 */
$('#about-main-row1-col2').append(self.aboutMainContent1Row1Col2HeaderH1Tag);
// p - paragraph
$('#about-main-row1-col2').append(self.aboutMainContent1Row1Col2PTag);
/*
Text
 h1 text
*/
$('#about-main-row1-col2-header-h1-tag').append(self.aboutMainContent1Row1Col2HeaderH1TagText);
// p text
$('#about-main-row1-col2-p-tag').append(self.aboutMainContent1Row1Col2PTagText);
// // Content2 ============================================================
$('#about-main-container').append(self.aboutMainContent2Row2);
$('#about-main-row2').append(self.aboutMainContent2Row2Col1);
$('#about-main-row2').append(self.aboutMainContent2Row2Col2);
$('#about-main-row2').append(self.aboutMainContent2Row2Col3);
$('#about-main-row2').append(self.aboutMainContent2Row2Co4);
$('#about-main-row2-col2').append(self.aboutMainContent2Row2Col2Img);
$('#about-main-row2-col2').append(self.aboutMainContent2Row2Col2ImgButton);
$('#about-main-row2-col3').append(self.aboutMainContent2Row2Col3Img);
$('#about-main-row2-col3').append(self.aboutMainContent2Row2Col3ImgButton);
/*
 Content3 ============================================================
 parallax container
 row 3
 */
$('#root').append(self.aboutMainContent3Row3ParallaxContainer);
// col
$('#about-main-row3').append(self.aboutMainContent3ParallaxRow3Col1);
// quote box
$('#about-main-parallax-row3-col1').append(self.aboutMainContent3Row3ParallaxQuoteBox);
// icon left
$('#about-main-row3-parallax-quote-box').append(self.aboutMainContent3Row3ParallaxQuoteBoxFonAwesomeIconLeft);
// text
$('#about-main-row3-parallax-quote-box').append(self.aboutMainContent3Row3ParallaxQuoteBoxText);
// icon right
$('#about-main-row3-parallax-quote-box').append(self.aboutMainContent3Row3ParallaxQuoteBoxFonAwesomeIconRight);

console.log(self);