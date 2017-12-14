
app.editServicesUl = function(
    $servicesServicesUlTag,
    editUlContent,
    saveUlContent,
    $saveUlContent,
    $textAreaUlservices
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesServicesUlTag = $('#services-main-content1-row1-col2-ul-tag');
    self.editUlContentBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-ul-btn" onclick="app.editServicesUlContent()"></i>';
    self.saveUlContent = '<i type="button" class="fa fa-save edit-btns" id="save-services-ul-btn" onclick="app.saveServicesUlContent()"></i>';
    self.$saveUlContent = $('#save-services-ul-btn');
    self.textAreaservicesUl = '<textarea class="form-control" rows="1" number="3" maxlength="150" ' +
        'id="services-ul-input">' +
        self.servicesContentObj.main.content1[0].servicesMainContent1Row1Col2UlTagContent +
        '</textarea>';
    self.$textAreaUlservices = $('#services-ul-input');
    app.editServicesUlContent = function() {
        if ($('#edit-services-ul-btn')) {
            $('#edit-services-ul-btn').remove();
        };
        self.$servicesServicesUlTag.append(self.textAreaservicesUl);
        self.$servicesServicesUlTag.append(self.saveUlContent);
    }
    app.saveServicesUlContent = function() {
        var usrInput = $('#services-ul-input').val();
        self.servicesContentObj.main.content1[0].servicesMainContent1Row1Col2UlTagContent = usrInput;
        self.$servicesServicesUlTag.html(self.servicesContentObj.main.content1[0].servicesMainContent1Row1Col2UlTagContent);
        $('#save-services-ul-btn').remove();
        self.$textAreaUlservices.remove();
        app.saveServicesToDB();
    }
    app.createServicesUlContent = function() {
        $('#edit-services-ul-btn').remove();
        self.$servicesServicesUlTag.append(self.editUlContentBtn);
    }

    self.createServicesUlContent();
};