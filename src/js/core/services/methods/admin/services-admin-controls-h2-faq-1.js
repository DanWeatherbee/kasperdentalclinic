
app.editServicesH2Faq_1 = function(
    $servicesServicesH2Faq_1Tag,
    editH2Faq_1Text,
    saveH2Faq_1TextBtn,
    $saveH2Faq_1TextBtn,
    $textAreaH2Faq_1services
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesServicesH2Faq_1Tag = $('#services-collapsible-h2-faq-1');
    self.editH2Faq_1TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-h2-faq-1-btn" onclick="app.editServicesH2Faq_1Text()"></i>';
    self.saveH2Faq_1TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-h2-faq-1-btn" onclick="app.saveServicesH2Faq_1Text()"></i>';
    self.$saveH2Faq_1TextBtn = $('#save-services-h2-faq-1-btn');
    self.textAreaservicesH2Faq_1 = '<textarea class="form-control" rows="1" number="3" maxlength="150" ' +
        'id="services-h2-faq-1-input">' +
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersH2TextFaq1 +
        '</textarea>';
    self.$textAreaH2Faq_1services = $('#services-h2-faq-1-input');
    app.editServicesH2Faq_1Text = function() {
        if ($('#edit-services-h2-faq-1-btn')) {
            $('#edit-services-h2-faq-1-btn').remove();
        };
        self.$servicesServicesH2Faq_1Tag.append(self.textAreaservicesH2Faq_1);
        self.$servicesServicesH2Faq_1Tag.append(self.saveH2Faq_1TextBtn);
    }
    app.saveServicesH2Faq_1Text = function() {
        var usrInput = $('#services-h2-faq-1-input').val();
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersH2TextFaq1 = usrInput;
        self.$servicesServicesH2Faq_1Tag.html(self.servicesContentObj.main.content4[0].servicesCollapsibleContainersH2TextFaq1);
        $('#save-services-h2-faq-1-btn').remove();
        self.$textAreaH2Faq_1services.remove();
        app.saveServicesToDB();
    }
    app.createServicesH2Faq_1Text = function() {
        $('#edit-services-h2-faq-1-btn').remove();
        self.$servicesServicesH2Faq_1Tag.append(self.editH2Faq_1TextBtn);
    }
    self.createServicesH2Faq_1Text();
};