/*
 Jason Header H1 Text Controls =============================================
*/
app.editJasonHeaderH1 = function(
    editJasonHeaderH1Text,
    saveJasonHeaderH1TextBtn,
    textAreaJasonHeaderH1
) {
    "use strict";
    var self = this;
    self.editJasonHeaderH1TextBtn = '<br /><i type="button" class="fa fa-edit edit-btns" id="edit-jason-header-h1-btn"' +
        ' onclick="app.editJasonHeaderH1Text()"></i>';
    self.saveJasonHeaderH1TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-jason-header-h1-btn"' +
        ' onclick="app.saveJasonHeaderH1Text()"></i>';
    self.textAreaJasonHeaderH1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="jason-header-h1-input">' +
        self.jasonContentObj.main.content[0].jasonHeaderH1TagText +
        '</textarea>';

    app.editJasonHeaderH1Text = function() {
        if ($('#edit-jason-header-h1-btn')) {
            $('#edit-jason-header-h1-btn').remove();
        };

        $('#jason-header-h1-tag').append(
            self.textAreaJasonHeaderH1,
            self.saveJasonHeaderH1TextBtn
        );
    }
    app.saveJasonHeaderH1Text = function() {
        var usrInput = $('#jason-header-h1-input').val();
        self.jasonContentObj.main.content[0].jasonHeaderH1TagText = usrInput;
        $('#jason-header-h1-tag').html(
            self.jasonContentObj.main.content[0].jasonHeaderH1TagText
        );
        $('#save-jason-header-h1-btn').remove();
        $('#jason-header-h1-input').remove();
        app.saveJasonToDB();
    }
    app.createJasonHeaderH1Text = function() {
        $('#edit-jason-header-h1-btn').remove();
        $('#jason-header-h1-tag').append(self.editJasonHeaderH1TextBtn);
    }
    self.createJasonHeaderH1Text();
};