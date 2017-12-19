
app.editServicesH3 = function(
    $servicesServicesH3Tag,
    editH3Text,
    saveH3TextBtn,
    $saveH3TextBtn,
    $textAreaH3services
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesServicesH3Tag = $('#services-content3-row2-col2-h3-tag1');
    self.editH3TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-H3-btn" onclick="app.editServicesH3Text()"></i>';
    self.saveH3TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-H3-btn" onclick="app.saveServicesH3Text()"></i>';
    self.$saveH3TextBtn = $('#save-services-H3-btn');
    self.textAreaservicesH3 = '<textarea class="form-control" rows="1" number="3" maxlength="1000" ' +
        'id="services-H3-input">' +
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText1 +
        '</textarea>';
    self.$textAreaH3services = $('#services-H3-input');
    app.editServicesH3Text = function() {
        if ($('#edit-services-H3-btn')) {
            $('#edit-services-H3-btn').remove();
        };
        self.$servicesServicesH3Tag.append(self.textAreaservicesH3);
        self.$servicesServicesH3Tag.append(self.saveH3TextBtn);
    }
    app.saveServicesH3Text = function() {
        var usrInput = $('#services-H3-input').val();
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText1 = usrInput;
        self.$servicesServicesH3Tag.html(self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText1);
        $('#save-services-H3-btn').remove();
        self.$textAreaH3services.remove();
        app.saveServicesToDB();
    }
    app.createServicesH3Text = function() {
        $('#edit-services-H3-btn').remove();
        self.$servicesServicesH3Tag.append(self.editH3TextBtn);
    }
    self.createServicesH3Text();
};