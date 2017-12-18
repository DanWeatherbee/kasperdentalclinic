/*
 About P1 Text Controls =============================================
*/
app.editAboutImgBtn1Ctrl = function(
    editAboutImgBtn1,
    saveAboutImgBtn1,
    textAreaAboutImgBtn1
) {
    "use strict";
    var self = this;
    self.editAboutImgBtn1 = '<br /><i type="button" class="fa fa-edit edit-btns" id="edit-about-ctrl-btn1"' +
        ' onclick="app.editAboutImgBtn1()"> button 1 </i>';
    self.saveAboutImgBtn1 = '<i type="button" class="fa fa-save edit-btns" id="save-about-ctrl-btn1"' +
        ' onclick="app.saveAboutImgBtn1()"></i>';
    self.textAreaAboutImgBtn1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="150" ' +
        'id="about-p1-input">' +
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2ImgButton1 +
        '</textarea>';

    app.editAboutImgBtn1 = function() {
        if ($('#edit-about-ctrl-btn1')) {
            $('#edit-about-ctrl-btn1').remove();
        };

        $('#about-main-content1-col2-p-tag1').append(
            self.textAreaAboutImgBtn1,
            self.saveAboutImgBtn1
        );

    }
    app.saveAboutImgBtn1 = function() {
        var usrInput = $('#about-p1-input').val();
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2ImgButton1 = usrInput;
        $('#about-main-content1-col2-p-tag1').append(
            self.aboutContentObj.main.content1[0].aboutMainContent1Col2ImgButton1
        );
        $('#save-about-ctrl-btn1').remove();
        $('#about-p1-input').remove();
        app.saveAboutToDB();
        location.reload();
    }
    app.createAboutImgBtn1 = function() {
        $('#edit-about-ctrl-btn1').remove();
        $('#about-main-content1-col2-p-tag1').append(self.editAboutImgBtn1);
    }
    self.createAboutImgBtn1();
};