// Header Text Controls =============================================

app.editAboutHeaderPText = function(
    $PTag,
    editPText,
    savePTextBtn,
    $savePTextBtn,
    $textAreaP
) {
    "use strict";
    var self = this;
    // Header Controls =============================================
    self.$PTag = $('#about-main-row1-col2-p-tag');
    self.editPText = '<br /><i type="button" class="fa fa-edit" id="edit-P-btn" onclick="app.editHeaderPText()"></i>';
    self.savePTextBtn = '<i type="button" class="fa fa-save" id="save-P-btn" onclick="app.saveHeaderPText()"></i>';
    self.$savePTextBtn = $('#save-P-btn');
    self.textAreaP = '<textarea class="form-control" rows="1" number="3" maxlength="50" ' +
        'id="P-input">' +
        self.aboutContentObj.main.content1[6].row1Col2PTagText +
        '</textarea>';
    self.$textAreaP = $('#P-input');

    app.editHeaderPText = function() {
        if ($('#edit-P-btn')) {
            $('#edit-P-btn').remove();
        };
        self.$PTag.append(self.textAreaP);
        self.$PTag.append(self.savePTextBtn);
    }
    app.saveHeaderPText = function() {
        var usrInput = $('#P-input').val();
        console.log(self.aboutContentObj.main.content1)
        self.aboutContentObj.main.content1[6].row1Col2PTagText = usrInput;
        self.$PTag.html(self.aboutContentObj.main.content1[6].row1Col2PTagText);
        self.$savePTextBtn.remove();
        self.$textAreaP.remove();
        app.saveToDB();

    }
    app.createHeaderPText = function() {
        $('#edit-P-btn').remove();
        self.$PTag.append(self.editPText);
    }
    self.createHeaderPText();
};