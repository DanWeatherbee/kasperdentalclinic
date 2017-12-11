/*
Written in a Object Oriented pattern OOP by Dan Weatherbee
services Step 9.
When content 1 is complete and working, wire up admin to elements.
Then move on to content 2 and repeat.
*/
var app = new CreateServicesPageClass(CreateServicesPage);
app.renderServicesPage = function() {
    var self = this;

    $('#root').append(self.servicesContentObj.main.content1[0].servicesMainContentContainer);
    // Content1 ==================================================
    // row
    $('#services-main-container').append(self.servicesContentObj.main.content1[0].servicesMainContent1Row1);
    // cols
    $('#services-main-row1').append(
        self.servicesContentObj.main.content1[0].servicesMainContent1Row1Col1,
        self.servicesContentObj.main.content1[0].servicesMainContent1Row1Col2,
        self.servicesContentObj.main.content1[0].servicesMainContent1Row1Col3
    );
    /*
     h1 - header
     */
    $('#services-main-row1-col2').append(
        // h1
        self.servicesContentObj.main.content1[0].servicesMainContent1Row1Col2HeaderH1Tag,
        self.servicesContentObj.main.content1[0].servicesMainContent1Row1Col2HeaderH3Tag,
        self.servicesContentObj.main.content1[0].servicesMainContent1Row1Col2PTag,
        self.servicesContentObj.main.content1[0].servicesMainContent1Row1Col2UlTag,
        self.servicesContentObj.main.content1[0].servicesMainContent1Row1Col2IconDown
    );

    /*
    Text
     h1 text
    */
    $('#services-main-row1-col2-header-h1-tag').append(
        self.servicesContentObj.main.content1[0].servicesMainContent1Row1Col2HeaderH1TagText
    );
    // ul content
    $('#services-main-content1-row1-col2-ul-tag').append(
        self.servicesContentObj.main.content1[0].servicesMainContent1Row1Col2UlTagContent
    );
    $('#services-main-row1-col2-p-tag').append(
        self.servicesContentObj.main.content1[0].servicesMainContent1Row1Col2PTagText
    );
    $('#services-main-row1-col2-header-h3-tag').append(
        self.servicesContentObj.main.content1[0].servicesMainContent1Row1Col2HeaderH3TagText
    );
    // Content2 ==================================================
    console.log(self.servicesContentObj.main.content2[0]);
    // parallax contaner row 2
    $('#root').append(
        self.servicesContentObj.main.content2[0].servicesMainContent2Row2ParallaxContainer
    );
    // parallax content
    $('#services-main-row2-parallax-container').append(
        self.servicesContentObj.main.content2[0].servicesMainContent2ParallaxRow2Col1PTag
    );
    // p tag
    $('#services-main-row2-parallax-col1-p-tag').append(
        self.servicesContentObj.main.content2[0].servicesMainContent2Row2ParallaxContainerQuoteBoxIconLeft,
        self.servicesContentObj.main.content2[0].servicesMainContent2ParallaxRow2Col1PTagText,
        self.servicesContentObj.main.content2[0].servicesMainContent2Row2ParallaxContainerQuoteBoxIconRight
    );

};
app.renderServicesPage();