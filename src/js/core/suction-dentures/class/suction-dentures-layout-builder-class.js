/*
 Layout builder Class for Suction Dentures
*/
CreateSuctionDenturesPageClass = function(
    CreateSuctionDenturesPage,
    suctionDenturesContentStr,
    suctionDenturesContentObj
) {
    var self = this;
    self.suctionDenturesContent = CreateSuctionDenturesPage; // Model
    self.suctionDenturesContentStr = JSON.stringify(self.suctionDenturesContent);

    // to localstorage
    localStorage.setItem('dataSuctionDenturesDefault', self.suctionDenturesContentStr);


    // Download databases. ===============================================

    var dbSuctionDenturesEdited = localStorage.getItem('dataSuctionDenturesEdited');
    var dbSuctionDenturesDefault =  localStorage.getItem('dataSuctionDenturesDefault');

    // Download edited database.
    var editedSuctionDenturesDB = new File([dbSuctionDenturesEdited], "dataSuctionDenturesEdited");
    //saveAs(editedDB);
   // Download default database.
    var defaultSuctionDenturesDB = new File([dbSuctionDenturesDefault], "dataSuctionDenturesDefault");
// ==================================================================


    // // get from localstorage to load site.
    self.suctionDenturesContentObj = JSON.parse(localStorage.getItem('dataSuctionDenturesEdited'));
    if (!self.suctionDenturesContentObj) {
        self.suctionDenturesContentObj = JSON.parse(localStorage.getItem('dataSuctionDenturesDefault'));
    };
};