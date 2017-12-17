/*
 Denture  H2_1 Text Controls =============================================
*/
app.editDentureH2_1 = function(
    $dentureH2_1Tag,
    editDentureH2_1Text,
    saveDentureH2_1TextBtn,
    $saveDentureH2_1TextBtn,
    $textAreaH2_1Denture
) {
    "use strict";
    var self = this;
    //  Controls === When the edit button won't appear check id below.==============
    self.$dentureH2_1Tag = $('#denture-main-col2-h2-tag-1');
    self.editDentureH2_1TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-denture-h2-1-btn" onclick="app.editDentureH2_1Text()"></i>';
    self.saveDentureH2_1TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-denture-h2-1-btn" onclick="app.saveDentureH2_1Text()"></i>';
    self.$saveDentureH2_1TextBtn = $('#save-denture-h2-1-btn');
    self.textAreaDentureH2_1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="150" ' +
        'id="denture-h2-1-input">' +
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2H2_1TagText +
        '</textarea>';
    self.$textAreaH2_1Denture = $('#denture-h2-1-input');
    app.editDentureH2_1Text = function() {
        if ($('#edit-denture-h2-1-btn')) {
            $('#edit-denture-h2-1-btn').remove();
        };
        self.$dentureH2_1Tag.append(self.textAreaDentureH2_1);
        self.$dentureH2_1Tag.append(self.saveDentureH2_1TextBtn);
    }
    app.saveDentureH2_1Text = function() {
        var usrInput = $('#denture-h2-1-input').val();
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2H2_1TagText = usrInput;
        self.$dentureH2_1Tag.html(self.dentureContentObj.main.content1[0].dentureMainContent1Col2H2_1TagText);
        $('#save-denture-h2-1-btn').remove();
        self.$textAreaH2_1Denture.remove();
        app.saveDentureToDB();
    }
    app.createDentureH2_1Text = function() {
        $('#edit-denture-h2-1-btn').remove();
        self.$dentureH2_1Tag.append(self.editDentureH2_1TextBtn);
    }
    self.createDentureH2_1Text();
};