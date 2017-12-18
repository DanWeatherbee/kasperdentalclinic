/*
 About P1 Text Controls =============================================
*/
app.editAboutImgBtn2Ctrl = function(
    editAboutImgBtn2,
    saveAboutImgBtn2,
    textAreaAboutImgBtn2
) {
    "use strict";
    var self = this;
    self.editAboutImgBtn2 = '<br /><i type="button" class="fa fa-edit edit-btns" id="edit-about-ctrl-btn2"' +
        ' onclick="app.editAboutImgBtn2Ctrl()"> button 1 </i>';
    self.saveAboutImgBtn2 = '<i type="button" class="fa fa-save edit-btns" id="save-about-ctrl-btn2"' +
        ' onclick="app.saveAboutImgBtn2()"></i>';
    self.textAreaAboutImgBtn2 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="150" ' +
        'id="about-btn1-input">' +
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2ImgButton2 +
        '</textarea>';

    app.editAboutImgBtn2 = function() {
        if ($('#edit-about-ctrl-btn2')) {
            $('#edit-about-ctrl-btn2').remove();
        };

        $('#about-main-content1-col2-p-tag1').append(
            self.textAreaAboutImgBtn2,
            self.saveAboutImgBtn2
        );

    }
    app.saveAboutImgBtn2 = function() {
        var usrInput = $('#about-btn1-input').val();
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2ImgButton2 = usrInput;
        $('#about-main-content1-col2-p-tag1').append(
            self.aboutContentObj.main.content1[0].aboutMainContent1Col2ImgButton2
        );
        $('#save-about-ctrl-btn2').remove();
        $('#about-btn1-input').remove();
        app.saveAboutToDB();
        location.reload();
    }
    app.createAboutImgBtn2 = function() {
        $('#edit-about-ctrl-btn2').remove();
        $('#about-main-content1-col2-p-tag1').append(self.editAboutImgBtn2);
    }
    self.createAboutImgBtn2();
};