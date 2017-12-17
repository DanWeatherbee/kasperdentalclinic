/*
 Denture  Iframe3 Text Controls =============================================
*/
app.editDentureIframe3 = function(
    editDentureIframe3TextBtn,
    saveDentureIframe3TextBtn,
    textAreaDentureIframe3
) {
    "use strict";
    var self = this;
    //  Controls === When the edit button won't appear check id below.==============
    self.editDentureIframe3TextBtn = '<i type="button" class="fa fa-film edit-btns" id="edit-denture-iframe-3-btn" onclick="app.editDentureIframe3Text()"> -Swap YTube videos. </i>';
    self.saveDentureIframe3TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-denture-iframe-3-btn" onclick="app.saveDentureIframe3Text()"></i>';
    self.textAreaDentureIframe3 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="denture-iframe-3-input">' +
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2Frame3 +
        '</textarea>';
    app.editDentureIframe3Text = function() {
        if ($('#edit-denture-iframe-3-btn')) {
            $('#edit-denture-iframe-3-btn').remove();
        };
        $('#denture-main-col2-p-tag-3').prepend(self.textAreaDentureIframe3);
        $('#denture-main-col2-p-tag-3').prepend(self.saveDentureIframe3TextBtn);
    }
    app.saveDentureIframe3Text = function() {
        var usrInput = $('#denture-iframe-3-input').val();
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2Frame3 = usrInput;
        $('#denture-main-col2-p-tag-3').prepend(self.dentureContentObj.main.content1[0].dentureMainContent1Col2Frame3);
        $('#save-denture-iframe-3-btn').remove();
        $('#denture-iframe-3-input').remove();
        $('#denture-iframe-3').remove();
        app.saveDentureToDB();
        location.reload();
    }
    app.createDentureIframe3Text = function() {
        $('#edit-denture-iframe-3-btn').remove();
        $('#denture-main-col2-p-tag-3').prepend(self.editDentureIframe3TextBtn);
    }
    self.createDentureIframe3Text();
};