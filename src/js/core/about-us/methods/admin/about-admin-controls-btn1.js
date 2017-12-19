/*
 About P1 Text Controls =============================================
*/
app.editAboutBtn1 = function(
    editAboutBtnTag1,
    saveAboutBtnTag1,
    textAreaAboutBtnTag1
) {
    "use strict";
    var self = this;
    self.editAboutBtnTag1 = '<br /><i type="button" class="fa fa-edit edit-btns" id="edit-about-ctrl-btn1"' +
        ' onclick="app.editAboutCtrlBtn1()"> button 1 </i>';
    self.saveAboutBtnTag1 = '<i type="button" class="fa fa-save edit-btns" id="save-about-ctrl-btn1"' +
        ' onclick="app.saveAboutCtrlBtn1()"></i>';
    self.textAreaAboutBtnTag1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="about-btn1-input">' +
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2ImgButton1 +
        '</textarea>';

    app.editAboutCtrlBtn1 = function() {
        if ($('#edit-about-ctrl-btn1')) {
            $('#edit-about-ctrl-btn1').remove();
        };

        $('#about-main-content1-col2-p-tag1').append(
            self.textAreaAboutBtnTag1,
            self.saveAboutBtnTag1
        );

    }
    app.saveAboutCtrlBtn1 = function() {
        var usrInput = $('#about-btn1-input').val();
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2ImgButton1 = usrInput;
        $('#about-main-content1-col2-p-tag1').append(
            self.aboutContentObj.main.content1[0].aboutMainContent1Col2ImgButton1
        );
        $('#save-about-ctrl-btn1').remove();
        $('#about-btn1-input').remove();
        app.saveAboutToDB();
        location.reload();
    }
    app.createAboutCtrlBtn1 = function() {
        $('#edit-about-ctrl-btn1').remove();
        $('#about-main-content1-col2-p-tag1').append(self.editAboutBtnTag1);
    }
    self.createAboutCtrlBtn1();
};