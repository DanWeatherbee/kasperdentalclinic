/*
 Layout builder Class for Denture
*/
CreateDenturePageClass = function(
    CreateDenturePage,
    dentureContentStr,
    dentureContentObj
) {
    var self = this;
    self.dentureContent = CreateDenturePage; // Model
    self.dentureContentStr = JSON.stringify(self.dentureContent);

    // to localstorage
    localStorage.setItem('dataDentureDefault', self.dentureContentStr);


    // Download databases. ===============================================

    var dbDentureEdited = localStorage.getItem('dataDentureEdited');
    var dbDentureDefault =  localStorage.getItem('dataDentureDefault');

    // Download edited database.
    var editedDentureDB = new File([dbDentureEdited], "dataDentureEdited");
    //saveAs(editedDB);
   // Download default database.
    var defaultDentureDB = new File([dbDentureDefault], "dataDentureDefault");
// ==================================================================


    // // get from localstorage to load site.
    self.dentureContentObj = JSON.parse(localStorage.getItem('dataDentureEdited'));
    if (!self.dentureContentObj) {
        self.dentureContentObj = JSON.parse(localStorage.getItem('dataDentureDefault'));
    };
};