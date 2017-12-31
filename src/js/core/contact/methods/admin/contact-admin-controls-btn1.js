/*
 Contact P1 Text Controls =============================================
*/
app.editContactBtn1 = function(
    editContactBtnTag1,
    saveContactBtnTag1,
    textAreaContactBtnTag1
) {
    "use strict";
    var self = this;
    self.editContactBtnTag1 = '<br /><i type="button" class="fa fa-edit edit-btns" id="edit-contact-ctrl-btn1"' +
        ' onclick="app.editContactCtrlBtn1()"> button 1 </i><br />';
    self.saveContactBtnTag1 = '<i type="button" class="fa fa-save edit-btns" id="save-contact-ctrl-btn1"' +
        ' onclick="app.saveContactCtrlBtn1()"></i>';
    self.textAreaContactBtnTag1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="contact-p-tag3-input">' +
        self.contactContentObj.main.content[0].contactBtn1 +
        '</textarea>';

    app.editContactCtrlBtn1 = function() {
        if ($('#edit-contact-ctrl-btn1')) {
            $('#edit-contact-ctrl-btn1').remove();
        };

        $('#contact-p-tag3').append(
            self.textAreaContactBtnTag1,
            self.saveContactBtnTag1
        );

    }
    app.saveContactCtrlBtn1 = function() {
        var usrInput = $('#contact-p-tag3-input').val();
        self.contactContentObj.main.content[0].contactBtn1 = usrInput;
        $('#contact-p-tag3').append(
            self.contactContentObj.main.content[0].contactBtn1
        );
        $('#save-contact-ctrl-btn1').remove();
        $('#contact-p-tag3-input').remove();
        app.saveContactToDB();
        location.reload();
    }
    app.createContactCtrlBtn1 = function() {
        $('#edit-contact-ctrl-btn1').remove();
        $('#contact-p-tag3').append(self.editContactBtnTag1);
    }
    self.createContactCtrlBtn1();
};