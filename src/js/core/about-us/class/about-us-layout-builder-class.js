// Layout builder Class
CreateAboutPageClass = function(
    CreateAboutPage,
    aboutContentStr,
    aboutContentObj
) {
    var self = this;
    self.aboutContent = CreateAboutPage; // Model
    self.aboutContentStr = JSON.stringify(self.aboutContent);

    // to localstorage
    localStorage.setItem('dataAppDefault', self.aboutContentStr);


    // Download databases. ===============================================

    var dbAboutEdited = localStorage.getItem('dataAppEdited');
    var dbAboutDefault =  localStorage.getItem('dataAppDefault');

    // Download edited database.
    var editedDB = new File([dbAboutEdited], "dataAppEdited");
    //saveAs(editedDB);
   // Download default database.
    var defaultDB = new File([dbAboutDefault], "dataAppDefault");

    // Save to downloads folder.
    // saveAs(defaultDB);
    // saveAs(editedDB);
// ==================================================================


    // // get from localstorage to load site.
    self.aboutContentObj = JSON.parse(localStorage.getItem('dataAppEdited'));
    if (!self.aboutContentObj) {
        self.aboutContentObj = JSON.parse(localStorage.getItem('dataAppDefault'));
    };
};