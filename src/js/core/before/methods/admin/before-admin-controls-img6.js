// Before Img 6 Src Controls =============================================

app.editBeforeImg6 = function(
    editBeforeImgSrcBtn6,
    saveBeforeImgSrcBtn6,
    textAreaBeforeImgSrc6
) {
    "use strict";
    var self = this;
    // Header Img Controls =============================================
    self.editBeforeImgSrcBtn6 = '<br /><i type="button" class="fa fa-photo edit-btns" id="edit-before-img-src-btn6" ' +
        'onclick="app.editBeforeImgSrc6()">' +
        ' img 6</i>';
    self.saveBeforeImgSrcBtn6 = '<i type="button" class="fa fa-save edit-btns" id="save-before-img-src-btn6" ' +
        'onclick="app.saveBeforeImgSrc6()"></i>';
    self.textAreaBeforeImgSrc6 = '<textarea class="form-control textarea-style" rows="1" number="6" maxlength="1000" ' +
        'id="before-img6-src-input">' +
        self.beforeContentObj.main.content1[0].beforeMainContent1ImgAfterSrc3 +
        '</textarea>';
    app.editBeforeImgSrc6 = function() {
        if ($('#edit-before-img-src-btn6')) {
            $('#edit-before-img-src-btn6').remove();
        };
        $('#before-main-content1-col2').append(self.textAreaBeforeImgSrc6);
        $('#before-main-content1-col2').append(self.saveBeforeImgSrcBtn6);
    }
    app.saveBeforeImgSrc6 = function() {
        var usrInput = $('#before-img6-src-input').val();
        self.beforeContentObj.main.content1[0].beforeMainContent1ImgAfterSrc3 = usrInput;
        self.beforeContentObj.main.content1[0].beforeMainContent1Img6 = '<img' +
            ' class="animated flipInY img-thumbnail img-responsive center-block bf-photos" ' +
            'src="' +
            self.beforeContentObj.main.content1[0].beforeMainContent1ImgAfterSrc3 +
            '" id="before-main-content1-img6" alt="' +
            self.beforeContentObj.main.content1[0].beforeMainContent1ImgAfterSrc3 +
            '">';
        $('#before-main-content1-img6').remove();
        $('#before-main-content1-col2').append(
            self.beforeContentObj.main.content1[0].beforeMainContent1Img6
        );
        $('#save-before-img-src-btn6').remove();
        $('#before-img6-src-input').remove();
        app.saveBeforeToDB();
    }
    app.createBeforeImgSrc6 = function() {
        $('#edit-before-img-src-btn6').remove();
        $('#before-main-content1-col2').append(self.editBeforeImgSrcBtn6);
    }
    self.createBeforeImgSrc6();
};