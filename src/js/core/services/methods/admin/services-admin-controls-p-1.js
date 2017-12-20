
app.editServicesP1 = function(
    $servicesP1Tag,
    editP1Text,
    saveP1TextBtn,
    $saveP1TextBtn,
    $textAreaP1services
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesP1Tag = $('#services-content3-row2-col2-tag-p-1');
    self.editP1TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-p-1-btn" onclick="app.editServicesP1Text()"></i>';
    self.saveP1TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-p-1-btn" onclick="app.saveServicesP1Text()"></i>';
    self.$saveP1TextBtn = $('#save-services-p-1-btn');
    self.textAreaServicesP1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="services-p-1-input">' +
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText1 +
        '</textarea>';
    self.$textAreaP1services = $('#services-p-1-input');
    app.editServicesP1Text = function() {
        if ($('#edit-services-p-1-btn')) {
            $('#edit-services-p-1-btn').remove();
        };
        self.$servicesP1Tag.append(self.textAreaServicesP1);
        self.$servicesP1Tag.append(self.saveP1TextBtn);
    }
    app.saveServicesP1Text = function() {
        var usrInput = $('#services-p-1-input').val();
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText1 = usrInput;
        self.$servicesP1Tag.html(self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText1);
        $('#save-services-p-1-btn').remove();
        self.$textAreaP1services.remove();
        app.saveServicesToDB();
    }
    app.createServicesP1Text = function() {
        $('#edit-services-p-1-btn').remove();
        self.$servicesP1Tag.append(self.editP1TextBtn);
    }

    self.createServicesP1Text();
};