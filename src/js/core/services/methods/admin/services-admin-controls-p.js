/*
Written in a Object Oriented pattern OOP by Dan Weatherbee
Step 8 Final configure first element and by renaming and test.
Keep adding elements until you are done.

For images you must swap out img tag+src - not just src of tag.
services-render-method for step 9.
 Services P Text Controls =============================================
*/
app.editServicesP = function(
    $servicesServicesPTag,
    editPText,
    savePTextBtn,
    $savePTextBtn,
    $textAreaPservices
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesServicesPTag = $('#services-main-row1-col2-p-tag');
    self.editPTextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-p-btn" onclick="app.editServicesPText()"></i>';
    self.savePTextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-p-btn" onclick="app.saveServicesPText()"></i>';
    self.$savePTextBtn = $('#save-services-p-btn');
    self.textAreaservicesP = '<textarea class="form-control" rows="1" number="3" maxlength="150" ' +
        'id="services-p-input">' +
        self.servicesContentObj.main.content1[0].servicesMainContent1Row1Col2PTagText +
        '</textarea>';
    self.$textAreaPservices = $('#services-p-input');
    app.editServicesPText = function() {
        if ($('#edit-services-p-btn')) {
            $('#edit-services-p-btn').remove();
        };
        self.$servicesServicesPTag.append(self.textAreaservicesP);
        self.$servicesServicesPTag.append(self.savePTextBtn);
    }
    app.saveServicesPText = function() {
        var usrInput = $('#services-p-input').val();
        self.servicesContentObj.main.content1[0].servicesMainContent1Row1Col2PTagText = usrInput;
        self.$servicesServicesPTag.html(self.servicesContentObj.main.content1[0].servicesMainContent1Row1Col2PTagText);
        $('#save-services-p-btn').remove();
        self.$textAreaPservices.remove();
        app.saveServicesToDB();
    }
    app.createServicesPText = function() {
        $('#edit-services-p-btn').remove();
        self.$servicesServicesPTag.append(self.editPTextBtn);
    }
    //    Step 1 add elem create method e.g.
    // app.createServicesPText();
    // Step2 replace below with above after the period.
    // e.g. createServicesPText();
    // Step 3 edit main function above e.g. editservicesServicesText to editServicesServicesText
    //create a launch-services-admin from a cloning from one thats made.
    // modify at the top app. calls to your new one app.editServicesServicesText().
    self.createServicesPText();
};