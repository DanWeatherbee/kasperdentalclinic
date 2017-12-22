// Before Img 3 Src Controls =============================================

app.editBeforeImg3 = function(
    editBeforeImgSrcBtn3,
    saveBeforeImgSrcBtn3,
    textAreaBeforeImgSrc3
) {
    "use strict";
    var self = this;
    // Header Img Controls =============================================
    self.editBeforeImgSrcBtn3 = '<br /><i type="button" class="fa fa-photo edit-btns" id="edit-before-img-src-btn3" ' +
        'onclick="app.editBeforeImgSrc3()">' +
        ' img 3</i>';
    self.saveBeforeImgSrcBtn3 = '<i type="button" class="fa fa-save edit-btns" id="save-before-img-src-btn3" ' +
        'onclick="app.saveBeforeImgSrc3()"></i>';
    self.textAreaBeforeImgSrc3 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="before-img3-src-input">' +
        self.beforeContentObj.main.content1[0].beforeMainContent1ImgBeforeSrc3 +
        '</textarea>';
    app.editBeforeImgSrc3 = function() {
        if ($('#edit-before-img-src-btn3')) {
            $('#edit-before-img-src-btn3').remove();
        };
        $('#before-main-content1-col1').append(self.textAreaBeforeImgSrc3);
        $('#before-main-content1-col1').append(self.saveBeforeImgSrcBtn3);
    }
    app.saveBeforeImgSrc3 = function() {
        var usrInput = $('#before-img3-src-input').val();
        self.beforeContentObj.main.content1[0].beforeMainContent1ImgBeforeSrc3 = usrInput;
        self.beforeContentObj.main.content1[0].beforeMainContent1Img3 = '<img' +
            ' class="animated flipInY img-thumbnail img-responsive center-block bf-photos" ' +
            'src="' +
            self.beforeContentObj.main.content1[0].beforeMainContent1ImgBeforeSrc3 +
            '" id="before-main-content1-img3" alt="' +
            self.beforeContentObj.main.content1[0].beforeMainContent1ImgBeforeSrc3 +
            '">';
        $('#before-main-content1-img3').remove();
        $('#before-main-content1-col1').append(
            self.beforeContentObj.main.content1[0].beforeMainContent1Img3
        );
        $('#save-before-img-src-btn3').remove();
        $('#before-img3-src-input').remove();
        app.saveBeforeToDB();
    }
    app.createBeforeImgSrc3 = function() {
        $('#edit-before-img-src-btn3').remove();
        $('#before-main-content1-col1').append(self.editBeforeImgSrcBtn3);
    }
    self.createBeforeImgSrc3();
};