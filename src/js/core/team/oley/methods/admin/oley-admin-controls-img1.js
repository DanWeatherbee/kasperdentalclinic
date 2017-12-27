// oley Img 1 Src Controls =============================================

app.editOleyImg1 = function(
    editOleyImgSrcBtn1,
    saveOleyImgSrcBtn1,
    textAreaOleyImgSrc1
) {
    "use strict";
    var self = this;
    // Header Img Controls =============================================
    self.editOleyImgSrcBtn1 = '<i type="button" class="fa fa-photo edit-btns" id="edit-oley-img-src-btn1" ' +
        'onclick="app.editOleyImgSrc1()">' +
        ' img 1</i><br />';
    self.saveOleyImgSrcBtn1 = '<i type="button" class="fa fa-save edit-btns" id="save-oley-img-src-btn1" ' +
        'onclick="app.saveOleyImgSrc1()"></i>';
    self.textAreaOleyImgSrc1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="oley-img1-src-input">' +
        self.oleyContentObj.main.content[0].oleyImgSrc1 +
        '</textarea>';
    app.editOleyImgSrc1 = function() {
        if ($('#edit-oley-img-src-btn1')) {
            $('#edit-oley-img-src-btn1').remove();
        };
        $('#oley-header-h1-tag').prepend(self.textAreaOleyImgSrc1);
        $('#oley-header-h1-tag').prepend(self.saveOleyImgSrcBtn1);
    }
    app.saveOleyImgSrc1 = function() {
        var usrInput = $('#oley-img1-src-input').val();
        self.oleyContentObj.main.content[0].oleyImgSrc1 = usrInput;
        self.oleyContentObj.main.content[0].oleyImg1 = '<img' +
            ' class="animated flipInY img-thumbnail img-responsive center-block team-img gradient" ' +
            'src="' +
            self.oleyContentObj.main.content[0].oleyImgSrc1 +
            '" id="oley-img1" alt="' +
            self.oleyContentObj.main.content[0].oleyImgSrc1 +
            '">';
        $('#oley-img1').remove();
        $('#oley-header-h1-tag').prepend(
            self.oleyContentObj.main.content[0].oleyImg1
        );
        $('#save-oley-img-src-btn1').remove();
        $('#oley-img1-src-input').remove();
        app.saveOleyToDB();
        location.reload();
    }
    app.createOleyImgSrc1 = function() {
        $('#edit-oley-img-src-btn1').remove();
        $('#oley-header-h1-tag').prepend(self.editOleyImgSrcBtn1);
    }
    self.createOleyImgSrc1();
};