// testimonials render method
var app = new CreateTestimonialsPageClass(CreateTestimonialsPage);
app.renderTestimonialsPage = function() {
    var self = this;
    $('#root').append(self.testimonialsContentObj.main.content1[0].testimonialsContainer);
    // Content1 =============================================
    $('#testimonials-container').append(
        self.testimonialsContentObj.main.content1[0].testimonialsCol1,
        self.testimonialsContentObj.main.content1[0].testimonialsCol2,
        self.testimonialsContentObj.main.content1[0].testimonialsCol3
    );
    $('#testimonials-col2').append(
        self.testimonialsContentObj.main.content1[0].testimonialsHeaderH1Tag,
        self.testimonialsContentObj.main.content1[0].testimonialsPTag1,
        self.testimonialsContentObj.main.content1[0].testimonialsPTag2,
        self.testimonialsContentObj.main.content1[0].testimonialsPTag3,
        self.testimonialsContentObj.main.content1[0].testimonialsPTag4
    );
    $('#testimonials-header-h1-tag').append(
        self.testimonialsContentObj.main.content1[0].testimonialsHeaderH1TagText
    );
    // quote 1
    $('#testimonials-p-tag1').append(
        self.testimonialsContentObj.main.content1[0].testimonialsQuoteLeft,
        self.testimonialsContentObj.main.content1[0].testimonialsPTagText1,
        self.testimonialsContentObj.main.content1[0].testimonialsQuoteRight
    );
    $('#testimonials-p-tag2').append(
        self.testimonialsContentObj.main.content1[0].testimonialsPTagText2
    );
    // quote 2
    $('#testimonials-p-tag3').append(
        self.testimonialsContentObj.main.content1[0].testimonialsQuoteLeft,
        self.testimonialsContentObj.main.content1[0].testimonialsPTagText3,
        self.testimonialsContentObj.main.content1[0].testimonialsQuoteRight
    );
    $('#testimonials-p-tag4').append(
        self.testimonialsContentObj.main.content1[0].testimonialsPTagText4
    );
    $('#root').append(contentFooter);
};

app.renderTestimonialsPageJson = function(db) {
    var self = this;
    self.db = 'dataTestimonialsEdited.json';
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
                    self.testimonialsContentObj = data;
                    self.renderTestimonialsPage();
                    $('#edit-testimonials-page').remove();
                    $('#save-testimonials-page').remove();
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
        app.renderTestimonialsPage();
    } else {
        app.renderTestimonialsPageJson();
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
 // app.renderTestimonialsPageJson();
/*
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                                +++++++++++++++++++++++++++++++++++++++++
                                                                         ++++++++++++++++++
                                                                                   CREATED
                                                                         BY DAN WEATHERBEE
                                                                                   DEC    2017
*/