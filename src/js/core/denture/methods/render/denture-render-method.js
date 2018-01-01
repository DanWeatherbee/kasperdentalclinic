/*
denture.js
*/
var app = new CreateDenturePageClass(CreateDenturePage);
app.renderDenturePage = function() {
    var self = this;
    console.log(self.dentureContentObj);
    $('#root').append(self.dentureContentObj.main.content1[0].dentureMainContentContainer);
    // Content1 ==================================================
    $('#denture-main-container').append(
        self.dentureContentObj.main.content1[0].dentureMainContent1Col1,
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2,
        self.dentureContentObj.main.content1[0].dentureMainContent1Col3
    );
    $('#denture-main-col2').append(
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2HeaderH1Tag,
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2H2_1Tag,
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2Frame1,
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2P1Tag,
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2H2_2Tag,
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2Frame2,
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2P2Tag,
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2H2_3Tag,
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2Frame3,
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2P3Tag
    );
    $('#denture-main-col2-h1-tag-1').append(
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2HeaderH1TagText
    );
    $('#denture-main-col2-h2-tag-1').append(
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2H2_1TagText
    );
    $('#denture-main-col2-p-tag-1').append(
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2P1TagText
    );
    $('#denture-main-col2-h2-tag-2').append(
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2H2_2TagText
    );
    $('#denture-main-col2-p-tag-2').append(
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2P2TagText
    );
    $('#denture-main-col2-h2-tag-3').append(
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2H2_3TagText
    );
    $('#denture-main-col2-p-tag-3').append(
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2P3TagText
    );
    $('#root').append(contentFooter);
};

app.renderDenturePageJson = function(db) {
    var self = this;
    self.db = 'dataDentureDefault.json';
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
                    self.dentureContentObj = data;
                    self.renderDenturePage();
                    $('#edit-denture-page').remove();
                    $('#save-denture-page').remove();
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
        app.renderDenturePage();
    } else {
        app.renderDenturePageJson();
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
 // app.renderDenturePageJson();
/*
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                                +++++++++++++++++++++++++++++++++++++++++
                                                                         ++++++++++++++++++
                                                                                   CREATED
                                                                         BY DAN WEATHERBEE
                                                                                   DEC    2017
*/