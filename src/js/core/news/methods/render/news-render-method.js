// news render method
var app = new CreateNewsPageClass(CreateNewsPage);
app.renderNewsPage = function() {
    var self = this;
    $('#root').append(self.newsContentObj.main.content[0].newsContainer);
    // Content =============================================
    $('#news-container').append(
        self.newsContentObj.main.content[0].newsCol1,
        self.newsContentObj.main.content[0].newsCol2,
        self.newsContentObj.main.content[0].newsCol3
    );
    // tags
    $('#news-col2').append(
        self.newsContentObj.main.content[0].newsHeaderH1Tag,
        self.newsContentObj.main.content[0].newsImg1,
        self.newsContentObj.main.content[0].newsPTag1,
        self.newsContentObj.main.content[0].newsH3Tag1,
        self.newsContentObj.main.content[0].newsPTag2,
        self.newsContentObj.main.content[0].newsH3Tag2,
        self.newsContentObj.main.content[0].newsPTag3,
        self.newsContentObj.main.content[0].newsH3Tag3,
        self.newsContentObj.main.content[0].newsPTag4,
        self.newsContentObj.main.content[0].newsPTag5
    );

    // text
    $('#news-header-h1-tag').append(
        self.newsContentObj.main.content[0].newsHeaderH1TagText
    );

    $('#news-h3-tag1').append(
        self.newsContentObj.main.content[0].newsH3TagText1
    );
    $('#news-h3-tag2').append(
        self.newsContentObj.main.content[0].newsH3TagText2
    );
    $('#news-h3-tag3').append(
        self.newsContentObj.main.content[0].newsH3TagText3
    );

    $('#news-p-tag1').append(
        self.newsContentObj.main.content[0].newsPTagText1
    );
    $('#news-p-tag2').append(
        self.newsContentObj.main.content[0].newsPTagText2
    );
    $('#news-p-tag3').append(
        self.newsContentObj.main.content[0].newsPTagText3
    );
    $('#news-p-tag4').append(
        self.newsContentObj.main.content[0].newsPTagText4
    );
    $('#news-p-tag5').append(
        self.newsContentObj.main.content[0].newsPTagText5
    );
    $('#root').append(contentFooter);
};

app.renderNewsPageJson = function(db) {
    var self = this;
    self.db = 'dataNewsEdited.json';
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
                    self.newsContentObj = data;
                    self.renderNewsPage();
                    $('#edit-news-page').remove();
                    $('#save-news-page').remove();
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
        app.renderNewsPage();
    } else {
        app.renderNewsPageJson();
    };
    $('#launch-admin').remove();
}
launchAdmin();