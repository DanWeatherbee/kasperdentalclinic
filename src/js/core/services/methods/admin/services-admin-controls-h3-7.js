
app.editServicesH3_7 = function(
    $servicesServicesH3_7Tag,
    editH3_7Text,
    saveH3_7TextBtn,
    $saveH3_7TextBtn,
    $textAreaH3_7services
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesServicesH3_7Tag = $('#services-content3-row2-col2-h3-tag7');
    self.editH3_7TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-h3-7-btn" onclick="app.editServicesH3_7Text()"></i>';
    self.saveH3_7TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-h3-7-btn" onclick="app.saveServicesH3_7Text()"></i>';
    self.$saveH3_7TextBtn = $('#save-services-h3-7-btn');
    self.textAreaservicesH3_7 = '<textarea class="form-control" rows="1" number="3" maxlength="1000" ' +
        'id="services-h3-7-input">' +
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText7 +
        '</textarea>';
    self.$textAreaH3_7services = $('#services-h3-7-input');
    app.editServicesH3_7Text = function() {
        if ($('#edit-services-h3-7-btn')) {
            $('#edit-services-h3-7-btn').remove();
        };
        self.$servicesServicesH3_7Tag.append(self.textAreaservicesH3_7);
        self.$servicesServicesH3_7Tag.append(self.saveH3_7TextBtn);
    }
    app.saveServicesH3_7Text = function() {
        var usrInput = $('#services-h3-7-input').val();
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText7 = usrInput;
        self.$servicesServicesH3_7Tag.html(self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText7);
        $('#save-services-h3-7-btn').remove();
        self.$textAreaH3_7services.remove();
        app.saveServicesToDB();
    }
    app.createServicesH3_7Text = function() {
        $('#edit-services-h3-7-btn').remove();
        self.$servicesServicesH3_7Tag.append(self.editH3_7TextBtn);
    }
    self.createServicesH3_7Text();
};