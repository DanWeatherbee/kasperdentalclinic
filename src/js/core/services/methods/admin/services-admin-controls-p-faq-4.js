app.editServicesPFaq_4 = function(
    $servicesServicesPFaq_4Tag,
    editPFaq_4Text,
    savePFaq_4TextBtn,
    $savePFaq_4TextBtn,
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesServicesPFaq_4Tag = $('#services-collapsible-p-tag-faq-4');
    self.editPFaq_4TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-p-faq-4-btn" onclick="app.editServicesPFaq_4Text()"></i>';
    self.savePFaq_4TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-p-faq-4-btn" onclick="app.saveServicesPFaq_4Text()"></i>';
    self.$savePFaq_4TextBtn = $('#save-services-p-faq-4-btn');
    self.textAreaservicesPFaq_4 = '<textarea class="form-control" rows="1" number="3" maxlength="1000" ' +
        'id="services-p-faq-4-input">' +
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersPTextFaq4 +
        '</textarea>';
    app.editServicesPFaq_4Text = function() {
        if ($('#edit-services-p-faq-4-btn')) {
            $('#edit-services-p-faq-4-btn').remove();
        };
        // increment with each new control.
        $('#cd-faq-trigger-4').append(
            self.textAreaservicesPFaq_4,
            self.savePFaq_4TextBtn
        );
    }
    app.saveServicesPFaq_4Text = function() {
        var usrInput = $('#services-p-faq-4-input').val();
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersPTextFaq4 = usrInput;
        self.$servicesServicesPFaq_4Tag.html(self.servicesContentObj.main.content4[0].servicesCollapsibleContainersPTextFaq4);
        $('#save-services-p-faq-4-btn').remove();
        $('#services-p-faq-4-input').remove();
        app.saveServicesToDB();
    }
    app.createServicesPFaq_4Text = function() {
        $('#edit-services-p-faq-4-btn').remove();
        self.$servicesServicesPFaq_4Tag.append(self.editPFaq_4TextBtn);
    }
    self.createServicesPFaq_4Text();
};