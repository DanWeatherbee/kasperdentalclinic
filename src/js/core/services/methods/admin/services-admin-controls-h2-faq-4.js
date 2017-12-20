
app.editServicesH2Faq_4 = function(
    $servicesServicesH2Faq_4Tag,
    editH2Faq_4Text,
    saveH2Faq_4TextBtn,
    $saveH2Faq_4TextBtn,
    $textAreaH2Faq_4services
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesServicesH2Faq_4Tag = $('#services-collapsible-h2-faq-4');
    self.editH2Faq_4TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-h2-faq-4-btn" onclick="app.editServicesH2Faq_4Text()"></i>';
    self.saveH2Faq_4TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-h2-faq-4-btn" onclick="app.saveServicesH2Faq_4Text()"></i>';
    self.$saveH2Faq_4TextBtn = $('#save-services-h2-faq-4-btn');
    self.textAreaservicesH2Faq_4 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="services-h2-faq-4-input">' +
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersH2TextFaq4 +
        '</textarea>';
    self.$textAreaH2Faq_4services = $('#services-h2-faq-4-input');
    app.editServicesH2Faq_4Text = function() {
        if ($('#edit-services-h2-faq-4-btn')) {
            $('#edit-services-h2-faq-4-btn').remove();
        };
        self.$servicesServicesH2Faq_4Tag.append(self.textAreaservicesH2Faq_4);
        self.$servicesServicesH2Faq_4Tag.append(self.saveH2Faq_4TextBtn);
    }
    app.saveServicesH2Faq_4Text = function() {
        var usrInput = $('#services-h2-faq-4-input').val();
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersH2TextFaq4 = usrInput;
        self.$servicesServicesH2Faq_4Tag.html(self.servicesContentObj.main.content4[0].servicesCollapsibleContainersH2TextFaq4);
        $('#save-services-h2-faq-4-btn').remove();
        self.$textAreaH2Faq_4services.remove();
        app.saveServicesToDB();
    }
    app.createServicesH2Faq_4Text = function() {
        $('#edit-services-h2-faq-4-btn').remove();
        self.$servicesServicesH2Faq_4Tag.append(self.editH2Faq_4TextBtn);
    }
    self.createServicesH2Faq_4Text();
};