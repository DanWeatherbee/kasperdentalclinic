
CreateServicesPageClass = function(
    CreateServicesPage,
    servicesContentStr,
    servicesContentObj
) {
    var self = this;
    self.servicesContent = CreateServicesPage; // Model
    self.servicesContentStr = JSON.stringify(self.servicesContent);

    // to localstorage
    localStorage.setItem('dataServicesDefault', self.servicesContentStr);


    // Download databases. ===============================================

    var dbServicesEdited = localStorage.getItem('dataServicesEdited');
    var dbServicesDefault =  localStorage.getItem('dataServicesDefault');

    // Download edited database.
    var editedServicesDB = new File([dbServicesEdited], "dataServicesEdited");
    //saveAs(editedDB);
   // Download default database.
    var defaultServicesDB = new File([dbServicesDefault], "dataServicesDefault");
// ==================================================================


    // // get from localstorage to load site.
    self.servicesContentObj = JSON.parse(localStorage.getItem('dataServicesEdited'));
    if (!self.servicesContentObj) {
        self.servicesContentObj = JSON.parse(localStorage.getItem('dataServicesDefault'));
    };
};