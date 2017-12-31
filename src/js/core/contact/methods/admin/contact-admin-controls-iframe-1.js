/*
 Contact  Iframe1 Text Controls =============================================
*/
app.editContactIframe1 = function(
    editContactIframe1TextBtn,
    saveContactIframe1TextBtn,
    textAreaContactIframe1
) {
    "use strict";
    var self = this;
    //  Controls === When the edit button won't appear check id below.==============
    self.editContactIframe1TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-contact-iframe-1-btn" onclick="app.editContactIframe1Text()"> -Swap Iframe -map. </i>';
    self.saveContactIframe1TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-contact-iframe-1-btn" onclick="app.saveContactIframe1Text()"></i>';
    self.textAreaContactIframe1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="contact-iframe-1-input">' +
        self.contactContentObj.main.content[0].contactIframe +
        '</textarea>';
    app.editContactIframe1Text = function() {
        if ($('#edit-contact-iframe-1-btn')) {
            $('#edit-contact-iframe-1-btn').remove();
        };
        $('#contact-p-tag3').append(self.textAreaContactIframe1);
        $('#contact-p-tag3').append(self.saveContactIframe1TextBtn);
    }
    app.saveContactIframe1Text = function() {
        var usrInput = $('#contact-iframe-1-input').val();
        self.contactContentObj.main.content[0].contactIframe = usrInput;
        $('#contact-p-tag3').append(self.contactContentObj.main.content[0].contactIframe);
        $('#save-contact-iframe-1-btn').remove();
        $('#contact-iframe-1-input').remove();
        $('#contact-iframe-1').remove();
        app.saveContactToDB();
        location.reload();
    }
    app.createContactIframe1Text = function() {
        $('#edit-contact-iframe-1-btn').remove();
        $('#contact-p-tag3').append(self.editContactIframe1TextBtn);
    }
    self.createContactIframe1Text();
};