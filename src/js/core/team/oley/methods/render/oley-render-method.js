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
};
app.renderOleyPage();
$('#root').append(contentFooter);