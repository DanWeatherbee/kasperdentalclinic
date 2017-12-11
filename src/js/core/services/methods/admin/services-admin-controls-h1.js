/*
Written in a Object Oriented pattern OOP by Dan Weatherbee
Step 8 Final configure first element and by renaming and test.
Keep adding elements until you are done.

For images you must swap out img tag+src - not just src of tag.
services-render-method for step 9.
 Services H1 Text Controls =============================================
*/
app.editServicesH1 = function(
    $servicesServicesH1Tag,
    editH1Text,
    saveH1TextBtn,
    $saveH1TextBtn,
    $textAreaH1services
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesServicesH1Tag = $('#services-main-row1-col2-header-h1-tag');
    self.editH1TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-h1-btn" onclick="app.editServicesH1Text()"></i>';
    self.saveH1TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-h1-btn" onclick="app.saveServicesH1Text()"></i>';
    self.$saveH1TextBtn = $('#save-services-h1-btn');
    self.textAreaservicesH1 = '<textarea class="form-control" rows="1" number="3" maxlength="150" ' +
        'id="services-h1-input">' +
        self.servicesContentObj.main.content1[0].servicesMainContent1Row1Col2HeaderH1TagText +
        '</textarea>';
    self.$textAreaH1services = $('#services-h1-input');
    app.editServicesH1Text = function() {
        if ($('#edit-services-h1-btn')) {
            $('#edit-services-h1-btn').remove();
        };
        self.$servicesServicesH1Tag.append(self.textAreaservicesH1);
        self.$servicesServicesH1Tag.append(self.saveH1TextBtn);
    }
    app.saveServicesH1Text = function() {
        var usrInput = $('#services-h1-input').val();
        self.servicesContentObj.main.content1[0].servicesMainContent1Row1Col2HeaderH1TagText = usrInput;
        self.$servicesServicesH1Tag.html(self.servicesContentObj.main.content1[0].servicesMainContent1Row1Col2HeaderH1TagText);
        $('#save-services-h1-btn').remove();
        self.$textAreaH1services.remove();
        app.saveServicesToDB();
    }
    app.createServicesH1Text = function() {
        $('#edit-services-h1-btn').remove();
        self.$servicesServicesH1Tag.append(self.editH1TextBtn);
    }
    //    Step 1 add elem create method e.g.
    // app.createServicesH1Text();
    // Step2 replace below with above after the period.
    // e.g. createServicesH1Text();
    // Step 3 edit main function above e.g. editservicesServicesText to editServicesServicesText
    //create a launch-services-admin from a cloning from one thats made.
    // modify at the top app. calls to your new one app.editServicesServicesText().
    self.createServicesH1Text();
};