/*
 Denture  P2 Text Controls =============================================
*/
app.editDentureP2 = function(
    $dentureP2Tag,
    editDentureP2Text,
    saveDentureP2TextBtn,
    $saveDentureP2TextBtn,
    $textAreaP2Denture
) {
    "use strict";
    var self = this;
    //  Controls === When the edit button won't appear check id below.==============
    self.$dentureP2Tag = $('#denture-main-col2-p-tag-2');
    self.editDentureP2TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-denture-p-2-btn" onclick="app.editDentureP2Text()"></i>';
    self.saveDentureP2TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-denture-p-2-btn" onclick="app.saveDentureP2Text()"></i>';
    self.$saveDentureP2TextBtn = $('#save-denture-p-2-btn');
    self.textAreaDentureP2 = '<textarea class="form-control" rows="1" number="3" maxlength="1000" ' +
        'id="denture-p-2-input">' +
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2P2TagText +
        '</textarea>';
    self.$textAreaP2Denture = $('#denture-p-2-input');
    app.editDentureP2Text = function() {
        if ($('#edit-denture-p-2-btn')) {
            $('#edit-denture-p-2-btn').remove();
        };
        self.$dentureP2Tag.append(self.textAreaDentureP2);
        self.$dentureP2Tag.append(self.saveDentureP2TextBtn);
    }
    app.saveDentureP2Text = function() {
        var usrInput = $('#denture-p-2-input').val();
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2P2TagText = usrInput;
        self.$dentureP2Tag.html(self.dentureContentObj.main.content1[0].dentureMainContent1Col2P2TagText);
        $('#save-denture-p-2-btn').remove();
        self.$textAreaP2Denture.remove();
        app.saveDentureToDB();
    }
    app.createDentureP2Text = function() {
        $('#edit-denture-p-2-btn').remove();
        self.$dentureP2Tag.append(self.editDentureP2TextBtn);
    }
    self.createDentureP2Text();
};