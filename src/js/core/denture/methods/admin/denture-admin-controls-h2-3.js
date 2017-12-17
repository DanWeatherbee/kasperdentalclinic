/*
 Denture  H2_3 Text Controls =============================================
*/
app.editDentureH2_3 = function(
    $dentureH2_3Tag,
    editDentureH2_3Text,
    saveDentureH2_3TextBtn,
    $saveDentureH2_3TextBtn,
    $textAreaH2_3Denture
) {
    "use strict";
    var self = this;
    //  Controls === When the edit button won't appear check id below.==============
    self.$dentureH2_3Tag = $('#denture-main-col2-h2-tag-3');
    self.editDentureH2_3TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-denture-h2-3-btn" onclick="app.editDentureH2_3Text()"></i>';
    self.saveDentureH2_3TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-denture-h2-3-btn" onclick="app.saveDentureH2_3Text()"></i>';
    self.$saveDentureH2_3TextBtn = $('#save-denture-h2-3-btn');
    self.textAreaDentureH2_3 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="150" ' +
        'id="denture-h2-3-input">' +
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2H2_3TagText +
        '</textarea>';
    self.$textAreaH2_3Denture = $('#denture-h2-3-input');
    app.editDentureH2_3Text = function() {
        if ($('#edit-denture-h2-3-btn')) {
            $('#edit-denture-h2-3-btn').remove();
        };
        self.$dentureH2_3Tag.append(self.textAreaDentureH2_3);
        self.$dentureH2_3Tag.append(self.saveDentureH2_3TextBtn);
    }
    app.saveDentureH2_3Text = function() {
        var usrInput = $('#denture-h2-3-input').val();
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2H2_3TagText = usrInput;
        self.$dentureH2_3Tag.html(self.dentureContentObj.main.content1[0].dentureMainContent1Col2H2_3TagText);
        $('#save-denture-h2-3-btn').remove();
        self.$textAreaH2_3Denture.remove();
        app.saveDentureToDB();
    }
    app.createDentureH2_3Text = function() {
        $('#edit-denture-h2-3-btn').remove();
        self.$dentureH2_3Tag.append(self.editDentureH2_3TextBtn);
    }
    self.createDentureH2_3Text();
};