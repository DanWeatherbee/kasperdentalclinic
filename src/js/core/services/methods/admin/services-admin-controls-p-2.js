
app.editServicesP2 = function(
    $servicesP2Tag,
    editP2Text,
    saveP2TextBtn,
    $saveP2TextBtn,
    $textAreaP2services
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesP2Tag = $('#services-content3-row2-col2-tag-p-2');
    self.editP2TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-p-2-btn" onclick="app.editServicesP2Text()"></i>';
    self.saveP2TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-p-2-btn" onclick="app.saveServicesP2Text()"></i>';
    self.$saveP2TextBtn = $('#save-services-p-2-btn');
    self.textAreaServicesP2 = '<textarea class="form-control" rows="1" number="3" maxlength="150" ' +
        'id="services-p-2-input">' +
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText2 +
        '</textarea>';
    self.$textAreaP2services = $('#services-p-2-input');
    app.editServicesP2Text = function() {
        if ($('#edit-services-p-2-btn')) {
            $('#edit-services-p-2-btn').remove();
        };
        self.$servicesP2Tag.append(self.textAreaServicesP2);
        self.$servicesP2Tag.append(self.saveP2TextBtn);
    }
    app.saveServicesP2Text = function() {
        var usrInput = $('#services-p-2-input').val();
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText2 = usrInput;
        self.$servicesP2Tag.html(self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText2);
        $('#save-services-p-2-btn').remove();
        self.$textAreaP2services.remove();
        app.saveServicesToDB();
    }
    app.createServicesP2Text = function() {
        $('#edit-services-p-2-btn').remove();
        self.$servicesP2Tag.append(self.editP2TextBtn);
    }
    self.createServicesP2Text();
};