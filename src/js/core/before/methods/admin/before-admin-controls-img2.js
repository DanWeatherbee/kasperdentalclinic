// Before Img 2 Src Controls =============================================

app.editBeforeImg2 = function(
    editBeforeImgSrcBtn2,
    saveBeforeImgSrcBtn2,
    textAreaBeforeImgSrc2
) {
    "use strict";
    var self = this;
    // Header Img Controls =============================================
    self.editBeforeImgSrcBtn2 = '<br /><i type="button" class="fa fa-photo edit-btns" id="edit-before-img-src-btn2" ' +
        'onclick="app.editBeforeImgSrc2()">' +
        ' img 2</i>';
    self.saveBeforeImgSrcBtn2 = '<i type="button" class="fa fa-save edit-btns" id="save-before-img-src-btn2" ' +
        'onclick="app.saveBeforeImgSrc2()"></i>';
    self.textAreaBeforeImgSrc2 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="before-img2-src-input">' +
        self.beforeContentObj.main.content1[0].beforeMainContent1ImgBeforeSrc2 +
        '</textarea>';
    app.editBeforeImgSrc2 = function() {
        if ($('#edit-before-img-src-btn2')) {
            $('#edit-before-img-src-btn2').remove();
        };
        $('#before-main-content1-col1').append(self.textAreaBeforeImgSrc2);
        $('#before-main-content1-col1').append(self.saveBeforeImgSrcBtn2);
    }
    app.saveBeforeImgSrc2 = function() {
        var usrInput = $('#before-img2-src-input').val();
        self.beforeContentObj.main.content1[0].beforeMainContent1ImgBeforeSrc2 = usrInput;
        self.beforeContentObj.main.content1[0].beforeMainContent1Img2 = '<img' +
            ' class="animated flipInY img-thumbnail img-responsive center-block bf-photos" ' +
            'src="' +
            self.beforeContentObj.main.content1[0].beforeMainContent1ImgBeforeSrc2 +
            '" id="before-main-content1-img2" alt="' +
            self.beforeContentObj.main.content1[0].beforeMainContent1ImgBeforeSrc2 +
            '">';
        $('#before-main-content1-img2').remove();
        $('#before-main-content1-col1').append(
            self.beforeContentObj.main.content1[0].beforeMainContent1Img2
        );
        $('#save-before-img-src-btn2').remove();
        $('#before-img2-src-input').remove();
        app.saveBeforeToDB();
    }
    app.createBeforeImgSrc2 = function() {
        $('#edit-before-img-src-btn2').remove();
        $('#before-main-content1-col1').append(self.editBeforeImgSrcBtn2);
    }
    self.createBeforeImgSrc2();
};