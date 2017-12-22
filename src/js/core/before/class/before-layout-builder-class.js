// Layout builder Class
CreateBeforePageClass = function(
    CreateBeforePage,
    beforeContentStr,
    beforeContentObj
) {
    var self = this;
    self.beforeContent = CreateBeforePage; // Model
    self.beforeContentStr = JSON.stringify(self.beforeContent);

    // to localstorage
    localStorage.setItem('dataBeforeDefault', self.beforeContentStr);

    // Download databases. ===============================================

    var dbBeforeEdited = localStorage.getItem('dataBeforeEdited');
    var dbBeforeDefault =  localStorage.getItem('dataBeforeDefault');

    // Download edited database.
    var editedBeforeDB = new File([dbBeforeEdited], "dataBeforeEdited");

   // Download default database.
    var defaultBeforeDB = new File([dbBeforeDefault], "dataBeforeDefault");

    // Save to downloads folder.
// ==================================================================

    // // get from localstorage to load site.
    self.beforeContentObj = JSON.parse(localStorage.getItem('dataBeforeEdited'));
    if (!self.beforeContentObj) {
        self.beforeContentObj = JSON.parse(localStorage.getItem('dataBeforeDefault'));
    };
};