app.editServicesPFaq_2 = function(
    $servicesServicesPFaq_2Tag,
    editPFaq_2Text,
    savePFaq_2TextBtn,
    $savePFaq_2TextBtn,
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesServicesPFaq_2Tag = $('#services-collapsible-p-tag-faq-2');
    self.editPFaq_2TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-p-faq-2-btn" onclick="app.editServicesPFaq_2Text()"></i>';
    self.savePFaq_2TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-p-faq-2-btn" onclick="app.saveServicesPFaq_2Text()"></i>';
    self.$savePFaq_2TextBtn = $('#save-services-p-faq-2-btn');
    self.textAreaservicesPFaq_2 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="services-p-faq-2-input">' +
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersPTextFaq2 +
        '</textarea>';
    app.editServicesPFaq_2Text = function() {
        if ($('#edit-services-p-faq-2-btn')) {
            $('#edit-services-p-faq-2-btn').remove();
        };
        // increment with each new control.
        $('#cd-faq-trigger-2').append(
            self.textAreaservicesPFaq_2,
            self.savePFaq_2TextBtn
        );
    }
    app.saveServicesPFaq_2Text = function() {
        var usrInput = $('#services-p-faq-2-input').val();
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersPTextFaq2 = usrInput;
        self.$servicesServicesPFaq_2Tag.html(self.servicesContentObj.main.content4[0].servicesCollapsibleContainersPTextFaq2);
        $('#save-services-p-faq-2-btn').remove();
        $('#services-p-faq-2-input').remove();
        app.saveServicesToDB();
    }
    app.createServicesPFaq_2Text = function() {
        $('#edit-services-p-faq-2-btn').remove();
        self.$servicesServicesPFaq_2Tag.append(self.editPFaq_2TextBtn);
    }
    self.createServicesPFaq_2Text();
};