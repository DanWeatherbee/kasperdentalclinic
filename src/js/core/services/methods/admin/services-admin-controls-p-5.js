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
app.editServicesP5 = function(
    $servicesP5Tag,
    editP5Text,
    saveP5TextBtn,
    $saveP5TextBtn,
    $textAreaP5services
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesP5Tag = $('#services-content3-row2-col2-tag-p-5');
    self.editP5TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-p-5-btn" onclick="app.editServicesP5Text()"></i>';
    self.saveP5TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-p-5-btn" onclick="app.saveServicesP5Text()"></i>';
    self.$saveP5TextBtn = $('#save-services-p-5-btn');
    self.textAreaServicesP5 = '<textarea class="form-control" rows="1" number="3" maxlength="150" ' +
        'id="services-p-5-input">' +
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText5 +
        '</textarea>';
    self.$textAreaP5services = $('#services-p-5-input');
    app.editServicesP5Text = function() {
        if ($('#edit-services-p-5-btn')) {
            $('#edit-services-p-5-btn').remove();
        };
        self.$servicesP5Tag.append(self.textAreaServicesP5);
        self.$servicesP5Tag.append(self.saveP5TextBtn);
    }
    app.saveServicesP5Text = function() {
        var usrInput = $('#services-p-5-input').val();
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText5 = usrInput;
        self.$servicesP5Tag.html(self.servicesContentObj.main.content3[0].servicesContent3row2Col2PTagText5);
        $('#save-services-p-5-btn').remove();
        self.$textAreaP5services.remove();
        app.saveServicesToDB();
    }
    app.createServicesP5Text = function() {
        $('#edit-services-p-5-btn').remove();
        self.$servicesP5Tag.append(self.editP5TextBtn);
    }
    self.createServicesP5Text();
};