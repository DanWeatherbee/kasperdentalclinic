// about-us render method
var app = new CreateAboutPageClass(CreateAboutPage);
app.renderAboutPage = function() {
    var self = this;
    $('#root').append(self.aboutContentObj.main.content1[0].mainContainer);
    // Content1 =============================================

    // row
    $('#about-main-container').append(self.aboutContentObj.main.content1[1].row1);
    // cols
    $('#about-main-row1').append(
        self.aboutContentObj.main.content1[2].row1Col1,
        self.aboutContentObj.main.content1[2].row1Col2,
        self.aboutContentObj.main.content1[2].row1Col3
    );
    /*
    Tags
     h1 - header
     */
    $('#about-main-row1-col2').append(
        self.aboutContentObj.main.content1[3].row1Col2HeaderH1Tag,
        // p - paragraph
        self.aboutContentObj.main.content1[5].row1Col2PTag
    );
    /*
    Text
     h1 text
    */
    $('#about-main-row1-col2-header-h1-tag').append(
        self.aboutContentObj.main.content1[4].row1Col2HeaderH1TagText
    );
    // p text
    $('#about-main-row1-col2-p-tag').append(
        self.aboutContentObj.main.content1[6].row1Col2PTagText
    );
    // // Content2 ============================================================
    $('#about-main-container').append(self.aboutContentObj.main.content2[0].row2);
    $('#about-main-row2').append(
        self.aboutContentObj.main.content2[1].row2Col1,
        self.aboutContentObj.main.content2[1].row2Col2,
        self.aboutContentObj.main.content2[1].row2Col3,
        self.aboutContentObj.main.content2[1].row2Col4
    );
    $('#about-main-row2-col2').append(
        self.aboutContentObj.main.content2[3].row2Col2Img,
        self.aboutContentObj.main.content2[2].row2Col2Button,
        self.aboutContentObj.main.content2[3].aboutMainContent2Row2Col2ImgPTagOley
    );
    $('#about-main-content2-row2-col2-img-p-tag-oley').append(
        self.aboutContentObj.main.content2[3].aboutMainContent2Row2Col2ImgPTagOleyText
    );
    $('#about-main-row2-col3').append(
        self.aboutContentObj.main.content2[3].row2Col3Img,
        self.aboutContentObj.main.content2[2].row2Col3Button,
        self.aboutContentObj.main.content2[3].aboutMainContent2Row2Col3ImgPTagJason
    );
    $('#about-main-content2-row2-col2-img-p-tag-jason').append(
        self.aboutContentObj.main.content2[3].aboutMainContent2Row2Col3ImgPTagJasonText
    );

    /*
     Content3 ============================================================
     parallax container
     row 3
     */
    $('#root').append(self.aboutContentObj.main.content3[1].aboutMainContent3ParallaxRow3);
    // col
    $('#about-main-row3').append(self.aboutContentObj.main.content3[1].aboutMainContent3ParallaxRow3Col1);
    // quote box
    $('#about-main-parallax-row3-col1').append(self.aboutContentObj.main.content3[0].row3ParallaxQuoteBox);
    // icon left
    $('#about-main-row3-parallax-quote-box').append(
        self.aboutContentObj.main.content3[0].row3ParallaxIconLeft,
        // text
        self.aboutContentObj.main.content3[0].row3ParallaxQuoteBoxText,
        // icon right
        self.aboutContentObj.main.content3[0].row3ParallaxIconRight
    );
    $('#root').append(contentFooter);
};
app.renderAboutPage();