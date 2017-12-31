/*
 Contact P_3 Text Controls =============================================
 New Naming convention so we can clone the control,
  simply by incrementing the number on the end of every variable all at once.
*/
app.editContactP_3 = function(
    editContactPText3,
    saveContactPBtn3,
    textAreaContactP_3
) {
    "use strict";
    var self = this;
    self.editContactPBtn3 = '<i type="button" class="fa fa-edit edit-btns" id="edit-contact-p-btn-3"' +
        ' onclick="app.editContactPText3()"></i>';
    self.saveContactPBtn3 = '<i type="button" class="fa fa-save edit-btns" id="save-contact-p-btn-3"' +
        ' onclick="app.saveContactPText3()"></i>';
    self.textAreaContactP_3 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="contact-input-p-3">' +
        self.contactContentObj.main.content[0].contactPText3 +
        '</textarea>';

    app.editContactPText3 = function() {
        if ($('#edit-contact-p-btn-3')) {
            $('#edit-contact-p-btn-3').remove();
        };

        $('#contact-p-tag3').append(
            self.textAreaContactP_3,
            self.saveContactPBtn3
        );
    }
    app.saveContactPText3 = function() {
        var usrInput = $('#contact-input-p-3').val();
        self.contactContentObj.main.content[0].contactPText3 = usrInput;
        $('#contact-p-tag3').html(
            self.contactContentObj.main.content[0].contactPText3
        );
        $('#save-contact-p-btn-3').remove();
        $('#contact-input-p-3').remove();
        app.saveContactToDB();
    }
    app.createContactPText3 = function() {
        $('#edit-contact-p-btn-3').remove();
        $('#contact-p-tag3').append(self.editContactPBtn3);
    }
    self.createContactPText3();
};