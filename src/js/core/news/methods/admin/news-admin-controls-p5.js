/*
 news P_5 Text Controls =============================================
 New Naming convention so we can clone the control,
  simply by incrementing the number on the end of every variable all at once.
*/
app.editNewsP_5 = function(
    editNewsPText5,
    saveNewsPBtn5,
    textAreaNewsP_5
) {
    "use strict";
    var self = this;
    self.editNewsPBtn5 = '<i type="button" class="fa fa-edit edit-btns" id="edit-news-p-btn-5"' +
        ' onclick="app.editNewsPText5()"></i>';
    self.saveNewsPBtn5 = '<i type="button" class="fa fa-save edit-btns" id="save-news-p-btn-5"' +
        ' onclick="app.saveNewsPText5()"></i>';
    self.textAreaNewsP_5 = '<textarea class="form-control textarea-style" rows="1" number="5" maxlength="1000" ' +
        'id="news-input-p-5">' +
        self.newsContentObj.main.content[0].newsPTagText5 +
        '</textarea>';

    app.editNewsPText5 = function() {
        if ($('#edit-news-p-btn-5')) {
            $('#edit-news-p-btn-5').remove();
        };

        $('#news-p-tag5').append(
            self.textAreaNewsP_5,
            self.saveNewsPBtn5
        );
    }
    app.saveNewsPText5 = function() {
        var usrInput = $('#news-input-p-5').val();
        self.newsContentObj.main.content[0].newsPTagText5 = usrInput;
        $('#news-p-tag5').html(
            self.newsContentObj.main.content[0].newsPTagText5
        );
        $('#save-news-p-btn-5').remove();
        $('#news-input-p-5').remove();
        app.saveNewsToDB();
    }
    app.createNewsPText5 = function() {
        $('#edit-news-p-btn-5').remove();
        $('#news-p-tag5').append(self.editNewsPBtn5);
    }
    self.createNewsPText5();
};