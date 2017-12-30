
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
    $('#services-content3-row2-col2-tag-p-1').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText1
    );
    $('#services-content3-row2-col2-tag-p-2').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText2
    );
    $('#services-content3-row2-col2-tag-p-3').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText3
    );
    $('#services-content3-row2-col2-tag-p-4').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText4
    );
    $('#services-content3-row2-col2-tag-p-5').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText5
    );
    $('#services-content3-row2-col2-tag-p-6').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText6
    );
    $('#services-content3-row2-col2-tag-p-7').append(
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText7
    );
    $('#services-content3-row2-col2-tag-p-8').append(
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
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersHeaderH1,
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersFaq1,
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersFaq2,
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersFaq3,
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersFaq4,
        self.servicesContentObj.main.content4[0].servicesMapH2Tag,
        self.servicesContentObj.main.content4[0].servicesMapPTag
    );

    $('#services-map-h2-tag').append(
        self.servicesContentObj.main.content4[0].servicesMapH2Text
    );
    $('#services-map-p-tag').append(
        self.servicesContentObj.main.content4[0].servicesMapPText
    );
    $('#services-collapsible-containers-header-h1').append(
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersHeaderH1Text
    );
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
        // add footer
    $('#root').append(contentFooter);
};

app.renderServicesPageJson = function(db) {
    var self = this;
    self.db = 'dataServicesEdited.json';
    fetch(self.db)
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    alert('There is no db fille to load. Create one and download it. Add .json to the end and place it in the src folder.');
                    return;
                }

                // Examine the text in the response
                response.json().then(function(data) {
                    self.servicesContentObj = data;
                    self.renderServicesPage();
                    $('#edit-services-page').remove();
                    $('#save-services-page').remove();
                    $('footer').remove();
                    $('#root').append(contentFooter);
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
};

var launchAdmin = function() {

    var answer = prompt("Do you wish to load admin? If you do not choose yes it will use the edited database.", "yes");

    if (answer === 'yes') {
        app.renderServicesPage();
    } else {
        app.renderServicesPageJson();
    };
    $('#launch-admin').remove();
};


/*
                                                                              ADMIN LUANCHER
                                                                         ++++++++++++++++++
                                                +++++++++++++++++++++++++++++++++++++++++
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

       IMPORTANT!  YOU CAN NOT DO BOTH - ONE MUST BE COMMENTED OUT WITH 2 FORWARD SLASHES
                                    NOTHING BREAKS BUT YOU WILL RENDER THE PAGE TWICE :)

       Launch Options;

| ======================|           launch page virtual with admin.
*/
launchAdmin();
/*
 |======================|           launch page from database.
*/
 // app.renderServicesPageJson();
/*
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                                +++++++++++++++++++++++++++++++++++++++++
                                                                         ++++++++++++++++++
                                                                                   CREATED
                                                                         BY DAN WEATHERBEE
                                                                                   DEC    2017
*/




