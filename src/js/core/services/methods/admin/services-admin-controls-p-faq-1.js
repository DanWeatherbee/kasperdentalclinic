app.editServicesPFaq_1 = function(
    $servicesServicesPFaq_1Tag,
    editPFaq_1Text,
    savePFaq_1TextBtn,
    $savePFaq_1TextBtn,
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesServicesPFaq_1Tag = $('#services-collapsible-p-tag-faq-1');
    self.editPFaq_1TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-p-faq-1-btn" onclick="app.editServicesPFaq_1Text()"></i>';
    self.savePFaq_1TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-p-faq-1-btn" onclick="app.saveServicesPFaq_1Text()"></i>';
    self.$savePFaq_1TextBtn = $('#save-services-p-faq-1-btn');
    self.textAreaservicesPFaq_1 = '<textarea class="form-control" rows="1" number="3" maxlength="1000" ' +
        'id="services-p-faq-1-input">' +
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersPTextFaq1 +
        '</textarea>';
    app.editServicesPFaq_1Text = function() {
        if ($('#edit-services-p-faq-1-btn')) {
            $('#edit-services-p-faq-1-btn').remove();
        };
         // increment with each new control.
        $('#cd-faq-trigger-1').append(
            self.textAreaservicesPFaq_1,
            self.savePFaq_1TextBtn
        );
    }
    app.saveServicesPFaq_1Text = function() {
        var usrInput = $('#services-p-faq-1-input').val();
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersPTextFaq1 = usrInput;
        self.$servicesServicesPFaq_1Tag.html(self.servicesContentObj.main.content4[0].servicesCollapsibleContainersPTextFaq1);
        $('#save-services-p-faq-1-btn').remove();
        $('#services-p-faq-1-input').remove();
        app.saveServicesToDB();
    }
    app.createServicesPFaq_1Text = function() {
        $('#edit-services-p-faq-1-btn').remove();
        self.$servicesServicesPFaq_1Tag.append(self.editPFaq_1TextBtn);
    }
    self.createServicesPFaq_1Text();
};