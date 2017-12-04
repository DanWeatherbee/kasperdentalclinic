// about-us render method
$('#root').append(init.layout.main.content1[0].mainContainer);
// Content1 ============================================================
// row
$('#about-main-container').append(init.layout.main.content1[1].row1);
// cols
$('#about-main-row1').append(init.layout.main.content1[2].row1Col1);
$('#about-main-row1').append(init.layout.main.content1[2].row1Col2);
$('#about-main-row1').append(init.layout.main.content1[2].row1Col3);
/*
Tags
 h1 - header
 */
 $('#about-main-row1-col2').append(init.layout.main.content1[3].row1Col2HeaderH1Tag);
 // p - paragraph
$('#about-main-row1-col2').append(init.layout.main.content1[5].row1Col2PTag);
/*
Text
 h1 text
*/
$('#about-main-row1-col2-header-h1-tag').append(init.layout.main.content1[4].row1Col2HeaderH1TagText);
// p text
$('#about-main-row1-col2-p-tag').append(init.layout.main.content1[6].row1Col2PTagText);
// // Content2 ============================================================
$('#about-main-container').append(init.layout.main.content2[0].row2);
$('#about-main-row2').append(init.layout.main.content2[1].row2Col1);
$('#about-main-row2').append(init.layout.main.content2[1].row2Col2);
$('#about-main-row2').append(init.layout.main.content2[1].row2Col3);
$('#about-main-row2').append(init.layout.main.content2[1].row2Col4);
$('#about-main-row2-col2').append(init.layout.main.content2[3].row2Col2Img);
$('#about-main-row2-col2').append(init.layout.main.content2[2].row2Col2Button);
$('#about-main-row2-col3').append(init.layout.main.content2[3].row2Col3Img);
$('#about-main-row2-col3').append(init.layout.main.content2[2].row2Col3Button);

// Content3 ============================================================
console.log(init.layout.main.content3[1].aboutMainContent3ParallaxRow3);
/*
 parallax container
 row 3
 */
$('#root').append(init.layout.main.content3[1].aboutMainContent3ParallaxRow3);
// col
$('#about-main-row3').append(init.layout.main.content3[1].aboutMainContent3ParallaxRow3Col1);
// quote box
$('#about-main-parallax-row3-col1').append(init.layout.main.content3[0].row3ParallaxQuoteBox);
// icon left
$('#about-main-row3-parallax-quote-box').append(init.layout.main.content3[0].row3ParallaxIconLeft);
// text
$('#about-main-row3-parallax-quote-box').append(init.layout.main.content3[0].row3ParallaxQuoteBoxText);
// icon right
$('#about-main-row3-parallax-quote-box').append(init.layout.main.content3[0].row3ParallaxIconRight);



