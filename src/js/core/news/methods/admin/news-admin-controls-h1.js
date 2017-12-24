/*
 news Header H1 Text Controls =============================================
*/
app.editNewsHeaderH1 = function(
    editNewsHeaderH1Text,
    saveNewsHeaderH1TextBtn,
    textAreaNewsHeaderH1
) {
    "use strict";
    var self = this;
    self.editNewsHeaderH1TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-news-header-h1-btn"' +
        ' onclick="app.editNewsHeaderH1Text()"></i>';
    self.saveNewsHeaderH1TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-news-header-h1-btn"' +
        ' onclick="app.saveNewsHeaderH1Text()"></i>';
    self.textAreaNewsHeaderH1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="news-header-h1-input">' +
        self.newsContentObj.main.content[0].newsHeaderH1TagText +
        '</textarea>';

    app.editNewsHeaderH1Text = function() {
        if ($('#edit-news-header-h1-btn')) {
            $('#edit-news-header-h1-btn').remove();
        };

        $('#news-header-h1-tag').append(
            self.textAreaNewsHeaderH1,
            self.saveNewsHeaderH1TextBtn
        );
    }
    app.saveNewsHeaderH1Text = function() {
        var usrInput = $('#news-header-h1-input').val();
        self.newsContentObj.main.content[0].newsHeaderH1TagText = usrInput;
        $('#news-header-h1-tag').html(
            self.newsContentObj.main.content[0].newsHeaderH1TagText
        );
        $('#save-news-header-h1-btn').remove();
        $('#news-header-h1-input').remove();
        app.saveNewsToDB();
    }
    app.createNewsHeaderH1Text = function() {
        $('#edit-news-header-h1-btn').remove();
        $('#news-header-h1-tag').append(self.editNewsHeaderH1TextBtn);
    }
    self.createNewsHeaderH1Text();
};