/*
Written in a Object Oriented pattern OOP by Dan Weatherbee
 Header H2 Text Controls =============================================
*/
app.editIndexHeaderH2Text = function(
    $indexHeaderH2Tag,
    editH2Text,
    saveH2TextBtn,
    $saveH2TextBtn,
    $textAreaH2Index
) {
    "use strict";
    var self = this;
    // Header H2 Controls =============================================
    self.$indexHeaderH2Tag = $('#index-main-row1-col2-header-h2-tag');
    self.editH2TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-index-h2-btn" onclick="app.editHeaderH2Text()"></i>';
    self.saveH2TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-index-h2-btn" onclick="app.saveHeaderH2Text()"></i>';
    self.$saveH2TextBtn = $('#save-index-h2-btn');
    self.textAreaIndexH2 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="150" ' +
        'id="index-h2-input">' +
        self.indexContentObj.main.content1[0].indexMainContent1Row1Col2HeaderH2TagText +
        '</textarea>';
    self.$textAreaH2Index = $('#index-h2-input');

    app.editHeaderH2Text = function() {
        if ($('#edit-index-h2-btn')) {
            $('#edit-index-h2-btn').remove();
        };
        self.$indexHeaderH2Tag.append(self.textAreaIndexH2);
        self.$indexHeaderH2Tag.append(self.saveH2TextBtn);
    }
    app.saveHeaderH2Text = function() {
        var usrInput = $('#index-h2-input').val();
        self.indexContentObj.main.content1[0].indexMainContent1Row1Col2HeaderH2TagText = usrInput;
        self.$indexHeaderH2Tag.html(self.indexContentObj.main.content1[0].indexMainContent1Row1Col2HeaderH2TagText);
        $('#save-index-h2-btn').remove();
        self.$textAreaH2Index.remove();
        app.saveIndexToDB();
    }
    app.createHeaderH2Text = function() {
        $('#edit-index-h2-btn').remove();
        self.$indexHeaderH2Tag.append(self.editH2TextBtn);
    }
    self.createHeaderH2Text();
};