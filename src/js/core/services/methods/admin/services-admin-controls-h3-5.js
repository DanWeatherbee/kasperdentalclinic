/*
Written in a Object Oriented pattern OOP by Dan Weatherbee
Step 8 Final configure first element and by renaming and test.
Keep adding elements until you are done.

For images you must swap out img tag+src - not just src of tag.
services-render-method for step 9.
================================================

Admin Control Cloning procedure-----
Using find replace in editor;
e.g.
a. increment H3_8
b. increment tag8
c. increment Text8
d. increment -h3-8-
------     Test    ---------------------------

 Services H3_5 Text Controls =============================================
*/
app.editServicesH3_5 = function(
    $servicesServicesH3_5Tag,
    editH3_5Text,
    saveH3_5TextBtn,
    $saveH3_5TextBtn,
    $textAreaH3_5services
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesServicesH3_5Tag = $('#services-content3-row2-col2-h3-tag5');
    self.editH3_5TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-h3-5-btn" onclick="app.editServicesH3_5Text()"></i>';
    self.saveH3_5TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-h3-5-btn" onclick="app.saveServicesH3_5Text()"></i>';
    self.$saveH3_5TextBtn = $('#save-services-h3-5-btn');
    self.textAreaservicesH3_5 = '<textarea class="form-control" rows="1" number="3" maxlength="150" ' +
        'id="services-h3-5-input">' +
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText5 +
        '</textarea>';
    self.$textAreaH3_5services = $('#services-h3-5-input');
    app.editServicesH3_5Text = function() {
        if ($('#edit-services-h3-5-btn')) {
            $('#edit-services-h3-5-btn').remove();
        };
        self.$servicesServicesH3_5Tag.append(self.textAreaservicesH3_5);
        self.$servicesServicesH3_5Tag.append(self.saveH3_5TextBtn);
    }
    app.saveServicesH3_5Text = function() {
        var usrInput = $('#services-h3-5-input').val();
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText5 = usrInput;
        self.$servicesServicesH3_5Tag.html(self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText5);
        $('#save-services-h3-5-btn').remove();
        self.$textAreaH3_5services.remove();
        app.saveServicesToDB();
    }
    app.createServicesH3_5Text = function() {
        $('#edit-services-h3-5-btn').remove();
        self.$servicesServicesH3_5Tag.append(self.editH3_5TextBtn);
    }
    //    Step 1 add elem create method e.g.
    // app.createServicesH3_5Text();
    // Step2 replace below with above after the period.
    // e.g. createServicesH3_5Text();
    // Step 3 edit main function above e.g. editservicesServicesText to editServicesServicesText
    //create a launch-services-admin from a cloning from one thats made.
    // modify at the top app. calls to your new one app.editServicesServicesText().
    self.createServicesH3_5Text();
};