/*
Written in a Object Oriented pattern OOP by Dan Weatherbee
 Header Parallax Quote Controls =============================================
*/
app.editIndexParallaxQuote = function(
    $indexParallaxQuotePTag,
    editParallaxQuotePTagText,
    saveParallaxQuotePTagTextBtn,
    $saveParallaxQuotePTagTextBtn,
    $textAreaParallaxQuoteIndex
) {
    "use strict";
    var self = this;
    // Header Parallax Quote Controls =============================================
    self.$indexParallaxQuotePTag = $('#index-main-row2-parallax-col1-tag');
    self.editParallaxQuotePTagTextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-index-parallax-quote-p-text-btn" onclick="app.editHeaderParallaxQuotePText()"></i>';
    self.saveParallaxQuotePTagTextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-index-parallax-quote-p-text-btn" onclick="app.saveHeaderParallaxQuotePText()"></i>';
    self.$saveParallaxQuotePTagTextBtn = $('#save-index-p-btn');
    self.textAreaParallaxQuoteIndex = '<textarea class="form-control" rows="1" number="3" maxlength="150" ' +
        'id="index-p-input">' +
        self.indexContentObj.main.content2[0].indexMainContent2ParallaxRow2Col1PTagText +
        '</textarea>';
    self.$textAreaParallaxQuoteIndex = $('#index-p-input');

    app.editHeaderParallaxQuotePText = function() {
        if ($('#edit-index-p-btn')) {
            $('#edit-index-p-btn').remove();
        };
        self.$indexParallaxQuotePTag.append(self.textAreaParallaxQuoteIndex);
        self.$indexParallaxQuotePTag.append(self.saveParallaxQuotePTagTextBtn);
    }
    app.saveHeaderParallaxQuotePText = function() {
        var usrInput = $('#index-p-input').val();
        self.indexContentObj.main.content2[0].indexMainContent2ParallaxRow2Col1PTagText = usrInput;
        self.$indexParallaxQuotePTag.html(self.indexContentObj.main.content2[0].indexMainContent2ParallaxRow2Col1PTagText);
        $('#save-index-parallax-quote-p-text-btn').remove();
        self.$textAreaParallaxQuoteIndex.remove();
        app.saveIndexToDB();
    }
    app.createHeaderParallaxQuotePText = function() {
        $('#edit-index-parallax-quote-p-text-btn').remove();
        self.$indexParallaxQuotePTag.prepend(self.editParallaxQuotePTagTextBtn);
    }
    self.createHeaderParallaxQuotePText();
};