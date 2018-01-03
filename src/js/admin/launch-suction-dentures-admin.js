$('window').ready(function() {
    app.editHeaderSuctionDenturesH1();
    app.editSuctionDenturesImg1Certified();
    app.editSuctionDenturesVideo1();
    app.editSuctionDenturesVideo2();
    app.editSuctionDenturesUl();
    app.editSuctionDenturesP1();
    $('#root').prepend('<i class="fa fa-edit edit-btns-edit-fixed" id="edit-suction-dentures-page" onclick="editSuctionDenturesPage()"> -- Edit Page</i>');
    $('#root').prepend('<i class="fa fa-save edit-btns-save-fixed" id="save-suction-dentures-page" onclick="saveSuctionDenturesPage()"> -- Save Page</i>');
    $('#root').prepend('<i class="fa fa-refresh edit-btns-default-fixed" id="default-suction-page" onclick="clearSuctionPage()"> -- Default</i>');
    editSuctionDenturesPage();
    $('.fa').hide();
    $('#edit-suction-dentures-page').fadeIn();
});
var editSuctionDenturesPage = function() {
    $('.fa').fadeIn();
    $('#edit-suction-dentures-page').hide();
};
var saveSuctionDenturesPage = function() {
    // Download databases. ===============================================

    var dbSuctionDenturesEdited = localStorage.getItem('dataSuctionDenturesEdited');
    var dbSuctionDenturesDefault = localStorage.getItem('dataSuctionDenturesDefault');

    // Download edited database.
    var editedSuctionDenturesDB = new File([dbSuctionDenturesEdited], "dataSuctionDenturesEdited.json");

    // Download default database.
    var defaultSuctionDenturesDB = new File([dbSuctionDenturesDefault], "dataSuctionDenturesDefault.json");

    // Save to downloads folder.
    saveAs(editedSuctionDenturesDB);
    saveAs(defaultSuctionDenturesDB);
    $('#save-suction-dentures-page').hide();
    $('#edit-suction-dentures-page').fadeIn();
};

// Reset to default.
var clearSuctionPage = function() {
    localStorage.clear();
    location.reload();
};

// ==================================================================