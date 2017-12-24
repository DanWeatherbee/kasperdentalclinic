/*
 news P_4 Text Controls =============================================
 New Naming convention so we can clone the control,
  simply by incrementing the number on the end of every variable all at once.
*/
app.editNewsP_4 = function(
    editNewsPText4,
    saveNewsPBtn4,
    textAreaNewsP_4
) {
    "use strict";
    var self = this;
    self.editNewsPBtn4 = '<i type="button" class="fa fa-edit edit-btns" id="edit-news-p-btn-4"' +
        ' onclick="app.editNewsPText4()"></i>';
    self.saveNewsPBtn4 = '<i type="button" class="fa fa-save edit-btns" id="save-news-p-btn-4"' +
        ' onclick="app.saveNewsPText4()"></i>';
    self.textAreaNewsP_4 = '<textarea class="form-control textarea-style" rows="1" number="4" maxlength="1000" ' +
        'id="news-input-p-4">' +
        self.newsContentObj.main.content[0].newsPTagText4 +
        '</textarea>';

    app.editNewsPText4 = function() {
        if ($('#edit-news-p-btn-4')) {
            $('#edit-news-p-btn-4').remove();
        };

        $('#news-p-tag4').append(
            self.textAreaNewsP_4,
            self.saveNewsPBtn4
        );
    }
    app.saveNewsPText4 = function() {
        var usrInput = $('#news-input-p-4').val();
        self.newsContentObj.main.content[0].newsPTagText4 = usrInput;
        $('#news-p-tag4').html(
            self.newsContentObj.main.content[0].newsPTagText4
        );
        $('#save-news-p-btn-4').remove();
        $('#news-input-p-4').remove();
        app.saveNewsToDB();
    }
    app.createNewsPText4 = function() {
        $('#edit-news-p-btn-4').remove();
        $('#news-p-tag4').append(self.editNewsPBtn4);
    }
    self.createNewsPText4();
};