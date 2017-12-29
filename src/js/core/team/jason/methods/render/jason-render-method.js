// jason render method
var app = new CreateJasonPageClass(CreateJasonPage);
app.renderJasonPage = function() {
    var self = this;
    $('#root').append(self.jasonContentObj.main.content[0].jasonContainer);
    // Content =============================================
    $('#jason-container').append(
        self.jasonContentObj.main.content[0].jasonCol1,
        self.jasonContentObj.main.content[0].jasonCol2,
        self.jasonContentObj.main.content[0].jasonCol3
    );
    // tags
    $('#jason-col2').append(
        self.jasonContentObj.main.content[0].jasonImg1,
        self.jasonContentObj.main.content[0].jasonHeaderH1Tag,
        self.jasonContentObj.main.content[0].jasonP1
    );

    // text
    $('#jason-header-h1-tag').append(
        self.jasonContentObj.main.content[0].jasonHeaderH1TagText
    );
    $('#jason-p-tag1').append(
        self.jasonContentObj.main.content[0].jasonPText1
    );
    $('#root').append(contentFooter);
};

app.renderJasonPageJson = function(db) {
    var self = this;
    self.db = 'dataJasonEdited.json';
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
                    self.jasonContentObj = data;
                    self.renderJasonPage();
                    $('#edit-jason-page').remove();
                    $('#save-jason-page').remove();
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
        app.renderJasonPage();
    } else {
        app.renderJasonPageJson();
    };
    $('#launch-admin').remove();
}
launchAdmin();
