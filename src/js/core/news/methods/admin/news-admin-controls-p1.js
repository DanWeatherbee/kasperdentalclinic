/*
 news P_1 Text Controls =============================================
 New Naming convention so we can clone the control,
  simply by incrementing the number on the end of every variable all at once.
*/
app.editNewsP_1 = function(
    editNewsPText1,
    saveNewsPBtn1,
    textAreaNewsP_1
) {
    "use strict";
    var self = this;
    self.editNewsPBtn1 = '<i type="button" class="fa fa-edit edit-btns" id="edit-news-p-btn-1"' +
        ' onclick="app.editNewsPText1()"></i>';
    self.saveNewsPBtn1 = '<i type="button" class="fa fa-save edit-btns" id="save-news-p-btn-1"' +
        ' onclick="app.saveNewsPText1()"></i>';
    self.textAreaNewsP_1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="news-input-p-1">' +
        self.newsContentObj.main.content[0].newsPTagText1 +
        '</textarea>';

    app.editNewsPText1 = function() {
        if ($('#edit-news-p-btn-1')) {
            $('#edit-news-p-btn-1').remove();
        };

        $('#news-p-tag1').append(
            self.textAreaNewsP_1,
            self.saveNewsPBtn1
        );
    }
    app.saveNewsPText1 = function() {
        var usrInput = $('#news-input-p-1').val();
        self.newsContentObj.main.content[0].newsPTagText1 = usrInput;
        $('#news-p-tag1').html(
            self.newsContentObj.main.content[0].newsPTagText1
        );
        $('#save-news-p-btn-1').remove();
        $('#news-input-p-1').remove();
        app.saveNewsToDB();
    }
    app.createNewsPText1 = function() {
        $('#edit-news-p-btn-1').remove();
        $('#news-p-tag1').append(self.editNewsPBtn1);
    }
    self.createNewsPText1();
};