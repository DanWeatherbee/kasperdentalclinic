
app.editServicesMapH2 = function(
    $servicesServicesMapH2Tag,
    editMapH2Text,
    saveMapH2TextBtn,
    $saveMapH2TextBtn,
    $textAreaMapH2services
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesServicesMapH2Tag = $('#services-map-h2-tag');
    self.editMapH2TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-map-h2-btn" onclick="app.editServicesMapH2Text()"></i>';
    self.saveMapH2TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-map-h2-btn" onclick="app.saveServicesMapH2Text()"></i>';
    self.$saveMapH2TextBtn = $('#save-services-map-h2-btn');
    self.textAreaservicesMapH2 = '<textarea class="form-control" rows="1" number="3" maxlength="150" ' +
        'id="services-map-h2-input">' +
        self.servicesContentObj.main.content4[0].servicesMapH2Text +
        '</textarea>';
    self.$textAreaMapH2services = $('#services-map-h2-input');
    app.editServicesMapH2Text = function() {
        if ($('#edit-services-map-h2-btn')) {
            $('#edit-services-map-h2-btn').remove();
        };
        self.$servicesServicesMapH2Tag.append(self.textAreaservicesMapH2);
        self.$servicesServicesMapH2Tag.append(self.saveMapH2TextBtn);
    }
    app.saveServicesMapH2Text = function() {
        var usrInput = $('#services-map-h2-input').val();
        self.servicesContentObj.main.content4[0].servicesMapH2Text = usrInput;
        self.$servicesServicesMapH2Tag.html(self.servicesContentObj.main.content4[0].servicesMapH2Text);
        $('#save-services-map-h2-btn').remove();
        self.$textAreaMapH2services.remove();
        app.saveServicesToDB();
    }
    app.createServicesMapH2Text = function() {
        $('#edit-services-map-h2-btn').remove();
        self.$servicesServicesMapH2Tag.append(self.editMapH2TextBtn);
    }
    self.createServicesMapH2Text();
};