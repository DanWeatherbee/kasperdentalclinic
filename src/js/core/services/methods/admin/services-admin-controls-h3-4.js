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
 Services H3_4 Text Controls =============================================
*/
app.editServicesH3_4 = function(
    $servicesServicesH3_4Tag,
    editH3_4Text,
    saveH3_4TextBtn,
    $saveH3_4TextBtn,
    $textAreaH3_4services
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesServicesH3_4Tag = $('#services-content3-row2-col2-h3-tag4');
    self.editH3_4TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-h3-4-btn" onclick="app.editServicesH3_4Text()"></i>';
    self.saveH3_4TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-h3-4-btn" onclick="app.saveServicesH3_4Text()"></i>';
    self.$saveH3_4TextBtn = $('#save-services-h3-4-btn');
    self.textAreaservicesH3_4 = '<textarea class="form-control" rows="1" number="3" maxlength="150" ' +
        'id="services-h3-4-input">' +
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText4 +
        '</textarea>';
    self.$textAreaH3_4services = $('#services-h3-4-input');
    app.editServicesH3_4Text = function() {
        if ($('#edit-services-h3-4-btn')) {
            $('#edit-services-h3-4-btn').remove();
        };
        self.$servicesServicesH3_4Tag.append(self.textAreaservicesH3_4);
        self.$servicesServicesH3_4Tag.append(self.saveH3_4TextBtn);
    }
    app.saveServicesH3_4Text = function() {
        var usrInput = $('#services-h3-4-input').val();
        self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText4 = usrInput;
        self.$servicesServicesH3_4Tag.html(self.servicesContentObj.main.content3[0].servicesContent3row2Col2HeaderH3TagText4);
        $('#save-services-h3-4-btn').remove();
        self.$textAreaH3_4services.remove();
        app.saveServicesToDB();
    }
    app.createServicesH3_4Text = function() {
        $('#edit-services-h3-4-btn').remove();
        self.$servicesServicesH3_4Tag.append(self.editH3_4TextBtn);
    }
    //    Step 1 add elem create method e.g.
    // app.createServicesH3_4Text();
    // Step2 replace below with above after the period.
    // e.g. createServicesH3_4Text();
    // Step 3 edit main function above e.g. editservicesServicesText to editServicesServicesText
    //create a launch-services-admin from a cloning from one thats made.
    // modify at the top app. calls to your new one app.editServicesServicesText().
    self.createServicesH3_4Text();
};