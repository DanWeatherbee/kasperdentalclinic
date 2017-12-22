// Before Img 5 Src Controls =============================================

app.editBeforeImg5 = function(
    editBeforeImgSrcBtn5,
    saveBeforeImgSrcBtn5,
    textAreaBeforeImgSrc5
) {
    "use strict";
    var self = this;
    // Header Img Controls =============================================
    self.editBeforeImgSrcBtn5 = '<br /><i type="button" class="fa fa-photo edit-btns" id="edit-before-img-src-btn5" ' +
        'onclick="app.editBeforeImgSrc5()">' +
        ' img 5</i>';
    self.saveBeforeImgSrcBtn5 = '<i type="button" class="fa fa-save edit-btns" id="save-before-img-src-btn5" ' +
        'onclick="app.saveBeforeImgSrc5()"></i>';
    self.textAreaBeforeImgSrc5 = '<textarea class="form-control textarea-style" rows="1" number="5" maxlength="1000" ' +
        'id="before-img5-src-input">' +
        self.beforeContentObj.main.content1[0].beforeMainContent1ImgAfterSrc2 +
        '</textarea>';
    app.editBeforeImgSrc5 = function() {
        if ($('#edit-before-img-src-btn5')) {
            $('#edit-before-img-src-btn5').remove();
        };
        $('#before-main-content1-col2').append(self.textAreaBeforeImgSrc5);
        $('#before-main-content1-col2').append(self.saveBeforeImgSrcBtn5);
    }
    app.saveBeforeImgSrc5 = function() {
        var usrInput = $('#before-img5-src-input').val();
        self.beforeContentObj.main.content1[0].beforeMainContent1ImgAfterSrc2 = usrInput;
        self.beforeContentObj.main.content1[0].beforeMainContent1Img5 = '<img' +
            ' class="animated flipInY img-thumbnail img-responsive center-block bf-photos" ' +
            'src="' +
            self.beforeContentObj.main.content1[0].beforeMainContent1ImgAfterSrc2 +
            '" id="before-main-content1-img5" alt="' +
            self.beforeContentObj.main.content1[0].beforeMainContent1ImgAfterSrc2 +
            '">';
        $('#before-main-content1-img5').remove();
        $('#before-main-content1-col2').append(
            self.beforeContentObj.main.content1[0].beforeMainContent1Img5
        );
        $('#save-before-img-src-btn5').remove();
        $('#before-img5-src-input').remove();
        app.saveBeforeToDB();
    }
    app.createBeforeImgSrc5 = function() {
        $('#edit-before-img-src-btn5').remove();
        $('#before-main-content1-col2').append(self.editBeforeImgSrcBtn5);
    }
    self.createBeforeImgSrc5();
};