// Layout builder Class
CreateOleyPageClass = function(
    CreateOleyPage,
    OleyContentStr,
    OleyContentObj
) {
    var self = this;
    self.oleyContent = CreateOleyPage; // Model
    self.oleyContentStr = JSON.stringify(self.oleyContent);

    // to localstorage
    localStorage.setItem('dataOleyDefault', self.oleyContentStr);

    // Download databases. ===============================================

    var dbOleyEdited = localStorage.getItem('dataOleyEdited');
    var dbOleyDefault =  localStorage.getItem('dataOleyDefault');

    // Download edited database.
    var editedOleyDB = new File([dbOleyEdited], "dataOleyEdited");

   // Download default database.
    var defaultOleyDB = new File([dbOleyDefault], "dataOleyDefault");

    // Save to downloads folder.
// ==================================================================

    // // get from localstorage to load site.
    self.oleyContentObj = JSON.parse(localStorage.getItem('dataOleyEdited'));
    if (!self.oleyContentObj) {
        self.oleyContentObj = JSON.parse(localStorage.getItem('dataOleyDefault'));
    };
};