
app.editServicesP4 = function(
    $servicesP4Tag,
    editP4Text,
    saveP4TextBtn,
    $saveP4TextBtn,
    $textAreaP4services
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesP4Tag = $('#services-content3-row2-col2-tag-p-4');
    self.editP4TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-p-4-btn" onclick="app.editServicesP4Text()"></i>';
    self.saveP4TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-p-4-btn" onclick="app.saveServicesP4Text()"></i>';
    self.$saveP4TextBtn = $('#save-services-p-4-btn');
    self.textAreaServicesP4 = '<textarea class="form-control" rows="1" number="3" maxlength="1000" ' +
        'id="services-p-4-input">' +
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText4 +
        '</textarea>';
    self.$textAreaP4services = $('#services-p-4-input');
    app.editServicesP4Text = function() {
        if ($('#edit-services-p-4-btn')) {
            $('#edit-services-p-4-btn').remove();
        };
        self.$servicesP4Tag.append(self.textAreaServicesP4);
        self.$servicesP4Tag.append(self.saveP4TextBtn);
    }
    app.saveServicesP4Text = function() {
        var usrInput = $('#services-p-4-input').val();
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText4 = usrInput;
        self.$servicesP4Tag.html(self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText4);
        $('#save-services-p-4-btn').remove();
        self.$textAreaP4services.remove();
        app.saveServicesToDB();
    }
    app.createServicesP4Text = function() {
        $('#edit-services-p-4-btn').remove();
        self.$servicesP4Tag.append(self.editP4TextBtn);
    }
    self.createServicesP4Text();
};