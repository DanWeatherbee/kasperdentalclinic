// jason Img 1 Src Controls =============================================

app.editJasonImg1 = function(
    editJasonImgSrcBtn1,
    saveJasonImgSrcBtn1,
    textAreaJasonImgSrc1
) {
    "use strict";
    var self = this;
    // Header Img Controls =============================================
    self.editJasonImgSrcBtn1 = '<i type="button" class="fa fa-photo edit-btns" id="edit-jason-img-src-btn1" ' +
        'onclick="app.editJasonImgSrc1()">' +
        ' img 1</i><br />';
    self.saveJasonImgSrcBtn1 = '<i type="button" class="fa fa-save edit-btns" id="save-jason-img-src-btn1" ' +
        'onclick="app.saveJasonImgSrc1()"></i>';
    self.textAreaJasonImgSrc1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="jason-img1-src-input">' +
        self.jasonContentObj.main.content[0].jasonImgSrc1 +
        '</textarea>';
    app.editJasonImgSrc1 = function() {
        if ($('#edit-jason-img-src-btn1')) {
            $('#edit-jason-img-src-btn1').remove();
        };
        $('#jason-header-h1-tag').prepend(self.textAreaJasonImgSrc1);
        $('#jason-header-h1-tag').prepend(self.saveJasonImgSrcBtn1);
    }
    app.saveJasonImgSrc1 = function() {
        var usrInput = $('#jason-img1-src-input').val();
        self.jasonContentObj.main.content[0].jasonImgSrc1 = usrInput;
        self.jasonContentObj.main.content[0].jasonImg1 = '<img' +
            ' class="animated flipInY img-thumbnail img-responsive center-block team-img gradient" ' +
            'src="' +
            self.jasonContentObj.main.content[0].jasonImgSrc1 +
            '" id="jason-img1" alt="' +
            self.jasonContentObj.main.content[0].jasonImgSrc1 +
            '">';
        $('#jason-img1').remove();
        $('#jason-header-h1-tag').prepend(
            self.jasonContentObj.main.content[0].jasonImg1
        );
        $('#save-jason-img-src-btn1').remove();
        $('#jason-img1-src-input').remove();
        app.saveJasonToDB();
        location.reload();
    }
    app.createJasonImgSrc1 = function() {
        $('#edit-jason-img-src-btn1').remove();
        $('#jason-header-h1-tag').prepend(self.editJasonImgSrcBtn1);
    }
    self.createJasonImgSrc1();
};