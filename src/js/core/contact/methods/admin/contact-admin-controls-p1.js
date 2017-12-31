/*
 Contact P_1 Text Controls =============================================
 New Naming convention so we can clone the control,
  simply by incrementing the number on the end of every variable all at once.
*/
app.editContactP_1 = function(
    editContactPText1,
    saveContactPBtn1,
    textAreaContactP_1
) {
    "use strict";
    var self = this;
    self.editContactPBtn1 = '<i type="button" class="fa fa-edit edit-btns" id="edit-contact-p-btn-1"' +
        ' onclick="app.editContactPText1()"></i>';
    self.saveContactPBtn1 = '<i type="button" class="fa fa-save edit-btns" id="save-contact-p-btn-1"' +
        ' onclick="app.saveContactPText1()"></i>';
    self.textAreaContactP_1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="contact-input-p-1">' +
        self.contactContentObj.main.content[0].contactPText1 +
        '</textarea>';

    app.editContactPText1 = function() {
        if ($('#edit-contact-p-btn-1')) {
            $('#edit-contact-p-btn-1').remove();
        };

        $('#contact-p-tag1').append(
            self.textAreaContactP_1,
            self.saveContactPBtn1
        );
    }
    app.saveContactPText1 = function() {
        var usrInput = $('#contact-input-p-1').val();
        self.contactContentObj.main.content[0].contactPText1 = usrInput;
        $('#contact-p-tag1').html(
            self.contactContentObj.main.content[0].contactPText1
        );
        $('#save-contact-p-btn-1').remove();
        $('#contact-input-p-1').remove();
        app.saveContactToDB();
    }
    app.createContactPText1 = function() {
        $('#edit-contact-p-btn-1').remove();
        $('#contact-p-tag1').append(self.editContactPBtn1);
    }
    self.createContactPText1();
};