
app.editServicesP3 = function(
    $servicesP3Tag,
    editP3Text,
    saveP3TextBtn,
    $saveP3TextBtn,
    $textAreaP3services
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesP3Tag = $('#services-content3-row2-col2-tag-p-3');
    self.editP3TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-p-3-btn" onclick="app.editServicesP3Text()"></i>';
    self.saveP3TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-p-3-btn" onclick="app.saveServicesP3Text()"></i>';
    self.$saveP3TextBtn = $('#save-services-p-3-btn');
    self.textAreaServicesP3 = '<textarea class="form-control" rows="1" number="3" maxlength="1000" ' +
        'id="services-p-3-input">' +
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText3 +
        '</textarea>';
    self.$textAreaP3services = $('#services-p-3-input');
    app.editServicesP3Text = function() {
        if ($('#edit-services-p-3-btn')) {
            $('#edit-services-p-3-btn').remove();
        };
        self.$servicesP3Tag.append(self.textAreaServicesP3);
        self.$servicesP3Tag.append(self.saveP3TextBtn);
    }
    app.saveServicesP3Text = function() {
        var usrInput = $('#services-p-3-input').val();
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText3 = usrInput;
        self.$servicesP3Tag.html(self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText3);
        $('#save-services-p-3-btn').remove();
        self.$textAreaP3services.remove();
        app.saveServicesToDB();
    }
    app.createServicesP3Text = function() {
        $('#edit-services-p-3-btn').remove();
        self.$servicesP3Tag.append(self.editP3TextBtn);
    }
    self.createServicesP3Text();
};