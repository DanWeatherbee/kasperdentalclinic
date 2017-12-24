// news Img 1 Src Controls =============================================

app.editNewsImg1 = function(
    editNewsImgSrcBtn1,
    saveNewsImgSrcBtn1,
    textAreaNewsImgSrc1
) {
    "use strict";
    var self = this;
    // Header Img Controls =============================================
    self.editNewsImgSrcBtn1 = '<br /><i type="button" class="fa fa-photo edit-btns" id="edit-news-img-src-btn1" ' +
        'onclick="app.editNewsImgSrc1()">' +
        ' img 1</i>';
    self.saveNewsImgSrcBtn1 = '<i type="button" class="fa fa-save edit-btns" id="save-news-img-src-btn1" ' +
        'onclick="app.saveNewsImgSrc1()"></i>';
    self.textAreaNewsImgSrc1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="news-img1-src-input">' +
        self.newsContentObj.main.content[0].newsImgSrc1 +
        '</textarea>';
    app.editNewsImgSrc1 = function() {
        if ($('#edit-news-img-src-btn1')) {
            $('#edit-news-img-src-btn1').remove();
        };
        $('#news-header-h1-tag').append(self.textAreaNewsImgSrc1);
        $('#news-header-h1-tag').append(self.saveNewsImgSrcBtn1);
    }
    app.saveNewsImgSrc1 = function() {
        var usrInput = $('#news-img1-src-input').val();
        self.newsContentObj.main.content[0].newsImgSrc1 = usrInput;
        self.newsContentObj.main.content[0].newsImg1 = '<img' +
            ' class="animated flipInY img-thumbnail img-responsive center-block" ' +
            'src="' +
            self.newsContentObj.main.content[0].newsImgSrc1 +
            '" id="news-img1" alt="' +
            self.newsContentObj.main.content[0].newsImgSrc1 +
            '">';
        $('#news-img1').remove();
        $('#news-header-h1-tag').append(
            self.newsContentObj.main.content[0].newsImg1
        );
        $('#save-news-img-src-btn1').remove();
        $('#news-img1-src-input').remove();
        app.saveNewsToDB();
    }
    app.createNewsImgSrc1 = function() {
        $('#edit-news-img-src-btn1').remove();
        $('#news-header-h1-tag').append(self.editNewsImgSrcBtn1);
    }
    self.createNewsImgSrc1();
};