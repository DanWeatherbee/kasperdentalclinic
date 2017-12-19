/*
 About Btn2 Text Controls =============================================
*/
app.editAboutBtn2 = function(
    editAboutBtnTag2,
    saveAboutBtnTag2,
    textAreaAboutBtnTag2
) {
    "use strict";
    var self = this;
    self.editAboutBtnTag2 = '<br /><i type="button" class="fa fa-edit edit-btns" id="edit-about-ctrl-btn2"' +
        ' onclick="app.editAboutCtrlBtn2()"> button 2 </i>';
    self.saveAboutBtnTag2 = '<i type="button" class="fa fa-save edit-btns" id="save-about-ctrl-btn2"' +
        ' onclick="app.saveAboutCtrlBtn2()"></i>';
    self.textAreaAboutBtnTag2 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="about-btn2-input">' +
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2ImgButton2 +
        '</textarea>';

    app.editAboutCtrlBtn2 = function() {
        if ($('#edit-about-ctrl-btn2')) {
            $('#edit-about-ctrl-btn2').remove();
        };

        $('#about-main-content1-col2-p-tag1').append(
            self.textAreaAboutBtnTag2,
            self.saveAboutBtnTag2
        );

    }
    app.saveAboutCtrlBtn2 = function() {
        var usrInput = $('#about-btn2-input').val();
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2ImgButton2 = usrInput;
        $('#about-main-content1-col2-p-tag1').append(
            self.aboutContentObj.main.content1[0].aboutMainContent1Col2ImgButton2
        );
        $('#save-about-ctrl-btn2').remove();
        $('#about-btn2-input').remove();
        app.saveAboutToDB();
        location.reload();
    }
    app.createAboutCtrlBtn2 = function() {
        $('#edit-about-ctrl-btn2').remove();
        $('#about-main-content1-col2-p-tag1').append(self.editAboutBtnTag2);
    }
    self.createAboutCtrlBtn2();
};