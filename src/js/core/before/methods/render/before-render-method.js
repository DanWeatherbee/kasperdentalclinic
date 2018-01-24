// before render method
var app = new CreateBeforePageClass(CreateBeforePage);
app.renderBeforePage = function() {
    var self = this;
    $('#root').append(self.beforeContentObj.main.content1[0].beforeMainContentContainer);
    // Content1 =============================================
    $('#before-main-container').append(
        self.beforeContentObj.main.content1[0].beforeMainContent1HeaderH1Tag,
        self.beforeContentObj.main.content1[0].beforeMainContent1Col1,
        self.beforeContentObj.main.content1[0].beforeMainContent1Col2
    );
    $('#before-main-content1-col1').append(
        self.beforeContentObj.main.content1[0].beforeMainContent1Img1,
        self.beforeContentObj.main.content1[0].beforeMainContent1Img2,
        self.beforeContentObj.main.content1[0].beforeMainContent1Img3
    );

    $('#before-main-content1-col2').append(
        self.beforeContentObj.main.content1[0].beforeMainContent1Img4,
        self.beforeContentObj.main.content1[0].beforeMainContent1Img5,
        self.beforeContentObj.main.content1[0].beforeMainContent1Img6
    );
    $('#before-main-content1-header-h1-tag').append(
        self.beforeContentObj.main.content1[0].beforeMainContent1HeaderH1TagText
    );
$('#root').append(contentFooter);
};

app.renderBeforePageJson = function(db) {
    var self = this;
    self.db = 'dataBeforeDefault.json';
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
                    self.beforeContentObj = data;
                    self.renderBeforePage();
                    $('#edit-before-page').remove();
                    $('#save-before-page').remove();
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
        app.renderBeforePage();
    } else {
        app.renderBeforePageJson();
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
app.renderBeforePageJson();
/*
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                                +++++++++++++++++++++++++++++++++++++++++
                                                                         ++++++++++++++++++


                                                                                   CREATED
                                                                         BY DAN WEATHERBEE
                                                                                   DEC    2017
*/

