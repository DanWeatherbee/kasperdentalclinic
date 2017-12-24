// Layout builder Class
CreateNewsPageClass = function(
    CreateNewsPage,
    NewsContentStr,
    NewsContentObj
) {
    var self = this;
    self.newsContent = CreateNewsPage; // Model
    self.newsContentStr = JSON.stringify(self.newsContent);

    // to localstorage
    localStorage.setItem('dataNewsDefault', self.newsContentStr);

    // Download databases. ===============================================

    var dbNewsEdited = localStorage.getItem('dataNewsEdited');
    var dbNewsDefault =  localStorage.getItem('dataNewsDefault');

    // Download edited database.
    var editedNewsDB = new File([dbNewsEdited], "dataNewsEdited");

   // Download default database.
    var defaultNewsDB = new File([dbNewsDefault], "dataNewsDefault");

    // Save to downloads folder.
// ==================================================================

    // // get from localstorage to load site.
    self.newsContentObj = JSON.parse(localStorage.getItem('dataNewsEdited'));
    if (!self.newsContentObj) {
        self.newsContentObj = JSON.parse(localStorage.getItem('dataNewsDefault'));
    };
};