/*
Written in a Object Oriented pattern OOP by Dan Weatherbee
Step 8 Final configure first element and by renaming and test.
Keep adding elements until you are done.

For images you must swap out img tag+src - not just src of tag.
services-render-method for step 9.
Admin Control Cloning procedure-----
Using find replace in editor;
e.g.
a. increment H3_8
b. increment tag8
c. increment Text8
d. increment -h3-8-
------     Test    ---------------------------
 Services H3_2 Text Controls =============================================
*/
app.editServicesH3_2 = function(
    $servicesServicesH3_2Tag,
    editH3_2Text,
    saveH3_2TextBtn,
    $saveH3_2TextBtn,
    $textAreaH3_2services
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesServicesH3_2Tag = $('#services-content3-row2-col2-h3-tag2');
    self.editH3_2TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-h3-2-btn" onclick="app.editServicesH3_2Text()"></i>';
    self.saveH3_2TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-h3-2-btn" onclick="app.saveServicesH3_2Text()"></i>';
    self.$saveH3_2TextBtn = $('#save-services-h3-2-btn');
    self.textAreaservicesH3_2 = '<textarea class="form-control" rows="1" number="3" maxlength="150" ' +
        'id="services-h3-2-input">' +
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText2 +
        '</textarea>';
    self.$textAreaH3_2services = $('#services-h3-2-input');
    app.editServicesH3_2Text = function() {
        if ($('#edit-services-h3-2-btn')) {
            $('#edit-services-h3-2-btn').remove();
        };
        self.$servicesServicesH3_2Tag.append(self.textAreaservicesH3_2);
        self.$servicesServicesH3_2Tag.append(self.saveH3_2TextBtn);
    }
    app.saveServicesH3_2Text = function() {
        var usrInput = $('#services-h3-2-input').val();
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText2 = usrInput;
        self.$servicesServicesH3_2Tag.html(self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText2);
        $('#save-services-h3-2-btn').remove();
        self.$textAreaH3_2services.remove();
        app.saveServicesToDB();
    }
    app.createServicesH3_2Text = function() {
        $('#edit-services-h3-2-btn').remove();
        self.$servicesServicesH3_2Tag.append(self.editH3_2TextBtn);
    }
    //    Step 1 add elem create method e.g.
    // app.createServicesH3_2Text();
    // Step2 replace below with above after the period.
    // e.g. createServicesH3_2Text();
    // Step 3 edit main function above e.g. editservicesServicesText to editServicesServicesText
    //create a launch-services-admin from a cloning from one thats made.
    // modify at the top app. calls to your new one app.editServicesServicesText().
    self.createServicesH3_2Text();
};