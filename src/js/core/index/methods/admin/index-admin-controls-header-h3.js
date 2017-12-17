/*
Written in a Object Oriented pattern OOP by Dan Weatherbee
 Header H2 Text Controls =============================================
*/
app.editIndexHeaderH3Text = function(
    $indexHeaderH3Tag,
    editH3Text,
    saveH3TextBtn,
    $saveH3TextBtn,
    $textAreaH3Index
) {
    "use strict";
    var self = this;
    // Header H2 Controls =============================================
    self.$indexHeaderH3Tag = $('#index-main-row1-col2-header-h3-tag');
    self.editH3TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-index-h3-btn" onclick="app.editHeaderH3Text()"></i>';
    self.saveH3TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-index-h3-btn" onclick="app.saveHeaderH3Text()"></i>';
    self.$saveH3TextBtn = $('#save-index-h3-btn');
    self.textAreaIndexH3 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="150" ' +
        'id="index-h3-input">' +
        self.indexContentObj.main.content1[0].indexMainContent1Row1Col2HeaderH3TagText +
        '</textarea>';
    self.$textAreaH3Index = $('#index-h3-input');

    app.editHeaderH3Text = function() {
        if ($('#edit-index-h3-btn')) {
            $('#edit-index-h3-btn').remove();
        };
        self.$indexHeaderH3Tag.append(self.textAreaIndexH3);
        self.$indexHeaderH3Tag.append(self.saveH3TextBtn);
    }
    app.saveHeaderH3Text = function() {
        var usrInput = $('#index-h3-input').val();
        self.indexContentObj.main.content1[0].indexMainContent1Row1Col2HeaderH3TagText = usrInput;
        self.$indexHeaderH3Tag.html(self.indexContentObj.main.content1[0].indexMainContent1Row1Col2HeaderH3TagText);
        $('#save-index-h3-btn').remove();
        self.$textAreaH3Index.remove();
        app.saveIndexToDB();
    }
    app.createHeaderH3Text = function() {
        $('#edit-index-h3-btn').remove();
        self.$indexHeaderH3Tag.prepend(self.editH3TextBtn);
    }
    self.createHeaderH3Text();
};