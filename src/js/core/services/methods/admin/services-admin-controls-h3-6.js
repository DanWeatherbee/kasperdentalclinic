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

 Services H3_6 Text Controls =============================================
*/
app.editServicesH3_6 = function(
    $servicesServicesH3_6Tag,
    editH3_6Text,
    saveH3_6TextBtn,
    $saveH3_6TextBtn,
    $textAreaH3_6services
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesServicesH3_6Tag = $('#services-content3-row2-col2-h3-tag6');
    self.editH3_6TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-h3-6-btn" onclick="app.editServicesH3_6Text()"></i>';
    self.saveH3_6TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-h3-6-btn" onclick="app.saveServicesH3_6Text()"></i>';
    self.$saveH3_6TextBtn = $('#save-services-h3-6-btn');
    self.textAreaservicesH3_6 = '<textarea class="form-control" rows="1" number="3" maxlength="150" ' +
        'id="services-h3-6-input">' +
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText6 +
        '</textarea>';
    self.$textAreaH3_6services = $('#services-h3-6-input');
    app.editServicesH3_6Text = function() {
        if ($('#edit-services-h3-6-btn')) {
            $('#edit-services-h3-6-btn').remove();
        };
        self.$servicesServicesH3_6Tag.append(self.textAreaservicesH3_6);
        self.$servicesServicesH3_6Tag.append(self.saveH3_6TextBtn);
    }
    app.saveServicesH3_6Text = function() {
        var usrInput = $('#services-h3-6-input').val();
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText6 = usrInput;
        self.$servicesServicesH3_6Tag.html(self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText6);
        $('#save-services-h3-6-btn').remove();
        self.$textAreaH3_6services.remove();
        app.saveServicesToDB();
    }
    app.createServicesH3_6Text = function() {
        $('#edit-services-h3-6-btn').remove();
        self.$servicesServicesH3_6Tag.append(self.editH3_6TextBtn);
    }
    //    Step 1 add elem create method e.g.
    // app.createServicesH3_6Text();
    // Step2 replace below with above after the period.
    // e.g. createServicesH3_6Text();
    // Step 3 edit main function above e.g. editservicesServicesText to editServicesServicesText
    //create a launch-services-admin from a cloning from one thats made.
    // modify at the top app. calls to your new one app.editServicesServicesText().
    self.createServicesH3_6Text();
};