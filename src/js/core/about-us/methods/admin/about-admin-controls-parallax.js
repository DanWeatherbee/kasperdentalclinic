// About Parallax Quote Controls =============================================
app.editAboutParallaxQuote = function(
    editAboutParallaxQuotePTagText,
    saveAboutParallaxQuotePTagTextBtn,
    textAreaAboutParallaxQuote
) {
    "use strict";
    var self = this;
    self.editAboutParallaxQuotePTagTextBtn = '<i type="button" class="fa fa-edit edit-btns" ' +
        'id="edit-about-parallax-quote-p-text-btn" onclick="app.editParallaxQuotePText()"></i>';
    self.saveAboutParallaxQuotePTagTextBtn = '<i type="button" class="fa fa-save edit-btns" ' +
        'id="save-about -parallax-quote-p-text-btn" onclick="app.saveParallaxQuotePText()"></i>';
    self.textAreaAboutParallaxQuote = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="about-parallax-p-input">' +
        self.aboutContentObj.main.content1[0].aboutMainContent1ParallaxQuoteBoxPTagText +
        '</textarea>';

    app.editParallaxQuotePText = function() {
        if ($('#edit-about-p-btn')) {
            $('#edit-about-p-btn').remove();
        };
        $('#about-main-content1-parallax-quote-box-p-tag').append(self.textAreaAboutParallaxQuote);
        $('#about-main-content1-parallax-quote-box-p-tag').append(self.saveAboutParallaxQuotePTagTextBtn);
    }
    app.saveParallaxQuotePText = function() {
        var usrInput = $('#about-parallax-p-input').val();
        self.aboutContentObj.main.content1[0].aboutMainContent1ParallaxQuoteBoxPTagText = usrInput;
        $('#about-main-content1-parallax-quote-box-p-tag').html(self.aboutContentObj.main.content1[0].aboutMainContent1ParallaxQuoteBoxPTagText);
        $('#save-about-parallax-quote-p-text-btn').remove();
        $('#about-parallax-p-input').remove();
        app.saveAboutToDB();
    }
    app.createParallaxQuotePText = function() {
        $('#edit-about-parallax-quote-p-text-btn').remove();
        $('#about-main-content1-parallax-quote-box-p-tag').prepend(self.editAboutParallaxQuotePTagTextBtn);
    }
    self.createParallaxQuotePText();
};

// TODO $('#about-main-parallax-container').css('background', 'url('css/cloud.jpg') no-repeat center center');