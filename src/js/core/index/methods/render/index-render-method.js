var app = new CreateIndexPageClass(CreateIndexPage);

app.renderIndexPage = function() {
    var self = this;

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
    $('#root').append(contentFooter);
};


app.renderIndexPageJson = function(db) {
    var self = this;
    // This is where we decide wether to load edited or default databases.
    self.db = 'dataIndexDefault.json';
    fetch(self.db)
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    alert('There is no db fille to load. Create one and download it. Place it in the src folder.');
                    return;
                }

                // Examine the text in the response
                response.json().then(function(data) {
                    self.indexContentObj = data;
                    self.renderIndexPage();
                    $('#edit-Index-page').remove();
                    $('#save-Index-page').remove();
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

    var answer = prompt("Do you wish to load admin?", "yes");

    if (answer === 'yes') {
        app.renderIndexPage();
    } else {
        app.renderIndexPageJson();
    };
};


/*
                                                                              ADMIN ON
                                                                         ++++++++++++++++++
                                                +++++++++++++++++++++++++++++++++++++++++
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
| ======================|           launch page virtual with admin.
*/
//launchAdmin();
/*
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                                +++++++++++++++++++++++++++++++++++++++++
                                                                         ++++++++++++++++++
*/

/*
                                                                              ADMIN OFF
                                                                         ++++++++++++++++++
                                                +++++++++++++++++++++++++++++++++++++++++
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 |======================|           launch page from database.
*/
app.renderIndexPageJson();
/*
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                                +++++++++++++++++++++++++++++++++++++++++
                                                                         ++++++++++++++++++


                                                                                   CREATED
                                                                         BY DAN WEATHERBEE
                                                                                   DEC    2017
*/