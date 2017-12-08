// Layout builder Class for Index
CreateindexPageClass = function(
    CreateIndexPage,
    indexContentStr,
    indexContentObj
) {
    var self = this;
    self.indexContent = CreateindexPage; // Model
    self.indexContentStr = JSON.stringify(self.indexContent);

    // to localstorage
    localStorage.setItem('dataIndexDefault', self.indexContentStr);


    // Download databases. ===============================================

    var dbindexEdited = localStorage.getItem('dataIndexEdited');
    var dbindexDefault =  localStorage.getItem('dataIndexDefault');

    // Download edited database.
    var editedDB = new File([dbindexEdited], "dataIndexEdited");
    //saveAs(editedDB);
   // Download default database.
    var defaultDB = new File([dbindexDefault], "dataIndexDefault");

    // Save to downloads folder.
    // saveAs(defaultDB);
    // saveAs(editedDB);
// ==================================================================


    // // get from localstorage to load site.
    self.indexContentObj = JSON.parse(localStorage.getItem('dataIndexEdited'));
    if (!self.indexContentObj) {
        self.indexContentObj = JSON.parse(localStorage.getItem('dataIndexDefault'));
    };
};