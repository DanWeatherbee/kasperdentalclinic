/*
 Contact P_2 Text Controls =============================================
 New Naming convention so we can clone the control,
  simply by incrementing the number on the end of every variable all at once.
*/
app.editContactP_2 = function(
    editContactPText2,
    saveContactPBtn2,
    textAreaContactP_2
) {
    "use strict";
    var self = this;
    self.editContactPBtn2 = '<i type="button" class="fa fa-edit edit-btns" id="edit-contact-p-btn-2"' +
        ' onclick="app.editContactPText2()"></i>';
    self.saveContactPBtn2 = '<i type="button" class="fa fa-save edit-btns" id="save-contact-p-btn-2"' +
        ' onclick="app.saveContactPText2()"></i>';
    self.textAreaContactP_2 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="contact-input-p-2">' +
        self.contactContentObj.main.content[0].contactPText2 +
        '</textarea>';

    app.editContactPText2 = function() {
        if ($('#edit-contact-p-btn-2')) {
            $('#edit-contact-p-btn-2').remove();
        };

        $('#contact-p-tag2').append(
            self.textAreaContactP_2,
            self.saveContactPBtn2
        );
    }
    app.saveContactPText2 = function() {
        var usrInput = $('#contact-input-p-2').val();
        self.contactContentObj.main.content[0].contactPText2 = usrInput;
        $('#contact-p-tag2').html(
            self.contactContentObj.main.content[0].contactPText2
        );
        $('#save-contact-p-btn-2').remove();
        $('#contact-input-p-2').remove();
        app.saveContactToDB();
    }
    app.createContactPText2 = function() {
        $('#edit-contact-p-btn-2').remove();
        $('#contact-p-tag2').append(self.editContactPBtn2);
    }
    self.createContactPText2();
};