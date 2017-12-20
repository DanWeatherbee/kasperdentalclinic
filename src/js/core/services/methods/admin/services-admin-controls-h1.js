
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
    self.saveH1TextBtn = '<i type="button" class="fa fa-save edit-btns-fixed" id="save-services-h1-btn" onclick="app.saveServicesH1Text()"></i>';
    self.$saveH1TextBtn = $('#save-services-h1-btn');
    self.textAreaservicesH1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
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
    self.createServicesH1Text();
};