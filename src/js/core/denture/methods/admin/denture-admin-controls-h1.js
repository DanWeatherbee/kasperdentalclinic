/*
 Denture Header H1 Text Controls =============================================
*/
app.editHeaderDentureH1 = function(
    $dentureHeaderH1ag,
    editDentureH1Text,
    saveDentureH1TextBtn,
    $saveDentureH1TextBtn,
    $textAreaH1Denture
) {
    "use strict";
    var self = this;
    // Header Controls === When the edit button won't appear check id below.==============
    self.$dentureHeaderH1ag = $('#denture-main-col2-h1-tag-1');
    self.editDentureH1TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-denture-h1-btn" onclick="app.editHeaderDentureH1Text()"></i>';
    self.saveDentureH1TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-denture-h1-btn" onclick="app.saveHeaderDentureH1Text()"></i>';
    self.$saveDentureH1TextBtn = $('#save-denture-h1-btn');
    self.textAreaDentureH1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="150" ' +
        'id="denture-h1-input">' +
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2HeaderH1TagText +
        '</textarea>';
    self.$textAreaH1Denture = $('#denture-h1-input');
    app.editHeaderDentureH1Text = function() {
        if ($('#edit-denture-h1-btn')) {
            $('#edit-denture-h1-btn').remove();
        };
        self.$dentureHeaderH1ag.append(self.textAreaDentureH1);
        self.$dentureHeaderH1ag.append(self.saveDentureH1TextBtn);
    }
    app.saveHeaderDentureH1Text = function() {
        var usrInput = $('#denture-h1-input').val();
        self.dentureContentObj.main.content1[0].dentureMainContent1Col2HeaderH1TagText = usrInput;
        self.$dentureHeaderH1ag.html(self.dentureContentObj.main.content1[0].dentureMainContent1Col2HeaderH1TagText);
        $('#save-denture-h1-btn').remove();
        self.$textAreaH1Denture.remove();
        app.saveDentureToDB();
    }
    app.createHeaderDentureH1Text = function() {
        $('#edit-denture-h1-btn').remove();
        self.$dentureHeaderH1ag.append(self.editDentureH1TextBtn);
    }
    self.createHeaderDentureH1Text();
};