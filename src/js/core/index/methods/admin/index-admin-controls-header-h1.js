// Header Text Controls =============================================

app.editIndexHeaderText = function(
    $indexHeaderH1Tag,
    editH1Text,
    saveH1TextBtn,
    $saveH1TextBtn,
    $textAreaH1Index
) {
    "use strict";
    var self = this;
    // Header Controls =============================================
    self.$indexHeaderH1Tag = $('#index-main-row1-col2-header-h1-tag');
    self.editH1TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-index-h1-btn" onclick="app.editHeaderH1Text()"></i>';
    self.saveH1TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-index-h1-btn" onclick="app.saveHeaderH1Text()"></i>';
    self.$saveH1TextBtn = $('#save-index-h1-btn');
    self.textAreaIndexH1 = '<textarea class="form-control" rows="1" number="3" maxlength="50" ' +
        'id="index-h1-input">' +
        self.indexContentObj.main.content1[0].indexMainContent1Row1Col2HeaderH1TagText +
        '</textarea>';
    self.$textAreaH1Index = $('#index-h1-input');

    app.editHeaderH1Text = function() {
        if ($('#edit-h1-btn')) {
            $('#edit-h1-btn').remove();
        };
        self.$indexHeaderH1Tag.append(self.textAreaIndexH1);
        self.$indexHeaderH1Tag.append(self.saveH1TextBtn);
    }
    app.saveHeaderH1Text = function() {
        alert('save is called')
        var usrInput = $('#index-h1-input').val();
        self.indexContentObj.main.content1[0].indexMainContent1Row1Col2HeaderH1TagText = usrInput;
        self.$indexHeaderH1Tag.html(self.indexContentObj.main.content1[0].indexMainContent1Row1Col2HeaderH1TagText);
        $('#save-index-h1-btn').remove();
        self.$textAreaH1Index.remove();
        app.saveIndexToDB();
    }
    app.createHeaderH1Text = function() {
        $('#edit-h1-btn').remove();
        self.$indexHeaderH1Tag.append(self.editH1TextBtn);
    }
    self.createHeaderH1Text();
};