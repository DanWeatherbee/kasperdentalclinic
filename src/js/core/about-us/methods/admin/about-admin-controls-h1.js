/*
 About H1 Text Controls =============================================
*/
app.editAboutH1 = function(
    editAboutH1Text,
    saveAboutH1TextBtn,
    textAreaAboutH1
) {
    "use strict";
    var self = this;
    self.editAboutH1TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-about-h1-btn"' +
        ' onclick="app.editAboutH1Text()"></i>';
    self.saveAboutH1TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-about-h1-btn"' +
        ' onclick="app.saveAboutH1Text()"></i>';
    self.textAreaAboutH1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="150" ' +
        'id="about-h1-input">' +
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2HeaderH1TagText +
        '</textarea>';

    app.editAboutH1Text = function() {
        if ($('#edit-about-h1-btn')) {
            $('#edit-about-h1-btn').remove();
        };

        $('#about-main-content1-col2-header-h1-tag').append(
            self.textAreaAboutH1,
            self.saveAboutH1TextBtn
        );

    }
    app.saveAboutH1Text = function() {
        var usrInput = $('#about-h1-input').val();
        self.aboutContentObj.main.content1[0].aboutMainContent1Col2HeaderH1TagText = usrInput;
        $('#about-main-content1-col2-header-h1-tag').html(
            self.aboutContentObj.main.content1[0].aboutMainContent1Col2HeaderH1TagText
        );
        $('#save-about-h1-btn').remove();
        $('#about-h1-input').remove();
        app.saveAboutToDB();
    }
    app.createAboutH1Text = function() {
        $('#edit-about-h1-btn').remove();
        $('#about-main-content1-col2-header-h1-tag').append(self.editAboutH1TextBtn);
    }
    self.createAboutH1Text();
};