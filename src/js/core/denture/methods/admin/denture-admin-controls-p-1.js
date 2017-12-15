/*
 Denture  P1 Text Controls =============================================
*/
app.editDentureP1 = function(
    $dentureP1Tag,
    editDentureP1Text,
    saveDentureP1TextBtn,
    $saveDentureP1TextBtn,
    $textAreaP1Denture
) {
    "use strict";
    var self = this;
    //  Controls === When the edit button won't appear check id below.==============
    self.$dentureP1Tag = $('#denture-main-col2-p-tag-1');
    self.editDentureP1TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-denture-p-1-btn" onclick="app.editDentureP1Text()"></i>';
    self.saveDentureP1TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-denture-p-1-btn" onclick="app.saveDentureP1Text()"></i>';
    self.$saveDentureP1TextBtn = $('#save-denture-p-1-btn');
    self.textAreaDentureP1 = '<textarea class="form-control" rows="1" number="3" maxlength="1000" ' +
        'id="denture-p-1-input">' +
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2P1TagText +
        '</textarea>';
    self.$textAreaP1Denture = $('#denture-p-1-input');
    app.editDentureP1Text = function() {
        if ($('#edit-denture-p-1-btn')) {
            $('#edit-denture-p-1-btn').remove();
        };
        self.$dentureP1Tag.append(self.textAreaDentureP1);
        self.$dentureP1Tag.append(self.saveDentureP1TextBtn);
    }
    app.saveDentureP1Text = function() {
        var usrInput = $('#denture-p-1-input').val();
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2P1TagText = usrInput;
        self.$dentureP1Tag.html(self.dentureContentObj.main.content1[0].dentureMainContent1Col2P1TagText);
        $('#save-denture-p-1-btn').remove();
        self.$textAreaP1Denture.remove();
        app.saveDentureToDB();
    }
    app.createDentureP1Text = function() {
        $('#edit-denture-p-1-btn').remove();
        self.$dentureP1Tag.append(self.editDentureP1TextBtn);
    }
    self.createDentureP1Text();
};