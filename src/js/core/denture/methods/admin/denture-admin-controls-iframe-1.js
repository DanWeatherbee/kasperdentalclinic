/*
 Denture  Iframe1 Text Controls =============================================
*/
app.editDentureIframe1 = function(
    editDentureIframe1TextBtn,
    saveDentureIframe1TextBtn,
    textAreaDentureIframe1
) {
    "use strict";
    var self = this;
    //  Controls === When the edit button won't appear check id below.==============
    self.editDentureIframe1TextBtn = '<i type="button" class="fa fa-film edit-btns" id="edit-denture-iframe-1-btn" onclick="app.editDentureIframe1Text()"> -Swap YTube videos. </i>';
    self.saveDentureIframe1TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-denture-iframe-1-btn" onclick="app.saveDentureIframe1Text()"></i>';
    self.textAreaDentureIframe1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="denture-iframe-1-input">' +
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2Frame1 +
        '</textarea>';
    app.editDentureIframe1Text = function() {
        if ($('#edit-denture-iframe-1-btn')) {
            $('#edit-denture-iframe-1-btn').remove();
        };
        $('#denture-main-col2-p-tag-1').prepend(self.textAreaDentureIframe1);
        $('#denture-main-col2-p-tag-1').prepend(self.saveDentureIframe1TextBtn);
    }
    app.saveDentureIframe1Text = function() {
        var usrInput = $('#denture-iframe-1-input').val();
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2Frame1 = usrInput;
        $('#denture-main-col2-p-tag-1').prepend(self.dentureContentObj.main.content1[0].dentureMainContent1Col2Frame1);
        $('#save-denture-iframe-1-btn').remove();
        $('#denture-iframe-1-input').remove();
        $('#denture-iframe-1').remove();
        app.saveDentureToDB();
        location.reload();
    }
    app.createDentureIframe1Text = function() {
        $('#edit-denture-iframe-1-btn').remove();
        $('#denture-main-col2-p-tag-1').prepend(self.editDentureIframe1TextBtn);
    }
    self.createDentureIframe1Text();
};