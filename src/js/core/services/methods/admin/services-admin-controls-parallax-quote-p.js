/*
Written in a Object Oriented pattern OOP by Dan Weatherbee
 Header Parallax Quote Controls =============================================
*/
app.editServicesParallaxQuote = function(
    $servicesParallaxQuotePTag,
    editServicesParallaxQuotePTagText,
    saveServicesParallaxQuotePTagTextBtn,
    $saveServicesParallaxQuotePTagTextBtn,
    $textAreaParallaxQuoteServices
) {
    "use strict";
    var self = this;
    // Header Parallax Quote Controls =============================================
    self.$servicesParallaxQuotePTag = $('#services-main-row2-parallax-col1-p-tag');
    self.editServicesParallaxQuotePTagTextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-parallax-quote-p-text-btn" onclick="app.editParallaxQuotePText()"></i>';
    self.saveServicesParallaxQuotePTagTextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-parallax-quote-p-text-btn" onclick="app.saveParallaxQuotePText()"></i>';
    self.$saveServicesParallaxQuotePTagTextBtn = $('#save-Services-p-btn');
    self.textAreaParallaxQuoteServices = '<textarea class="form-control" rows="1" number="3" maxlength="150" ' +
        'id="services-p-input">' +
        self.servicesContentObj.main.content2[0].servicesMainContent2ParallaxRow2Col1PTagText +
        '</textarea>';
    self.$textAreaParallaxQuoteServices = $('#services-p-input');

    app.editParallaxQuotePText = function() {
        if ($('#edit-services-p-btn')) {
            $('#edit-services-p-btn').remove();
        };
        self.$servicesParallaxQuotePTag.append(self.textAreaParallaxQuoteServices);
        self.$servicesParallaxQuotePTag.append(self.saveServicesParallaxQuotePTagTextBtn);
    }
    app.saveParallaxQuotePText = function() {
        var usrInput = $('#services-p-input').val();
        self.servicesContentObj.main.content2[0].servicesMainContent2ParallaxRow2Col1PTagText = usrInput;
        self.$servicesParallaxQuotePTag.html(self.servicesContentObj.main.content2[0].servicesMainContent2ParallaxRow2Col1PTagText);
        $('#save-services-parallax-quote-p-text-btn').remove();
        self.$textAreaParallaxQuoteServices.remove();
        app.saveServicesToDB();
    }
    app.createParallaxQuotePText = function() {
        $('#edit-services-parallax-quote-p-text-btn').remove();
        self.$servicesParallaxQuotePTag.prepend(self.editServicesParallaxQuotePTagTextBtn);
    }
    self.createParallaxQuotePText();
};