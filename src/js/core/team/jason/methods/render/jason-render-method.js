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
};
app.renderJasonPage();
$('#root').append(contentFooter);