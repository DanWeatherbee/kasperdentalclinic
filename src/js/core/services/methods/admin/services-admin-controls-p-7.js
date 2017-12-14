/*
Written in a Object Oriented pattern OOP by Dan Weatherbee

================================================|
----------------Admin Control Cloning procedure----->
Using find replace in editor;
e.g.
a. increment H3_8
b. increment tag8
c. increment Text8
d. update launch-page-admin, page-db-save, page.html
------------------------ Test    --------------------------->
================================================|
 Services P Text Controls ===========================================
*/
app.editServicesP7 = function(
    $servicesP7Tag,
    editP7Text,
    saveP7TextBtn,
    $saveP7TextBtn,
    $textAreaP7services
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesP7Tag = $('#services-content3-row2-col2-tag-p-7');
    self.editP7TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-p-7-btn" onclick="app.editServicesP7Text()"></i>';
    self.saveP7TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-p-7-btn" onclick="app.saveServicesP7Text()"></i>';
    self.$saveP7TextBtn = $('#save-services-p-7-btn');
    self.textAreaServicesP7 = '<textarea class="form-control" rows="1" number="3" maxlength="150" ' +
        'id="services-p-7-input">' +
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText7 +
        '</textarea>';
    self.$textAreaP7services = $('#services-p-7-input');
    app.editServicesP7Text = function() {
        if ($('#edit-services-p-7-btn')) {
            $('#edit-services-p-7-btn').remove();
        };
        self.$servicesP7Tag.append(self.textAreaServicesP7);
        self.$servicesP7Tag.append(self.saveP7TextBtn);
    }
    app.saveServicesP7Text = function() {
        var usrInput = $('#services-p-7-input').val();
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText7 = usrInput;
        self.$servicesP7Tag.html(self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText7);
        $('#save-services-p-7-btn').remove();
        self.$textAreaP7services.remove();
        app.saveServicesToDB();
    }
    app.createServicesP7Text = function() {
        $('#edit-services-p-7-btn').remove();
        self.$servicesP7Tag.append(self.editP7TextBtn);
    }
    self.createServicesP7Text();
};