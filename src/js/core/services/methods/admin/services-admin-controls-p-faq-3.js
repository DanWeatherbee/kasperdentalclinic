app.editServicesPFaq_3 = function(
    $servicesServicesPFaq_3Tag,
    editPFaq_3Text,
    savePFaq_3TextBtn,
    $savePFaq_3TextBtn,
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesServicesPFaq_3Tag = $('#services-collapsible-p-tag-faq-3');
    self.editPFaq_3TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-p-faq-3-btn" onclick="app.editServicesPFaq_3Text()"></i>';
    self.savePFaq_3TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-p-faq-3-btn" onclick="app.saveServicesPFaq_3Text()"></i>';
    self.$savePFaq_3TextBtn = $('#save-services-p-faq-3-btn');
    self.textAreaservicesPFaq_3 = '<textarea class="form-control" rows="1" number="3" maxlength="1000" ' +
        'id="services-p-faq-3-input">' +
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersPTextFaq3 +
        '</textarea>';
    app.editServicesPFaq_3Text = function() {
        if ($('#edit-services-p-faq-3-btn')) {
            $('#edit-services-p-faq-3-btn').remove();
        };
        // increment with each new control.
        $('#cd-faq-trigger-3').append(
            self.textAreaservicesPFaq_3,
            self.savePFaq_3TextBtn
        );
    }
    app.saveServicesPFaq_3Text = function() {
        var usrInput = $('#services-p-faq-3-input').val();
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersPTextFaq3 = usrInput;
        self.$servicesServicesPFaq_3Tag.html(self.servicesContentObj.main.content4[0].servicesCollapsibleContainersPTextFaq3);
        $('#save-services-p-faq-3-btn').remove();
        $('#services-p-faq-3-input').remove();
        app.saveServicesToDB();
    }
    app.createServicesPFaq_3Text = function() {
        $('#edit-services-p-faq-3-btn').remove();
        self.$servicesServicesPFaq_3Tag.append(self.editPFaq_3TextBtn);
    }
    self.createServicesPFaq_3Text();
};