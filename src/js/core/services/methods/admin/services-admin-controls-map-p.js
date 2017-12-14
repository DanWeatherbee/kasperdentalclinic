
app.editServicesMapP = function(
    $servicesServicesMapPTag,
    editMapPText,
    saveMapPTextBtn,
    $saveMapPTextBtn,
    $textAreaMapPservices
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesServicesMapPTag = $('#services-map-p-tag');
    self.editMapPTextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-map-p-btn" onclick="app.editServicesMapPText()"></i>';
    self.saveMapPTextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-map-p-btn" onclick="app.saveServicesMapPText()"></i>';
    self.$saveMapPTextBtn = $('#save-services-map-p-btn');
    self.textAreaservicesMapP = '<textarea class="form-control" rows="1" number="3" maxlength="150" ' +
        'id="services-map-p-input">' +
        self.servicesContentObj.main.content4[0].servicesMapPText +
        '</textarea>';
    self.$textAreaMapPservices = $('#services-map-p-input');
    app.editServicesMapPText = function() {
        if ($('#edit-services-map-p-btn')) {
            $('#edit-services-map-p-btn').remove();
        };
        self.$servicesServicesMapPTag.append(self.textAreaservicesMapP);
        self.$servicesServicesMapPTag.append(self.saveMapPTextBtn);
    }
    app.saveServicesMapPText = function() {
        var usrInput = $('#services-map-p-input').val();
        self.servicesContentObj.main.content4[0].servicesMapPText = usrInput;
        self.$servicesServicesMapPTag.html(self.servicesContentObj.main.content4[0].servicesMapPText);
        $('#save-services-map-p-btn').remove();
        self.$textAreaMapPservices.remove();
        app.saveServicesToDB();
    }
    app.createServicesMapPText = function() {
        $('#edit-services-map-p-btn').remove();
        self.$servicesServicesMapPTag.append(self.editMapPTextBtn);
    }
    self.createServicesMapPText();
};