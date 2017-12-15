/*
 Denture  H2_2 Text Controls =============================================
*/
app.editDentureH2_2 = function(
    $dentureH2_2Tag,
    editDentureH2_2Text,
    saveDentureH2_2TextBtn,
    $saveDentureH2_2TextBtn,
    $textAreaH2_2Denture
) {
    "use strict";
    var self = this;
    //  Controls === When the edit button won't appear check id below.==============
    self.$dentureH2_2Tag = $('#denture-main-col2-h2-tag-2');
    self.editDentureH2_2TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-denture-h2-2-btn" onclick="app.editDentureH2_2Text()"></i>';
    self.saveDentureH2_2TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-denture-h2-2-btn" onclick="app.saveDentureH2_2Text()"></i>';
    self.$saveDentureH2_2TextBtn = $('#save-denture-h2-2-btn');
    self.textAreaDentureH2_2 = '<textarea class="form-control" rows="1" number="3" maxlength="150" ' +
        'id="denture-h2-2-input">' +
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2H2_2TagText +
        '</textarea>';
    self.$textAreaH2_2Denture = $('#denture-h2-2-input');
    app.editDentureH2_2Text = function() {
        if ($('#edit-denture-h2-2-btn')) {
            $('#edit-denture-h2-2-btn').remove();
        };
        self.$dentureH2_2Tag.append(self.textAreaDentureH2_2);
        self.$dentureH2_2Tag.append(self.saveDentureH2_2TextBtn);
    }
    app.saveDentureH2_2Text = function() {
        var usrInput = $('#denture-h2-2-input').val();
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2H2_2TagText = usrInput;
        self.$dentureH2_2Tag.html(self.dentureContentObj.main.content1[0].dentureMainContent1Col2H2_2TagText);
        $('#save-denture-h2-2-btn').remove();
        self.$textAreaH2_2Denture.remove();
        app.saveDentureToDB();
    }
    app.createDentureH2_2Text = function() {
        $('#edit-denture-h2-2-btn').remove();
        self.$dentureH2_2Tag.append(self.editDentureH2_2TextBtn);
    }
    self.createDentureH2_2Text();
};