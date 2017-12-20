
app.editServicesH2Faq_2 = function(
    $servicesServicesH2Faq_2Tag,
    editH2Faq_2Text,
    saveH2Faq_2TextBtn,
    $saveH2Faq_2TextBtn,
    $textAreaH2Faq_2services
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesServicesH2Faq_2Tag = $('#services-collapsible-h2-faq-2');
    self.editH2Faq_2TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-h2-faq-2-btn" onclick="app.editServicesH2Faq_2Text()"></i>';
    self.saveH2Faq_2TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-h2-faq-2-btn" onclick="app.saveServicesH2Faq_2Text()"></i>';
    self.$saveH2Faq_2TextBtn = $('#save-services-h2-faq-2-btn');
    self.textAreaservicesH2Faq_2 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="services-h2-faq-2-input">' +
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersH2TextFaq2 +
        '</textarea>';
    self.$textAreaH2Faq_2services = $('#services-h2-faq-2-input');
    app.editServicesH2Faq_2Text = function() {
        if ($('#edit-services-h2-faq-2-btn')) {
            $('#edit-services-h2-faq-2-btn').remove();
        };
        self.$servicesServicesH2Faq_2Tag.append(self.textAreaservicesH2Faq_2);
        self.$servicesServicesH2Faq_2Tag.append(self.saveH2Faq_2TextBtn);
    }
    app.saveServicesH2Faq_2Text = function() {
        var usrInput = $('#services-h2-faq-2-input').val();
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersH2TextFaq2 = usrInput;
        self.$servicesServicesH2Faq_2Tag.html(self.servicesContentObj.main.content4[0].servicesCollapsibleContainersH2TextFaq2);
        $('#save-services-h2-faq-2-btn').remove();
        self.$textAreaH2Faq_2services.remove();
        app.saveServicesToDB();
    }
    app.createServicesH2Faq_2Text = function() {
        $('#edit-services-h2-faq-2-btn').remove();
        self.$servicesServicesH2Faq_2Tag.append(self.editH2Faq_2TextBtn);
    }
    self.createServicesH2Faq_2Text();
};