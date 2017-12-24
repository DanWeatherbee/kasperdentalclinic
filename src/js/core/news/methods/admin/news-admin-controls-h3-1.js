/*
 news H3_1 Text Controls =============================================
 New Naming convention so we can clone the control,
  simply by incrementing the number on the end of every variable all at once.
*/
app.editNewsH3_1 = function(
    editNewsH3Text1,
    saveNewsH3Btn1,
    textAreaNewsH3_1
) {
    "use strict";
    var self = this;
    self.editNewsH3Btn1 = '<i type="button" class="fa fa-edit edit-btns" id="edit-news-h3-btn-1"' +
        ' onclick="app.editNewsH3Text1()"></i>';
    self.saveNewsH3Btn1 = '<i type="button" class="fa fa-save edit-btns" id="save-news-h3-btn-1"' +
        ' onclick="app.saveNewsH3Text1()"></i>';
    self.textAreaNewsH3_1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="news-input-h3-1">' +
        self.newsContentObj.main.content[0].newsH3TagText1 +
        '</textarea>';

    app.editNewsH3Text1 = function() {
        if ($('#edit-news-h3-btn-1')) {
            $('#edit-news-h3-btn-1').remove();
        };

        $('#news-h3-tag1').append(
            self.textAreaNewsH3_1,
            self.saveNewsH3Btn1
        );
    }
    app.saveNewsH3Text1 = function() {
        var usrInput = $('#news-input-h3-1').val();
        self.newsContentObj.main.content[0].newsH3TagText1 = usrInput;
        $('#news-h3-tag1').html(
            self.newsContentObj.main.content[0].newsH3TagText1
        );
        $('#save-news-h3-btn-1').remove();
        $('#news-input-h3-1').remove();
        app.saveNewsToDB();
    }
    app.createNewsH3Text1 = function() {
        $('#edit-news-h3-btn-1').remove();
        $('#news-h3-tag1').append(self.editNewsH3Btn1);
    }
    self.createNewsH3Text1();
};