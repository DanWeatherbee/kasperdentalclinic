
app.editServicesFaqH1 = function(
    $servicesServicesFaqH1Tag,
    editFaqH1Text,
    saveFaqH1TextBtn,
    $saveFaqH1TextBtn,
    $textAreaFaqH1services
) {
    "use strict";
    var self = this;
    // Services Controls =============================================
    self.$servicesServicesFaqH1Tag = $('#services-collapsible-containers-header-h1');
    self.editFaqH1TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-services-h3-8-btn" onclick="app.editServicesFaqH1Text()"></i>';
    self.saveFaqH1TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-services-h3-8-btn" onclick="app.saveServicesFaqH1Text()"></i>';
    self.$saveFaqH1TextBtn = $('#save-services-h3-8-btn');
    self.textAreaservicesFaqH1 = '<textarea class="form-control" rows="1" number="3" maxlength="150" ' +
        'id="services-h3-8-input">' +
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersHeaderH1Text +
        '</textarea>';
    self.$textAreaFaqH1services = $('#services-h3-8-input');
    app.editServicesFaqH1Text = function() {
        if ($('#edit-services-h3-8-btn')) {
            $('#edit-services-h3-8-btn').remove();
        };
        self.$servicesServicesFaqH1Tag.append(self.textAreaservicesFaqH1);
        self.$servicesServicesFaqH1Tag.append(self.saveFaqH1TextBtn);
    }
    app.saveServicesFaqH1Text = function() {
        var usrInput = $('#services-h3-8-input').val();
        self.servicesContentObj.main.content4[0].servicesCollapsibleContainersHeaderH1Text = usrInput;
        self.$servicesServicesFaqH1Tag.html(self.servicesContentObj.main.content4[0].servicesCollapsibleContainersHeaderH1Text);
        $('#save-services-h3-8-btn').remove();
        self.$textAreaFaqH1services.remove();
        app.saveServicesToDB();
    }
    app.createServicesFaqH1Text = function() {
        $('#edit-services-h3-8-btn').remove();
        self.$servicesServicesFaqH1Tag.append(self.editFaqH1TextBtn);
    }
    self.createServicesFaqH1Text();
};