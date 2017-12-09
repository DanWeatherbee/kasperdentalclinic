/*
Written in a Object Oriented pattern OOP by Dan Weatherbee
index
*/
var app = new CreateIndexPageClass(CreateIndexPage);
app.renderIndexPage = function() {
    var self = this;
    console.log(self.indexContentObj);
    $('#root').append(self.indexContentObj.main.content1[0].indexMainContentContainer);
    // Content1 ==================================================
    // row
    $('#index-main-container').append(self.indexContentObj.main.content1[0].indexMainContent1Row1);
    // cols
    $('#index-main-row1').append(
        self.indexContentObj.main.content1[0].indexMainContent1Row1Col1,
        self.indexContentObj.main.content1[0].indexMainContent1Row1Col2
    );
    /*
     h1 - header
     */
    $('#index-main-row1-col2').append(
        // h1, h2
        self.indexContentObj.main.content1[0].indexMainContent1Row1Col2HeaderH1Tag,
        self.indexContentObj.main.content1[0].indexMainContent1Row1Col2HeaderH2Tag,

        // img jason
        self.indexContentObj.main.content1[0].indexMainContent1Row1Col2Img,
        // h3
        self.indexContentObj.main.content1[0].indexMainContent1Row1Col2HeaderH3Tag,
        // p - paragraph
        self.indexContentObj.main.content1[0].indexMainContent1Row1Col2PTag,
        // share buttons
        self.indexContentObj.main.content1[0].shareButtons,
        // icon down
        self.indexContentObj.main.content1[0].indexMainContent1Row1Col2IconDown
    );

    /*
    Text
     h1 text
    */
    $('#index-main-row1-col2-header-h1-tag').append(
        self.indexContentObj.main.content1[0].indexMainContent1Row1Col2HeaderH1TagText
    );
    $('#index-main-row1-col2-header-h2-tag').append(
        self.indexContentObj.main.content1[0].indexMainContent1Row1Col2HeaderH2TagText
    );
    $('#index-main-row1-col2-header-h3-tag').append(
        self.indexContentObj.main.content1[0].indexMainContent1Row1Col2HeaderH3TagText
    );
    // p text
    $('#index-main-row1-col2-p-tag').append(
        self.indexContentObj.main.content1[0].indexMainContent1Row1Col2PTagText
    );
    // Content2 ====================================================
    $('#root').append(self.indexContentObj.main.content2[0].indexMainContent2Row2ParallaxContainer);
    $('#index-main-row2-parallax-container').append(
        self.indexContentObj.main.content2[0].indexMainContent2ParallaxRow2Col1
    );
    $('#index-main-row2-parallax-col1').append(
        self.indexContentObj.main.content2[0].indexMainContent2Row2ParallaxContainerQuoteBox
    );
    $('#index-main-row2-parallax-container-quote-box').append(
        self.indexContentObj.main.content2[0].indexMainContent2ParallaxRow2Col1PTag
    );
    $('#index-main-row2-parallax-col1-tag').append(
        self.indexContentObj.main.content2[0].indexMainContent2Row2ParallaxContainerQuoteBoxIconLeft,
        self.indexContentObj.main.content2[0].indexMainContent2ParallaxRow2Col1PTagText,
        self.indexContentObj.main.content2[0].indexMainContent2Row2ParallaxContainerQuoteBoxIconRight
    );

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
