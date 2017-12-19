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
    localStorage.setItem('dataAboutDefault', self.aboutContentStr);

    // Download databases. ===============================================

    var dbAboutEdited = localStorage.getItem('dataAboutEdited');
    var dbAboutDefault =  localStorage.getItem('dataAboutDefault');

    // Download edited database.
    var editedAboutDB = new File([dbAboutEdited], "dataAboutEdited");

   // Download default database.
    var defaultAboutDB = new File([dbAboutDefault], "dataAboutDefault");

    // Save to downloads folder.
// ==================================================================

    // // get from localstorage to load site.
    self.aboutContentObj = JSON.parse(localStorage.getItem('dataAboutEdited'));
    if (!self.aboutContentObj) {
        self.aboutContentObj = JSON.parse(localStorage.getItem('dataAboutDefault'));
    };
};