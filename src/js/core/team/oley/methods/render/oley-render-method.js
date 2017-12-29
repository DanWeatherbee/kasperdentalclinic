// oley render method
var app = new CreateOleyPageClass(CreateOleyPage);
app.renderOleyPage = function() {
    var self = this;
    $('#root').append(self.oleyContentObj.main.content[0].oleyContainer);
    // Content =============================================
    $('#oley-container').append(
        self.oleyContentObj.main.content[0].oleyCol1,
        self.oleyContentObj.main.content[0].oleyCol2,
        self.oleyContentObj.main.content[0].oleyCol3
    );
    // tags
    $('#oley-col2').append(
        self.oleyContentObj.main.content[0].oleyImg1,
        self.oleyContentObj.main.content[0].oleyHeaderH1Tag,
        self.oleyContentObj.main.content[0].oleyP1
    );

    // text
    $('#oley-header-h1-tag').append(
        self.oleyContentObj.main.content[0].oleyHeaderH1TagText
    );
    $('#oley-p-tag1').append(
        self.oleyContentObj.main.content[0].oleyPText1
    );
    $('#root').append(contentFooter);
};

app.renderOleyPageJson = function(db) {
    var self = this;
    self.db = 'dataOleyEdited.json';
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
                    self.oleyContentObj = data;
                    self.renderOleyPage();
                    $('#edit-oley-page').remove();
                    $('#save-oley-page').remove();
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
        app.renderOleyPage();
    } else {
        app.renderOleyPageJson();
    };
    $('#launch-admin').remove();
}
launchAdmin();