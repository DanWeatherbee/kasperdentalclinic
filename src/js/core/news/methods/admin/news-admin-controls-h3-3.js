/*
 news H3_3 Text Controls =============================================
 New Naming convention so we can clone the control,
  simply by incrementing the number on the end of every variable all at once.
*/
app.editNewsH3_3 = function(
    editNewsH3Text3,
    saveNewsH3Btn3,
    textAreaNewsH3_3
) {
    "use strict";
    var self = this;
    self.editNewsH3Btn3 = '<i type="button" class="fa fa-edit edit-btns" id="edit-news-h3-btn-3"' +
        ' onclick="app.editNewsH3Text3()"></i>';
    self.saveNewsH3Btn3 = '<i type="button" class="fa fa-save edit-btns" id="save-news-h3-btn-3"' +
        ' onclick="app.saveNewsH3Text3()"></i>';
    self.textAreaNewsH3_3 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="news-input-h3-3">' +
        self.newsContentObj.main.content[0].newsH3TagText3 +
        '</textarea>';

    app.editNewsH3Text3 = function() {
        if ($('#edit-news-h3-btn-3')) {
            $('#edit-news-h3-btn-3').remove();
        };

        $('#news-h3-tag3').append(
            self.textAreaNewsH3_3,
            self.saveNewsH3Btn3
        );
    }
    app.saveNewsH3Text3 = function() {
        var usrInput = $('#news-input-h3-3').val();
        self.newsContentObj.main.content[0].newsH3TagText3 = usrInput;
        $('#news-h3-tag3').html(
            self.newsContentObj.main.content[0].newsH3TagText3
        );
        $('#save-news-h3-btn-3').remove();
        $('#news-input-h3-3').remove();
        app.saveNewsToDB();
    }
    app.createNewsH3Text3 = function() {
        $('#edit-news-h3-btn-3').remove();
        $('#news-h3-tag3').append(self.editNewsH3Btn3);
    }
    self.createNewsH3Text3();
};