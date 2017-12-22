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
};
app.renderBeforePage();
$('#root').append(contentFooter);
