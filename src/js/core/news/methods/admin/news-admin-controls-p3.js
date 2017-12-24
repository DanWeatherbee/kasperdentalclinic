/*
 news P_3 Text Controls =============================================
 New Naming convention so we can clone the control,
  simply by incrementing the number on the end of every variable all at once.
*/
app.editNewsP_3 = function(
    editNewsPText3,
    saveNewsPBtn3,
    textAreaNewsP_3
) {
    "use strict";
    var self = this;
    self.editNewsPBtn3 = '<i type="button" class="fa fa-edit edit-btns" id="edit-news-p-btn-3"' +
        ' onclick="app.editNewsPText3()"></i>';
    self.saveNewsPBtn3 = '<i type="button" class="fa fa-save edit-btns" id="save-news-p-btn-3"' +
        ' onclick="app.saveNewsPText3()"></i>';
    self.textAreaNewsP_3 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="news-input-p-3">' +
        self.newsContentObj.main.content[0].newsPTagText3 +
        '</textarea>';

    app.editNewsPText3 = function() {
        if ($('#edit-news-p-btn-3')) {
            $('#edit-news-p-btn-3').remove();
        };

        $('#news-p-tag3').append(
            self.textAreaNewsP_3,
            self.saveNewsPBtn3
        );
    }
    app.saveNewsPText3 = function() {
        var usrInput = $('#news-input-p-3').val();
        self.newsContentObj.main.content[0].newsPTagText3 = usrInput;
        $('#news-p-tag3').html(
            self.newsContentObj.main.content[0].newsPTagText3
        );
        $('#save-news-p-btn-3').remove();
        $('#news-input-p-3').remove();
        app.saveNewsToDB();
    }
    app.createNewsPText3 = function() {
        $('#edit-news-p-btn-3').remove();
        $('#news-p-tag3').append(self.editNewsPBtn3);
    }
    self.createNewsPText3();
};