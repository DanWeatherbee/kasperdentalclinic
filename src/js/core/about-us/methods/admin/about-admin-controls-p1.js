/*
 About P1 Text Controls =============================================
*/
app.editAboutP1 = function(
    editAboutPText1,
    saveAboutPText1Btn,
    textAreaAboutP1
) {
    "use strict";
    var self = this;
    self.editAboutPText1Btn = '<i type="button" class="fa fa-edit edit-btns" id="edit-about-p1-btn"' +
        ' onclick="app.editAboutPText1()"></i>';
    self.saveAboutPText1Btn = '<i type="button" class="fa fa-save edit-btns" id="save-about-p1-btn"' +
        ' onclick="app.saveAboutPText1()"></i>';
    self.textAreaAboutP1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="about-p1-input">' +
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2PTagText1 +
        '</textarea>';

    app.editAboutPText1 = function() {
        if ($('#edit-about-p1-btn')) {
            $('#edit-about-p1-btn').remove();
        };

        $('#about-main-content1-col2-p-tag1').append(
            self.textAreaAboutP1,
            self.saveAboutPText1Btn
        );

    }
    app.saveAboutPText1 = function() {
        var usrInput = $('#about-p1-input').val();
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2PTagText1 = usrInput;
        $('#about-main-content1-col2-p-tag1').html(
            self.aboutContentObj.main.content1[0].aboutMainContent1Col2PTagText1
        );
        $('#save-about-p1-btn').remove();
        $('#about-p1-input').remove();
        app.saveAboutToDB();
    }
    app.createAboutPText1 = function() {
        $('#edit-about-p1-btn').remove();
        $('#about-main-content1-col2-p-tag1').append(self.editAboutPText1Btn);
    }
    self.createAboutPText1();
};