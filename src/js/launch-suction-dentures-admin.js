$('window').ready(function() {
    app.editHeaderSuctionDenturesH1();
    app.editSuctionDenturesImg1Certified();
    app.editSuctionDenturesVideo1();
    $('#root').prepend('<i class="fa fa-edit edit-btns-fixed" id="edit-suction-dentures-page" onclick="editSuctionDenturesPage()"> -- Edit Page</i>');
    $('#root').prepend('<i class="fa fa-save edit-btns-fixed" id="save-suction-dentures-page" onclick="saveSuctionDenturesPage()"> -- Save Page</i>');
    editSuctionDenturesPage();
    $('.edit-btns').hide();
    $('#edit-suction-dentures-page').fadeIn();
});
var editSuctionDenturesPage = function() {
    $('.fa').fadeIn();
    $('#edit-suction-dentures-page').fadeOut();
};
var saveSuctionDenturesPage = function() {
    // Download databases. ===============================================

    var dbSuctionDenturesEdited = localStorage.getItem('dataSuctionDenturesEdited');
    var dbSuctionDenturesDefault = localStorage.getItem('dataSuctionDenturesDefault');

    // Download edited database.
    var editedSuctionDenturesDB = new File([dbSuctionDenturesEdited], "dataSuctionDenturesEdited");

    // Download default database.
    var defaultSuctionDenturesDB = new File([dbSuctionDenturesDefault], "dataSuctionDenturesDefault");

    // Save to downloads folder.
    saveAs(editedSuctionDenturesDB);
    saveAs(defaultSuctionDenturesDB);
    $('#save-suction-dentures-page').fadeOut();
    $('#edit-suction-dentures-page').fadeIn();
    // ==================================================================
};