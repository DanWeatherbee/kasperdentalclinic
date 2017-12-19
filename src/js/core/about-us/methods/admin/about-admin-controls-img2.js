// Img Src Controls =============================================

app.editAboutImg2 = function(
    editAboutImgSrcBtn2,
    saveAboutImgSrcBtn2,
    textAreaAboutImgSrc2
) {
    "use strict";
    var self = this;
    // Header Img Controls =============================================
    self.editAboutImgSrcBtn2 = '<br /><i type="button" class="fa fa-photo edit-btns" id="edit-about-img-src-btn2" ' +
        'onclick="app.editAboutImgSrc2()">' +
        ' img 2 </i>';
    self.saveAboutImgSrcBtn2 = '<i type="button" class="fa fa-save edit-btns" id="save-about-img-src-btn2" ' +
        'onclick="app.saveAboutImgSrc2()"></i>';
    self.textAreaAboutImgSrc2 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="about-img2-src-input">' +
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2ImgSrc2 +
        '</textarea>';
    app.editAboutImgSrc2 = function() {
        if ($('#edit-about-img-src-btn2')) {
            $('#edit-about-img-src-btn2').remove();
        };
        $('#about-main-content1-col2-p-tag1').append(self.textAreaAboutImgSrc2);
        $('#about-main-content1-col2-p-tag1').append(self.saveAboutImgSrcBtn2);
    }
    app.saveAboutImgSrc2 = function() {
        var usrInput = $('#about-img2-src-input').val();
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2ImgSrc2 = usrInput;
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2Img2 = '<img' +
            ' class="gradient img-thumbnail img-responsive team-img center-block" ' +
            'src="' +
            self.aboutContentObj.main.content1[0].aboutMainContent1Col2ImgSrc2 +
            '" id="about-main-content1-col2-img2" alt="' +
            self.aboutContentObj.main.content1[0].aboutMainContent1Col2ImgSrc2 +
            '"><br />';
        $('#suction-dentures-img2').remove();
        $('#about-main-content1-col2-p-tag1').append(
            self.aboutContentObj.main.content1[0].aboutMainContent1Col2Img2
        );
        $('#save-about-img-src-btn2').remove();
        $('#about-img2-src-input').remove();
        app.saveAboutToDB();
        location.reload();
    }
    app.createAboutImgSrc2 = function() {
        $('#edit-about-img-src-btn2').remove();
        $('#about-main-content1-col2-p-tag1').append(self.editAboutImgSrcBtn2);
    }
    self.createAboutImgSrc2();
};