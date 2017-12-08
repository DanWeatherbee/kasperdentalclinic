/*
Written in a Object Oriented pattern OOP by Dan Weatherbee
index
*/
var app = new CreateIndexPageClass(CreateIndexPage);
app.renderIndexPage = function() {
    var self = this;
    console.log(CreateIndexPage);
    // $('#root').append(self.indexContentObj.main.content1[0].mainContainer);
    // // Content1 ============================================================
    // // row
    // $('#index-main-container').append(self.indexContentObj.main.content1[1].row1);
    // // cols
    // $('#index-main-row1').append(
    //     self.indexContentObj.main.content1[2].row1Col1,
    //     self.indexContentObj.main.content1[2].row1Col2,
    //     self.indexContentObj.main.content1[2].row1Col3
    // );
    /*
    Tags
     h1 - header
     */
    // $('#index-main-row1-col2').append(
    //     self.indexContentObj.main.content1[3].row1Col2HeaderH1Tag,
    //     // p - paragraph
    //     self.indexContentObj.main.content1[5].row1Col2PTag
    // );
    /*
    Text
     h1 text
    */
    // $('#index-main-row1-col2-header-h1-tag').append(
    //     self.indexContentObj.main.content1[4].row1Col2HeaderH1TagText
    // );
    // p text
    // $('#index-main-row1-col2-p-tag').append(
    //     self.indexContentObj.main.content1[6].row1Col2PTagText
    // );
    // // Content2 ============================================================
    // $('#index-main-container').append(self.indexContentObj.main.content2[0].row2);
    // $('#index-main-row2').append(
    //     self.indexContentObj.main.content2[1].row2Col1,
    //     self.indexContentObj.main.content2[1].row2Col2,
    //     self.indexContentObj.main.content2[1].row2Col3,
    //     self.indexContentObj.main.content2[1].row2Col4
    // );
    // $('#index-main-row2-col2').append(
    //     self.indexContentObj.main.content2[3].row2Col2Img,
    //     self.indexContentObj.main.content2[2].row2Col2Button
    // );
    // $('#index-main-row2-col3').append(
    //     self.indexContentObj.main.content2[3].row2Col3Img,
    //     self.indexContentObj.main.content2[2].row2Col3Button
    // );
    /*
     Content3 ============================================================
     parallax container
     row 3
     */
    // $('#root').append(self.indexContentObj.main.content3[1].indexMainContent3ParallaxRow3);
    // // col
    // $('#index-main-row3').append(self.indexContentObj.main.content3[1].indexMainContent3ParallaxRow3Col1);
    // // quote box
    // $('#index-main-parallax-row3-col1').append(self.indexContentObj.main.content3[0].row3ParallaxQuoteBox);
    // // icon left
    // $('#index-main-row3-parallax-quote-box').append(
    //     self.indexContentObj.main.content3[0].row3ParallaxIconLeft,
    //     // text
    //     self.indexContentObj.main.content3[0].row3ParallaxQuoteBoxText,
    //     // icon right
    //     self.indexContentObj.main.content3[0].row3ParallaxIconRight
    // );

};
app.renderIndexPage();
