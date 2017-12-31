$('window').ready(function() {
    // app.editSomething(); goes here.

    $('#root').prepend('<i class="fa fa-edit edit-btns-fixed" id="edit-contact-page" onclick="editContactPage()"> -- Edit Page</i>');
    $('#root').prepend('<i class="fa fa-save edit-btns-fixed" id="save-contact-page" onclick="saveContactPage()"> -- Save Page</i>');
    editContactPage();
    $('.fa').hide();
    $('#edit-contact-page').fadeIn();

});
var editContactPage = function() {
    $('.fa').fadeIn();
    $('#edit-contact-page').fadeOut();
};
var saveContactPage = function() {

    // Download databases. ===============================================

    var dbContactEdited = localStorage.getItem('dataContactEdited');
    var dbContactDefault = localStorage.getItem('dataContactDefault');

    // Download edited database.
    var editedContactDB = new File([dbContactEdited], "dataContactEdited");

    // Download default database.
    var defaultContactDB = new File([dbContactDefault], "dataContactDefault");

    // Save to downloads folder.
    saveAs(defaultContactDB);
    saveAs(editedContactDB);
    $('#save-contact-page').fadeOut();
    $('#edit-contact-page').fadeIn();
    // ==================================================================
};