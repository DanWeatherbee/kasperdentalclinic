/*
Written in a Object Oriented pattern OOP by Dan Weatherbee
 Header P Text Controls =============================================
*/
app.editIndexHeaderPText = function(
    $indexHeaderPTag,
    editPText,
    savePTextBtn,
    $savePTextBtn,
    $textAreaPIndex
) {
    "use strict";
    var self = this;
    // Header H2 Controls =============================================
    self.$indexHeaderPTag = $('#index-main-row1-col2-p-tag');
    self.editPTextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-index-p-btn" onclick="app.editHeaderPText()"></i>';
    self.savePTextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-index-p-btn" onclick="app.saveHeaderPText()"></i>';
    self.$savePTextBtn = $('#save-index-p-btn');
    self.textAreaPIndex = '<textarea class="form-control" rows="1" number="3" maxlength="150" ' +
        'id="index-p-input">' +
        self.indexContentObj.main.content1[0].indexMainContent1Row1Col2PTagText +
        '</textarea>';
    self.$textAreaPIndex = $('#index-p-input');

    app.editHeaderPText = function() {
        if ($('#edit-index-p-btn')) {
            $('#edit-index-p-btn').remove();
        };
        self.$indexHeaderPTag.append(self.textAreaPIndex);
        self.$indexHeaderPTag.append(self.savePTextBtn);
    }
    app.saveHeaderPText = function() {
        var usrInput = $('#index-p-input').val();
        self.indexContentObj.main.content1[0].indexMainContent1Row1Col2PTagText = usrInput;
        self.$indexHeaderPTag.html(self.indexContentObj.main.content1[0].indexMainContent1Row1Col2PTagText);
        $('#save-index-p-btn').remove();
        self.$textAreaPIndex.remove();
        app.saveIndexToDB();
    }
    app.createHeaderPText = function() {
        $('#edit-index-p-btn').remove();
        self.$indexHeaderPTag.prepend(self.editPTextBtn);
    }
    self.createHeaderPText();
};