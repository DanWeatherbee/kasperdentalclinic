/*
 Denture  P3 Text Controls =============================================
*/
app.editDentureP3 = function(
    $dentureP3Tag,
    editDentureP3Text,
    saveDentureP3TextBtn,
    $saveDentureP3TextBtn,
    $textAreaP3Denture
) {
    "use strict";
    var self = this;
    //  Controls === When the edit button won't appear check id below.==============
    self.$dentureP3Tag = $('#denture-main-col2-p-tag-3');
    self.editDentureP3TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-denture-p-3-btn" onclick="app.editDentureP3Text()"></i>';
    self.saveDentureP3TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-denture-p-3-btn" onclick="app.saveDentureP3Text()"></i>';
    self.$saveDentureP3TextBtn = $('#save-denture-p-3-btn');
    self.textAreaDentureP3 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="denture-p-3-input">' +
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2P3TagText +
        '</textarea>';
    self.$textAreaP3Denture = $('#denture-p-3-input');
    app.editDentureP3Text = function() {
        if ($('#edit-denture-p-3-btn')) {
            $('#edit-denture-p-3-btn').remove();
        };
        self.$dentureP3Tag.append(self.textAreaDentureP3);
        self.$dentureP3Tag.append(self.saveDentureP3TextBtn);
    }
    app.saveDentureP3Text = function() {
        var usrInput = $('#denture-p-3-input').val();
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2P3TagText = usrInput;
        self.$dentureP3Tag.html(self.dentureContentObj.main.content1[0].dentureMainContent1Col2P3TagText);
        $('#save-denture-p-3-btn').remove();
        self.$textAreaP3Denture.remove();
        app.saveDentureToDB();
    }
    app.createDentureP3Text = function() {
        $('#edit-denture-p-3-btn').remove();
        self.$dentureP3Tag.append(self.editDentureP3TextBtn);
    }
    self.createDentureP3Text();
};