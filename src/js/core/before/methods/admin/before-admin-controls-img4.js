// Before Img 4 Src Controls =============================================

app.editBeforeImg4 = function(
    editBeforeImgSrcBtn4,
    saveBeforeImgSrcBtn4,
    textAreaBeforeImgSrc4
) {
    "use strict";
    var self = this;
    // Header Img Controls =============================================
    self.editBeforeImgSrcBtn4 = '<br /><i type="button" class="fa fa-photo edit-btns" id="edit-before-img-src-btn4" ' +
        'onclick="app.editBeforeImgSrc4()">' +
        ' img 4</i>';
    self.saveBeforeImgSrcBtn4 = '<i type="button" class="fa fa-save edit-btns" id="save-before-img-src-btn4" ' +
        'onclick="app.saveBeforeImgSrc4()"></i>';
    self.textAreaBeforeImgSrc4 = '<textarea class="form-control textarea-style" rows="1" number="4" maxlength="1000" ' +
        'id="before-img4-src-input">' +
        self.beforeContentObj.main.content1[0].beforeMainContent1ImgAfterSrc1 +
        '</textarea>';
    app.editBeforeImgSrc4 = function() {
        if ($('#edit-before-img-src-btn4')) {
            $('#edit-before-img-src-btn4').remove();
        };
        $('#before-main-content1-col2').append(self.textAreaBeforeImgSrc4);
        $('#before-main-content1-col2').append(self.saveBeforeImgSrcBtn4);
    }
    app.saveBeforeImgSrc4 = function() {
        var usrInput = $('#before-img4-src-input').val();
        self.beforeContentObj.main.content1[0].beforeMainContent1ImgAfterSrc1 = usrInput;
        self.beforeContentObj.main.content1[0].beforeMainContent1Img4 = '<img' +
            ' class="animated flipInY img-thumbnail img-responsive center-block bf-photos" ' +
            'src="' +
            self.beforeContentObj.main.content1[0].beforeMainContent1ImgAfterSrc1 +
            '" id="before-main-content1-img4" alt="' +
            self.beforeContentObj.main.content1[0].beforeMainContent1ImgAfterSrc1 +
            '">';
        $('#before-main-content1-img4').remove();
        $('#before-main-content1-col2').append(
            self.beforeContentObj.main.content1[0].beforeMainContent1Img4
        );
        $('#save-before-img-src-btn4').remove();
        $('#before-img4-src-input').remove();
        app.saveBeforeToDB();
    }
    app.createBeforeImgSrc4 = function() {
        $('#edit-before-img-src-btn4').remove();
        $('#before-main-content1-col2').append(self.editBeforeImgSrcBtn4);
    }
    self.createBeforeImgSrc4();
};