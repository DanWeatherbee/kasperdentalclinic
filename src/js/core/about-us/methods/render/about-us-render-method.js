// about-us render method
var app = new CreateAboutPageClass(CreateAboutPage);
app.renderAboutPage = function() {
    var self = this;
    $('#root').append(self.aboutContentObj.main.content1[0].aboutMainContentContainer);
    // Content1 =============================================
    $('#about-main-container').append(
        self.aboutContentObj.main.content1[0].aboutMainContent1Col1,
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2,
        self.aboutContentObj.main.content1[0].aboutMainContent1Col3
    );
    $('#about-main-content1-col2').append(
        // h1
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2HeaderH1Tag,
        // p - paragraph
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2PTag1,
        self.aboutContentObj.main.content1[0].aboutMainContent1ImgCol1,
        self.aboutContentObj.main.content1[0].aboutMainContent1ImgCol2
    );
    $('#about-main-content1-img-col1').append(
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2Img1,
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2ImgButton1
    );
    $('#about-main-content1-img-col2').append(
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2Img2,
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2ImgButton2
    );
    $('#root').append(
        self.aboutContentObj.main.content1[0].aboutMainContent1ParallaxContainer
    );
    $('#about-main-parallax-container').append(
        self.aboutContentObj.main.content1[0].aboutMainContent1ParallaxQuoteBox
    );
    $('#about-main-parallax-quote-box').append(
        self.aboutContentObj.main.content1[0].aboutMainContent1ParallaxQuoteBoxPTag
    );
    // text
    $('#about-main-content1-col2-header-h1-tag').append(
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2HeaderH1TagText
    );
    $('#about-main-content1-col2-p-tag1').append(
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2PTagText1
    );
    $('#about-main-content1-parallax-quote-box-p-tag').append(
        self.aboutContentObj.main.content1[0].aboutMainContent1ParallaxQuoteBoxFonAwesomeIconLeft,
        self.aboutContentObj.main.content1[0].aboutMainContent1ParallaxQuoteBoxPTagText,
        self.aboutContentObj.main.content1[0].aboutMainContent1ParallaxQuoteBoxFonAwesomeIconRight
    );
    $('#root').append(contentFooter);
};

app.renderAboutPageJson = function(db) {
    var self = this;
    self.db = 'dataAboutEdited.json';
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
                    self.aboutContentObj = data;
                    self.renderAboutPage();
                    $('#edit-about-page').remove();
                    $('#save-about-page').remove();
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
        app.renderAboutPage();
    } else {
        app.renderAboutPageJson();
    };
    $('#launch-admin').remove();
}
launchAdmin();