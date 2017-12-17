/*
 Denture  Iframe2 Text Controls =============================================
*/
app.editDentureIframe2 = function(
    editDentureIframe2TextBtn,
    saveDentureIframe2TextBtn,
    textAreaDentureIframe2
) {
    "use strict";
    var self = this;
    //  Controls === When the edit button won't appear check id below.==============
    self.editDentureIframe2TextBtn = '<i type="button" class="fa fa-film edit-btns" id="edit-denture-iframe-2-btn" onclick="app.editDentureIframe2Text()"> -Swap YTube videos. </i>';
    self.saveDentureIframe2TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-denture-iframe-2-btn" onclick="app.saveDentureIframe2Text()"></i>';
    self.textAreaDentureIframe2 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="denture-iframe-2-input">' +
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2Frame2 +
        '</textarea>';
    app.editDentureIframe2Text = function() {
        if ($('#edit-denture-iframe-2-btn')) {
            $('#edit-denture-iframe-2-btn').remove();
        };
        $('#denture-main-col2-p-tag-2').prepend(self.textAreaDentureIframe2);
        $('#denture-main-col2-p-tag-2').prepend(self.saveDentureIframe2TextBtn);
    }
    app.saveDentureIframe2Text = function() {
        var usrInput = $('#denture-iframe-2-input').val();
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2Frame2 = usrInput;
        $('#denture-main-col2-p-tag-2').prepend(self.dentureContentObj.main.content1[0].dentureMainContent1Col2Frame2);
        $('#save-denture-iframe-2-btn').remove();
        $('#denture-iframe-2-input').remove();
        $('#denture-iframe-2').remove();
        app.saveDentureToDB();
        location.reload();
    }
    app.createDentureIframe2Text = function() {
        $('#edit-denture-iframe-2-btn').remove();
        $('#denture-main-col2-p-tag-2').prepend(self.editDentureIframe2TextBtn);
    }
    self.createDentureIframe2Text();
};