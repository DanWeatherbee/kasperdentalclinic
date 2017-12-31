// Layout builder Class
CreateContactPageClass = function(
    CreateContactPage,
    contactContentStr,
    contactContentObj
) {
    var self = this;
    self.contactContent = CreateContactPage; // Model
    self.contactContentStr = JSON.stringify(self.contactContent);

    // to localstorage
    localStorage.setItem('dataContactDefault', self.contactContentStr);

    // Download databases. ===============================================

    var dbContactEdited = localStorage.getItem('dataContactEdited');
    var dbContactDefault =  localStorage.getItem('dataContactDefault');

    // Download edited database.
    var editedContactDB = new File([dbContactEdited], "dataContactEdited");

   // Download default database.
    var defaultContactDB = new File([dbContactDefault], "dataContactDefault");

    // Save to downloads folder.
// ==================================================================

    // // get from localstorage to load site.
    self.contactContentObj = JSON.parse(localStorage.getItem('dataContactEdited'));
    if (!self.contactContentObj) {
        self.contactContentObj = JSON.parse(localStorage.getItem('dataContactDefault'));
    };
};