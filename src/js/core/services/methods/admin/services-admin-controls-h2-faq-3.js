
app.editServicesH2Faq_3 = function(
    $servicesServicesH2Faq_3Tag,
    editH2Faq_3Text,
    saveH2Faq_3TextBtn,
    $saveH2Faq_3TextBtn,
    $textAreaH2Faq_3services
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesServicesH2Faq_3Tag = $('#services-collapsible-h2-faq-3');
    self.editH2Faq_3TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-h2-faq-3-btn" onclick="app.editServicesH2Faq_3Text()"></i>';
    self.saveH2Faq_3TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-h2-faq-3-btn" onclick="app.saveServicesH2Faq_3Text()"></i>';
    self.$saveH2Faq_3TextBtn = $('#save-services-h2-faq-3-btn');
    self.textAreaservicesH2Faq_3 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="services-h2-faq-3-input">' +
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersH2TextFaq3 +
        '</textarea>';
    self.$textAreaH2Faq_3services = $('#services-h2-faq-3-input');
    app.editServicesH2Faq_3Text = function() {
        if ($('#edit-services-h2-faq-3-btn')) {
            $('#edit-services-h2-faq-3-btn').remove();
        };
        self.$servicesServicesH2Faq_3Tag.append(self.textAreaservicesH2Faq_3);
        self.$servicesServicesH2Faq_3Tag.append(self.saveH2Faq_3TextBtn);
    }
    app.saveServicesH2Faq_3Text = function() {
        var usrInput = $('#services-h2-faq-3-input').val();
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersH2TextFaq3 = usrInput;
        self.$servicesServicesH2Faq_3Tag.html(self.servicesContentObj.main.content4[0].servicesCollapsibleContainersH2TextFaq3);
        $('#save-services-h2-faq-3-btn').remove();
        self.$textAreaH2Faq_3services.remove();
        app.saveServicesToDB();
    }
    app.createServicesH2Faq_3Text = function() {
        $('#edit-services-h2-faq-3-btn').remove();
        self.$servicesServicesH2Faq_3Tag.append(self.editH2Faq_3TextBtn);
    }
    self.createServicesH2Faq_3Text();
};