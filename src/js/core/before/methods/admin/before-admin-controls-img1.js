// Before Img 1 Src Controls =============================================

app.editBeforeImg1 = function(
    editBeforeImgSrcBtn1,
    saveBeforeImgSrcBtn1,
    textAreaBeforeImgSrc1
) {
    "use strict";
    var self = this;
    // Header Img Controls =============================================
    self.editBeforeImgSrcBtn1 = '<br /><i type="button" class="fa fa-photo edit-btns" id="edit-before-img-src-btn1" ' +
        'onclick="app.editBeforeImgSrc1()">' +
        ' img 1</i>';
    self.saveBeforeImgSrcBtn1 = '<i type="button" class="fa fa-save edit-btns" id="save-before-img-src-btn1" ' +
        'onclick="app.saveBeforeImgSrc1()"></i>';
    self.textAreaBeforeImgSrc1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="before-img1-src-input">' +
        self.beforeContentObj.main.content1[0].beforeMainContent1ImgBeforeSrc1 +
        '</textarea>';
    app.editBeforeImgSrc1 = function() {
        if ($('#edit-before-img-src-btn1')) {
            $('#edit-before-img-src-btn1').remove();
        };
        $('#before-main-content1-col1').append(self.textAreaBeforeImgSrc1);
        $('#before-main-content1-col1').append(self.saveBeforeImgSrcBtn1);
    }
    app.saveBeforeImgSrc1 = function() {
        var usrInput = $('#before-img1-src-input').val();
        self.beforeContentObj.main.content1[0].beforeMainContent1ImgBeforeSrc1 = usrInput;
        self.beforeContentObj.main.content1[0].beforeMainContent1Img1 = '<img' +
            ' class="animated flipInY img-thumbnail img-responsive center-block bf-photos" ' +
            'src="' +
            self.beforeContentObj.main.content1[0].beforeMainContent1ImgBeforeSrc1 +
            '" id="before-main-content1-img1" alt="' +
            self.beforeContentObj.main.content1[0].beforeMainContent1ImgBeforeSrc1 +
            '">';
        $('#before-main-content1-img1').remove();
        $('#before-main-content1-col1').append(
            self.beforeContentObj.main.content1[0].beforeMainContent1Img1
        );
        $('#save-before-img-src-btn1').remove();
        $('#before-img1-src-input').remove();
        app.saveBeforeToDB();
    }
    app.createBeforeImgSrc1 = function() {
        $('#edit-before-img-src-btn1').remove();
        $('#before-main-content1-col1').append(self.editBeforeImgSrcBtn1);
    }
    self.createBeforeImgSrc1();
};