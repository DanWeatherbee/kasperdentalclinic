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
    // Content3 ==================================================

    $('#root').append(
        self.servicesContentObj.main.content3[0].servicesContent3Container
    );

    $('#services-content3-container').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2
    );
    $('#services-content3-row2').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2Col1,
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2,
        self.servicesContentObj.main.content3[0].servicesContent3row2Col3
    );

    // TODO refactor using for loops.===================================================
    var tagsArray = [self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3Tag1,
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTag1,
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3Tag2,
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTag2,
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3Tag3,
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTag3,
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3Tag4,
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTag4,
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3Tag5,
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTag5,
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3Tag6,
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTag6,
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3Tag7,
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTag7,
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3Tag8,
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTag8
    ];

    tagsArray.forEach(function(item) {
        console.log(item);
        $('#services-content3-row2-col2').append(item);
    });

    $('#services-content3-row2-col2-h3-tag1').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText1
    );
    $('#services-content3-row2-col2-h3-tag2').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText2
    );
    $('#services-content3-row2-col2-h3-tag3').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText3
    );
    $('#services-content3-row2-col2-h3-tag4').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText4
    );
    $('#services-content3-row2-col2-h3-tag5').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText5
    );
    $('#services-content3-row2-col2-h3-tag6').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText6
    );
    $('#services-content3-row2-col2-h3-tag7').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText7
    );
    $('#services-content3-row2-col2-h3-tag8').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText8
    );
    // p text
    $('#services-content3-row2-col2-p1-tag').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText1
    );
    $('#services-content3-row2-col2-p2-tag').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText2
    );
    $('#services-content3-row2-col2-p3-tag').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText3
    );
    $('#services-content3-row2-col2-p4-tag').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText4
    );
    $('#services-content3-row2-col2-p5-tag').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText5
    );
    $('#services-content3-row2-col2-p6-tag').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText6
    );
    $('#services-content3-row2-col2-p7-tag').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText7
    );
    $('#services-content3-row2-col2-p8-tag').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText8
    );
    // Content4 ==================================================
    $('#root').append(
        self.servicesContentObj.main.content4[0].servicesContent4Container
    );
    $('#services-content4-container').append(
        self.servicesContentObj.main.content4[0].servicesContent4Row4
    );
    $('#services-content4-row4').append(
        self.servicesContentObj.main.content4[0].servicesContent4Row4Col1,
        self.servicesContentObj.main.content4[0].servicesContent4Row4Col2,
        self.servicesContentObj.main.content4[0].servicesContent4Row4Col3
    );
    $('#services-content4-row4-col2').append(
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersHeaderH1Faq1
    );
    $('#services-collapsible-containers-header-h1-faq-1').append(
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersHeaderH1TextFaq1
    );

    $('#services-content4-row4-col2').append(
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersHeaderH1Faq1,
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersFaq1,
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersFaq2,
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersFaq3,
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersFaq4
    );
    $('#services-collapsible-containers-header-h1-faq-1').append(
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersHeaderH1TextFaq1
    );
    console.log(self.servicesContentObj.main);
    // Collapsible container 1 ----------------------------------------------
    $('#services-collapsible-h2-faq-1').append(
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersH2TextFaq1
    );
    $('#services-collapsible-p-tag-faq-1').append(
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersPTextFaq1
    );
    // Collapsible container 2 ----------------------------------------------
    $('#services-collapsible-h2-faq-2').append(
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersH2TextFaq2
    );
    $('#services-collapsible-p-tag-faq-2').append(
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersPTextFaq2
    );
    // Collapsible container 3 ----------------------------------------------
    $('#services-collapsible-h2-faq-3').append(
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersH2TextFaq3
    );
    $('#services-collapsible-p-tag-faq-3').append(
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersPTextFaq3
    );
    // Collapsible container 4 ----------------------------------------------
    $('#services-collapsible-h2-faq-4').append(
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersH2TextFaq4
    );
    $('#services-collapsible-p-tag-faq-4').append(
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersPTextFaq4
    );








};
app.renderServicesPage();