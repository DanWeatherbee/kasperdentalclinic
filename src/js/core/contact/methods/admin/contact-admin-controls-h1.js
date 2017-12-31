/*
 Contact Header H1 Text Controls =============================================
*/
app.editContactHeaderH1 = function(
    editContactHeaderH1Text,
    saveContactHeaderH1TextBtn,
    textAreaContactHeaderH1
) {
    "use strict";
    var self = this;
    self.editContactHeaderH1TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-contact-header-h1-btn"' +
        ' onclick="app.editContactHeaderH1Text()"></i>';
    self.saveContactHeaderH1TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-contact-header-h1-btn"' +
        ' onclick="app.saveContactHeaderH1Text()"></i>';
    self.textAreaContactHeaderH1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="contact-header-h1-input">' +
        self.contactContentObj.main.content[0].contactHeaderH1TagText +
        '</textarea>';

    app.editContactHeaderH1Text = function() {
        if ($('#edit-contact-header-h1-btn')) {
            $('#edit-contact-header-h1-btn').remove();
        };

        $('#contact-header-h1-tag').append(
            self.textAreaContactHeaderH1,
            self.saveContactHeaderH1TextBtn
        );
    }
    app.saveContactHeaderH1Text = function() {
        var usrInput = $('#contact-header-h1-input').val();
        self.contactContentObj.main.content[0].contactHeaderH1TagText = usrInput;
        $('#contact-header-h1-tag').html(
            self.contactContentObj.main.content[0].contactHeaderH1TagText
        );
        $('#save-contact-header-h1-btn').remove();
        $('#contact-header-h1-input').remove();
        app.saveContactToDB();
    }
    app.createContactHeaderH1Text = function() {
        $('#edit-contact-header-h1-btn').remove();
        $('#contact-header-h1-tag').append(self.editContactHeaderH1TextBtn);
    }
    self.createContactHeaderH1Text();
};