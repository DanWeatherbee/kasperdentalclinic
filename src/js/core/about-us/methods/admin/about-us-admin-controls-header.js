// Header Text Controls =============================================

app.editAboutHeaderText = function(
    $h1Tag,
    editH1Text,
    saveH1TextBtn,
    $saveH1TextBtn,
    $textAreaH1
) {
    "use strict";
    var self = this;
    // Header Controls =============================================
    self.$h1Tag = $('#about-main-row1-col2-header-h1-tag');
    self.editH1Text = '<br /><button type="button" class="btn btn-success" id="edit-h1-btn" onclick="app.editHeaderText()">Edit</button>';
    self.saveH1TextBtn = '<button type="button" class="btn btn-success" id="save-h1-btn" onclick="app.saveHeaderText()">' +
        'Save' +
        '</button>';
    self.$saveH1TextBtn = $('#save-h1-btn');
    self.textAreaH1 = '<textarea class="form-control" rows="1" maxlength="20" ' +
        'id="h1-input">' +
        self.aboutContentObj.main.content1[4].row1Col2HeaderH1TagText +
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
        self.aboutContentObj.main.content1[4].row1Col2HeaderH1TagText = usrInput;
        self.$h1Tag.html(self.aboutContentObj.main.content1[4].row1Col2HeaderH1TagText);
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