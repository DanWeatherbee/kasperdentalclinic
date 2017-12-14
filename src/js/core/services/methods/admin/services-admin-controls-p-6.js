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
app.editServicesP6 = function(
    $servicesP6Tag,
    editP6Text,
    saveP6TextBtn,
    $saveP6TextBtn,
    $textAreaP6services
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesP6Tag = $('#services-content3-row2-col2-tag-p-6');
    self.editP6TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-p-6-btn" onclick="app.editServicesP6Text()"></i>';
    self.saveP6TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-p-6-btn" onclick="app.saveServicesP6Text()"></i>';
    self.$saveP6TextBtn = $('#save-services-p-6-btn');
    self.textAreaServicesP6 = '<textarea class="form-control" rows="1" number="3" maxlength="150" ' +
        'id="services-p-6-input">' +
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText6 +
        '</textarea>';
    self.$textAreaP6services = $('#services-p-6-input');
    app.editServicesP6Text = function() {
        if ($('#edit-services-p-6-btn')) {
            $('#edit-services-p-6-btn').remove();
        };
        self.$servicesP6Tag.append(self.textAreaServicesP6);
        self.$servicesP6Tag.append(self.saveP6TextBtn);
    }
    app.saveServicesP6Text = function() {
        var usrInput = $('#services-p-6-input').val();
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText6 = usrInput;
        self.$servicesP6Tag.html(self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText6);
        $('#save-services-p-6-btn').remove();
        self.$textAreaP6services.remove();
        app.saveServicesToDB();
    }
    app.createServicesP6Text = function() {
        $('#edit-services-p-6-btn').remove();
        self.$servicesP6Tag.append(self.editP6TextBtn);
    }
    self.createServicesP6Text();
};