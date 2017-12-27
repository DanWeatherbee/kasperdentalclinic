// Layout builder Class
CreateJasonPageClass = function(
    CreateJasonPage,
    jasonContentStr,
    jasonContentObj
) {
    var self = this;
    self.jasonContent = CreateJasonPage; // Model
    self.jasonContentStr = JSON.stringify(self.jasonContent);

    // to localstorage
    localStorage.setItem('dataJasonDefault', self.jasonContentStr);

    // Download databases. ===============================================

    var dbJasonEdited = localStorage.getItem('dataJasonEdited');
    var dbJasonDefault =  localStorage.getItem('dataJasonDefault');

    // Download edited database.
    var editedJasonDB = new File([dbJasonEdited], "dataJasonEdited");

   // Download default database.
    var defaultJasonDB = new File([dbJasonDefault], "dataJasonDefault");

    // Save to downloads folder.
// ==================================================================

    // // get from localstorage to load site.
    self.jasonContentObj = JSON.parse(localStorage.getItem('dataJasonEdited'));
    if (!self.jasonContentObj) {
        self.jasonContentObj = JSON.parse(localStorage.getItem('dataJasonDefault'));
    };
};