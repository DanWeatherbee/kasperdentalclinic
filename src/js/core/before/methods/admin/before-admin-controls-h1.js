/*
 Before Header H1 Text Controls =============================================
*/
app.editBeforeHeaderH1 = function(
    editBeforeH1Text,
    saveBeforeH1TextBtn,
    textAreaBeforeH1
) {
    "use strict";
    var self = this;
    self.editBeforeH1TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-before-h1-btn"' +
        ' onclick="app.editBeforeH1Text()"></i>';
    self.saveBeforeH1TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-before-h1-btn"' +
        ' onclick="app.saveBeforeH1Text()"></i>';
    self.textAreaBeforeH1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="before-h1-input">' +
        self.beforeContentObj.main.content1[0].beforeMainContent1HeaderH1TagText +
        '</textarea>';

    app.editBeforeH1Text = function() {
        if ($('#edit-before-h1-btn')) {
            $('#edit-before-h1-btn').remove();
        };

        $('#before-main-content1-header-h1-tag').append(
            self.textAreaBeforeH1,
            self.saveBeforeH1TextBtn
        );
    }
    app.saveBeforeH1Text = function() {
        var usrInput = $('#before-h1-input').val();
        self.beforeContentObj.main.content1[0].beforeMainContent1HeaderH1TagText = usrInput;
        $('#before-main-content1-header-h1-tag').html(
            self.beforeContentObj.main.content1[0].beforeMainContent1HeaderH1TagText
        );
        $('#save-before-h1-btn').remove();
        $('#before-h1-input').remove();
        app.saveBeforeToDB();
    }
    app.createBeforeH1Text = function() {
        $('#edit-before-h1-btn').remove();
        $('#before-main-content1-header-h1-tag').append(self.editBeforeH1TextBtn);
    }
    self.createBeforeH1Text();
};