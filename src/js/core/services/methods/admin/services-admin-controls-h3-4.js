
app.editServicesH3_4 = function(
    $servicesServicesH3_4Tag,
    editH3_4Text,
    saveH3_4TextBtn,
    $saveH3_4TextBtn,
    $textAreaH3_4services
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesServicesH3_4Tag = $('#services-content3-row2-col2-h3-tag4');
    self.editH3_4TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-h3-4-btn" onclick="app.editServicesH3_4Text()"></i>';
    self.saveH3_4TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-h3-4-btn" onclick="app.saveServicesH3_4Text()"></i>';
    self.$saveH3_4TextBtn = $('#save-services-h3-4-btn');
    self.textAreaservicesH3_4 = '<textarea class="form-control" rows="1" number="3" maxlength="1000" ' +
        'id="services-h3-4-input">' +
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText4 +
        '</textarea>';
    self.$textAreaH3_4services = $('#services-h3-4-input');
    app.editServicesH3_4Text = function() {
        if ($('#edit-services-h3-4-btn')) {
            $('#edit-services-h3-4-btn').remove();
        };
        self.$servicesServicesH3_4Tag.append(self.textAreaservicesH3_4);
        self.$servicesServicesH3_4Tag.append(self.saveH3_4TextBtn);
    }
    app.saveServicesH3_4Text = function() {
        var usrInput = $('#services-h3-4-input').val();
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText4 = usrInput;
        self.$servicesServicesH3_4Tag.html(self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText4);
        $('#save-services-h3-4-btn').remove();
        self.$textAreaH3_4services.remove();
        app.saveServicesToDB();
    }
    app.createServicesH3_4Text = function() {
        $('#edit-services-h3-4-btn').remove();
        self.$servicesServicesH3_4Tag.append(self.editH3_4TextBtn);
    }
    self.createServicesH3_4Text();
};