/*
 news H3_2 Text Controls =============================================
 New Naming convention so we can clone the control,
  simply by incrementing the number on the end of every variable all at once.
*/
app.editNewsH3_2 = function(
    editNewsH3Text2,
    saveNewsH3Btn2,
    textAreaNewsH3_2
) {
    "use strict";
    var self = this;
    self.editNewsH3Btn2 = '<i type="button" class="fa fa-edit edit-btns" id="edit-news-h3-btn-2"' +
        ' onclick="app.editNewsH3Text2()"></i>';
    self.saveNewsH3Btn2 = '<i type="button" class="fa fa-save edit-btns" id="save-news-h3-btn-2"' +
        ' onclick="app.saveNewsH3Text2()"></i>';
    self.textAreaNewsH3_2 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="news-input-h3-2">' +
        self.newsContentObj.main.content[0].newsH3TagText2 +
        '</textarea>';

    app.editNewsH3Text2 = function() {
        if ($('#edit-news-h3-btn-2')) {
            $('#edit-news-h3-btn-2').remove();
        };

        $('#news-h3-tag2').append(
            self.textAreaNewsH3_2,
            self.saveNewsH3Btn2
        );
    }
    app.saveNewsH3Text2 = function() {
        var usrInput = $('#news-input-h3-2').val();
        self.newsContentObj.main.content[0].newsH3TagText2 = usrInput;
        $('#news-h3-tag2').html(
            self.newsContentObj.main.content[0].newsH3TagText2
        );
        $('#save-news-h3-btn-2').remove();
        $('#news-input-h3-2').remove();
        app.saveNewsToDB();
    }
    app.createNewsH3Text2 = function() {
        $('#edit-news-h3-btn-2').remove();
        $('#news-h3-tag2').append(self.editNewsH3Btn2);
    }
    self.createNewsH3Text2();
};