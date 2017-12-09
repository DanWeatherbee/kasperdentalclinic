// Header Text Controls =============================================

app.editIndexHeaderText = function(
    $h1Tag,
    editH1Text,
    saveH1TextBtn,
    $saveH1TextBtn,
    $textAreaH1
) {
    "use strict";
    var self = this;
    // Header Controls =============================================
    self.$h1Tag = $('#index-main-row1-col2-header-h1-tag');
    self.editH1Text = '<i type="button" class="fa fa-edit edit-btns" id="edit-h1-btn" onclick="app.editHeaderText()"></i>';
    self.saveH1TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-h1-btn" onclick="app.saveHeaderText()"></i>';
    self.$saveH1TextBtn = $('#save-h1-btn');
    self.textAreaH1 = '<textarea class="form-control" rows="1" number="3" maxlength="50" ' +
        'id="h1-input">' +
        self.indexContentObj.main.content1[4].row1Col2HeaderH1TagText +
        '</textarea>';
    self.$textAreaH1 = $('#h1-input');

    app.editHeaderText = function() {
        if ($('#edit-h1-btn')) {
            $('#edit-h1-btn').remove();
        };
        self.$h1Tag.append(self.textAreaH1);
        self.$h1Tag.append(self.saveH1TextBtn);
    }
    app.saveHeaderText = function() {
        var usrInput = $('#h1-input').val();
        self.indexContentObj.main.content1[4].row1Col2HeaderH1TagText = usrInput;
        self.$h1Tag.html(self.indexContentObj.main.content1[4].row1Col2HeaderH1TagText);
        self.$saveH1TextBtn.remove();
        self.$textAreaH1.remove();
        app.saveToDB();

    }
    app.createHeaderText = function() {
        $('#edit-h1-btn').remove();
        self.$h1Tag.append(self.editH1Text);
    }
    self.createHeaderText();
};