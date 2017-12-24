/*
 news P_2 Text Controls =============================================
 New Naming convention so we can clone the control,
  simply by incrementing the number on the end of every variable all at once.
*/
app.editNewsP_2 = function(
    editNewsPText2,
    saveNewsPBtn2,
    textAreaNewsP_2
) {
    "use strict";
    var self = this;
    self.editNewsPBtn2 = '<i type="button" class="fa fa-edit edit-btns" id="edit-news-p-btn-2"' +
        ' onclick="app.editNewsPText2()"></i>';
    self.saveNewsPBtn2 = '<i type="button" class="fa fa-save edit-btns" id="save-news-p-btn-2"' +
        ' onclick="app.saveNewsPText2()"></i>';
    self.textAreaNewsP_2 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="news-input-p-2">' +
        self.newsContentObj.main.content[0].newsPTagText2 +
        '</textarea>';

    app.editNewsPText2 = function() {
        if ($('#edit-news-p-btn-2')) {
            $('#edit-news-p-btn-2').remove();
        };

        $('#news-p-tag2').append(
            self.textAreaNewsP_2,
            self.saveNewsPBtn2
        );
    }
    app.saveNewsPText2 = function() {
        var usrInput = $('#news-input-p-2').val();
        self.newsContentObj.main.content[0].newsPTagText2 = usrInput;
        $('#news-p-tag2').html(
            self.newsContentObj.main.content[0].newsPTagText2
        );
        $('#save-news-p-btn-2').remove();
        $('#news-input-p-2').remove();
        app.saveNewsToDB();
    }
    app.createNewsPText2 = function() {
        $('#edit-news-p-btn-2').remove();
        $('#news-p-tag2').append(self.editNewsPBtn2);
    }
    self.createNewsPText2();
};