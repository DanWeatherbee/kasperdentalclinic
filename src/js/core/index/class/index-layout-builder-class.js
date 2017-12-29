/*
Written in a Object Oriented pattern OOP by Dan Weatherbee
 Layout builder Class for Index
*/
CreateIndexPageClass = function(
    CreateIndexPage,
    indexContentStr,
    indexContentObj
) {
    var self = this;
    self.indexContent = CreateIndexPage; // Model
    self.indexContentStr = JSON.stringify(self.indexContent);

    // to localstorage
    localStorage.setItem('dataIndexDefault', self.indexContentStr);


    // Download databases. ===============================================

    var dbIndexEdited = localStorage.getItem('dataIndexEdited');
    var dbIndexDefault =  localStorage.getItem('dataIndexDefault');

    // Download edited database.
    var editedIndexDB = new File([dbIndexEdited], "dataIndexEdited");
    //saveAs(editedDB);
   // Download default database.
    var defaultIndexDB = new File([dbIndexDefault], "dataIndexDefault");
// ==================================================================


    // // get from localstorage to load site.
    self.indexContentObj = JSON.parse(localStorage.getItem('dataIndexEdited'));
    if (!self.indexContentObj) {
        self.indexContentObj = JSON.parse(localStorage.getItem('dataIndexDefault'));
    };
};

