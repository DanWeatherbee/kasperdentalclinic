// Contact render method
var app = new CreateContactPageClass(CreateContactPage);
app.renderContactPage = function() {
    var self = this;
    $('#root').append(self.contactContentObj.main.content[0].contactContainer);
    // Content =============================================
    $('#contact-container').append(
        self.contactContentObj.main.content[0].contactCol1,
        self.contactContentObj.main.content[0].contactCol2,
        self.contactContentObj.main.content[0].contactCol3
    );
    // tags
    $('#contact-col2').append(
        self.contactContentObj.main.content[0].contactImg1,
        self.contactContentObj.main.content[0].contactHeaderH1Tag,
        self.contactContentObj.main.content[0].contactP1,
        self.contactContentObj.main.content[0].contactP2,
        self.contactContentObj.main.content[0].contactP3,
        self.contactContentObj.main.content[0].contactBtn1
    );
    $('#root').append(
        self.contactContentObj.main.content[0].contactIframe
    );
    // text
    $('#contact-header-h1-tag').append(
        self.contactContentObj.main.content[0].contactHeaderH1TagText
    );
    $('#contact-p-tag1').append(
        self.contactContentObj.main.content[0].contactPText1
    );
    $('#contact-p-tag2').append(
        self.contactContentObj.main.content[0].contactPText2
    );
    $('#contact-p-tag3').append(
        self.contactContentObj.main.content[0].contactPText3
    );
    $('#root').append(contentFooter);
};

app.renderContactPageJson = function(db) {
    var self = this;
    self.db = 'dataContactDefault.json';
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
                    self.contactContentObj = data;
                    self.renderContactPage();
                    $('#edit-contact-page').remove();
                    $('#save-contact-page').remove();
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
        app.renderContactPage();
    } else {
        app.renderContactPageJson();
    };
    $('#launch-admin').remove();
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
app.renderContactPageJson();
/*
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                                +++++++++++++++++++++++++++++++++++++++++
                                                                         ++++++++++++++++++


                                                                                   CREATED
                                                                         BY DAN WEATHERBEE
                                                                                   DEC    2017
*/