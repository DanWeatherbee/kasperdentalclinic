
app.editServicesP8 = function(
    $servicesP8Tag,
    editP8Text,
    saveP8TextBtn,
    $saveP8TextBtn,
    $textAreaP8services
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesP8Tag = $('#services-content3-row2-col2-tag-p-8');
    self.editP8TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-p-8-btn" onclick="app.editServicesP8Text()"></i>';
    self.saveP8TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-p-8-btn" onclick="app.saveServicesP8Text()"></i>';
    self.$saveP8TextBtn = $('#save-services-p-8-btn');
    self.textAreaServicesP8 = '<textarea class="form-control" rows="1" number="3" maxlength="1000" ' +
        'id="services-p-8-input">' +
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText8 +
        '</textarea>';
    self.$textAreaP8services = $('#services-p-8-input');
    app.editServicesP8Text = function() {
        if ($('#edit-services-p-8-btn')) {
            $('#edit-services-p-8-btn').remove();
        };
        self.$servicesP8Tag.append(self.textAreaServicesP8);
        self.$servicesP8Tag.append(self.saveP8TextBtn);
    }
    app.saveServicesP8Text = function() {
        var usrInput = $('#services-p-8-input').val();
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText8 = usrInput;
        self.$servicesP8Tag.html(self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText8);
        $('#save-services-p-8-btn').remove();
        self.$textAreaP8services.remove();
        app.saveServicesToDB();
    }
    app.createServicesP8Text = function() {
        $('#edit-services-p-8-btn').remove();
        self.$servicesP8Tag.append(self.editP8TextBtn);
    }
    self.createServicesP8Text();
};