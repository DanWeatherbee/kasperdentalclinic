// Img Src Controls =============================================

app.editAboutImg1 = function(
    editAboutImgSrcBtn1,
    saveAboutImgSrcBtn1,
    textAreaAboutImgSrc1
) {
    "use strict";
    var self = this;
    // Header Img Controls =============================================
    self.editAboutImgSrcBtn1 = '<br /><i type="button" class="fa fa-photo edit-btns" id="edit-about-img-src-btn1" ' +
        'onclick="app.editAboutImgSrc1()">' +
        ' img 1  -copy new img address, click Photo icon then paste image URL or' +
        ' local file address into the input area.</i>';
    self.saveAboutImgSrcBtn1 = '<i type="button" class="fa fa-save edit-btns" id="save-about-img-src-btn1" ' +
        'onclick="app.saveAboutImgSrc1()"></i>';
    self.textAreaAboutImgSrc1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="about-img1-src-input">' +
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2ImgSrc1 +
        '</textarea>';
    app.editAboutImgSrc1 = function() {
        if ($('#edit-about-img-src-btn1')) {
            $('#edit-about-img-src-btn1').remove();
        };
        $('#about-main-content1-col2-p-tag1').append(self.textAreaAboutImgSrc1);
        $('#about-main-content1-col2-p-tag1').append(self.saveAboutImgSrcBtn1);
    }
    app.saveAboutImgSrc1 = function() {
        var usrInput = $('#about-img1-src-input').val();
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2ImgSrc1 = usrInput;
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2Img1 = '<img' +
            ' class="gradient img-thumbnail img-responsive team-img center-block" ' +
            'src="' +
            self.aboutContentObj.main.content1[0].aboutMainContent1Col2ImgSrc1 +
            '" id="about-main-content1-col2-img1" alt="' +
            self.aboutContentObj.main.content1[0].aboutMainContent1Col2ImgSrc1 +
            '"><br />';
        $('#suction-dentures-img1').remove();
        $('#about-main-content1-col2-p-tag1').append(
            self.aboutContentObj.main.content1[0].aboutMainContent1Col2Img1
        );
        $('#save-about-img-src-btn1').remove();
        $('#about-img1-src-input').remove();
        app.saveAboutToDB();
        location.reload();
    }
    app.createAboutImgSrc1 = function() {
        $('#edit-about-img-src-btn1').remove();
        $('#about-main-content1-col2-p-tag1').append(self.editAboutImgSrcBtn1);
    }
    self.createAboutImgSrc1();
};