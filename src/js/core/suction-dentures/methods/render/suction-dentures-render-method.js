/*
suction-dentures.js
*/
var app = new CreateSuctionDenturesPageClass(CreateSuctionDenturesPage);
app.renderSuctionDenturesPage = function() {
    var self = this;
    console.log(self.suctionDenturesContentObj);
   $('#root').append(self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContentContainer);
    // Content1 ==================================================
    $('#suction-dentures-main-container').append(
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col1,
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2,
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col3
    );
    $('#suction-dentures-main-col2').append(
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2HeaderH1Tag,
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2Img1,
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2UlContainer,
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2Video1,
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2Video2,
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2PTag1
    );
    $('#suction-dentures-main-col2-h1-tag-1').append(
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2HeaderH1TagText
    );
    $('#suction-dentures-main-content1-col2-ul-container').append(
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2UlContent
    );
    $('#suction-dentures-main-content1-col2-p-tag-1').append(
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2PTag1Text
    );
    $('#root').append(contentFooter);
};

app.renderSuctionDenturesPageJson = function(db) {
    var self = this;
    self.db = 'dataSuctionDenturesDefault.json';
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
                    self.suctionDenturesContentObj = data;
                    self.renderSuctionDenturesPage();
                    $('#edit-suction-dentures-page').remove();
                    $('#save-suction-dentures-page').remove();
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
        app.renderSuctionDenturesPage();
    } else {
        app.renderSuctionDenturesPageJson();
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
 // app.renderSuctionDenturesPageJson();
/*
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                                +++++++++++++++++++++++++++++++++++++++++
                                                                         ++++++++++++++++++
                                                                                   CREATED
                                                                         BY DAN WEATHERBEE
                                                                                   DEC    2017
*/
