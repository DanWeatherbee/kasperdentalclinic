/*
Written in a Object Oriented pattern OOP by Dan Weatherbee
 Header Img Src Controls =============================================
*/
app.editIndexHeaderImgJason = function(
    editHeaderImgSrcBtn,
    saveHeaderImgSrcBtn,
    textAreaIndexImgSrc
) {
    "use strict";
    var self = this;
    // Header Img Controls =============================================
    self.editHeaderImgSrcBtn = '<i type="button" class="fa fa-photo edit-btns" id="edit-header-img-src-btn" ' +
        'onclick="app.editHeaderImgSrc()">' +
        ' -copy new img address, click Photo icon then paste image URL or' +
        ' local file address into the input area.</i>';
    self.saveHeaderImgSrcBtn = '<i type="button" class="fa fa-save edit-btns" id="save-header-img-src-btn" ' +
        'onclick="app.saveHeaderImgSrc()"></i>';
    self.textAreaIndexImgSrc = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="150" ' +
        'id="index-img-src-input">' +
        self.indexContentObj.main.content1[0].indexMainContent1Row1Col2ImgSrc +
        '</textarea>';
    app.editHeaderImgSrc = function() {
        if ($('#edit-header-img-src-btn')) {
            $('#edit-header-img-src-btn').remove();
        };
        $('#index-main-row1-col2-header-h3-tag').append(self.textAreaIndexImgSrc);
        $('#index-main-row1-col2-header-h3-tag').append(self.saveHeaderImgSrcBtn);
    }
    app.saveHeaderImgSrc = function() {
        var usrInput = $('#index-img-src-input').val();
        self.indexContentObj.main.content1[0].indexMainContent1Row1Col2ImgSrc = usrInput;
        self.indexContentObj.main.content1[0].indexMainContent1Row1Col2Img = '<img' +
        ' class="gradient img-thumbnail img-responsive center-block" ' +
            'src="' +
            self.indexContentObj.main.content1[0].indexMainContent1Row1Col2ImgSrc +
            '" id="index-jason-pic" alt="' +
            self.indexContentObj.main.content1[0].indexMainContent1Row1Col2ImgSrc +
            '">';
        $('#index-jason-pic').remove();
        $('#index-main-row1-col2-header-h2-tag').prepend(
            self.indexContentObj.main.content1[0].indexMainContent1Row1Col2Img
            );
        $('#save-header-img-src-btn').remove();
        $('#index-img-src-input').remove();
        app.saveIndexToDB();
        location.reload();
    }
    app.createHeaderImgSrc = function() {
        $('#edit-header-img-src-btn').remove();
        $('#index-main-row1-col2-header-h3-tag').append(self.editHeaderImgSrcBtn);
    }
    self.createHeaderImgSrc();
};