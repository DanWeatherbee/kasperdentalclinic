
app.editServicesH3_6 = function(
    $servicesServicesH3_6Tag,
    editH3_6Text,
    saveH3_6TextBtn,
    $saveH3_6TextBtn,
    $textAreaH3_6services
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesServicesH3_6Tag = $('#services-content3-row2-col2-h3-tag6');
    self.editH3_6TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-h3-6-btn" onclick="app.editServicesH3_6Text()"></i>';
    self.saveH3_6TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-h3-6-btn" onclick="app.saveServicesH3_6Text()"></i>';
    self.$saveH3_6TextBtn = $('#save-services-h3-6-btn');
    self.textAreaservicesH3_6 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="services-h3-6-input">' +
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText6 +
        '</textarea>';
    self.$textAreaH3_6services = $('#services-h3-6-input');
    app.editServicesH3_6Text = function() {
        if ($('#edit-services-h3-6-btn')) {
            $('#edit-services-h3-6-btn').remove();
        };
        self.$servicesServicesH3_6Tag.append(self.textAreaservicesH3_6);
        self.$servicesServicesH3_6Tag.append(self.saveH3_6TextBtn);
    }
    app.saveServicesH3_6Text = function() {
        var usrInput = $('#services-h3-6-input').val();
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText6 = usrInput;
        self.$servicesServicesH3_6Tag.html(self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText6);
        $('#save-services-h3-6-btn').remove();
        self.$textAreaH3_6services.remove();
        app.saveServicesToDB();
    }
    app.createServicesH3_6Text = function() {
        $('#edit-services-h3-6-btn').remove();
        self.$servicesServicesH3_6Tag.append(self.editH3_6TextBtn);
    }
    self.createServicesH3_6Text();
};