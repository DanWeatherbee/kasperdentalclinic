$('window').ready(function() {
    // app.editSomething(); goes here.
    app.editContactHeaderH1();
    app.editContactP_1();
    app.editContactP_2();
    app.editContactP_3();
    app.editContactBtn1();
    app.editContactIframe1();
    $('#root').prepend('<i class="fa fa-edit edit-btns-edit-fixed" id="edit-contact-page" onclick="editContactPage()"> -- Edit Page</i>');
    $('#root').prepend('<i class="fa fa-save edit-btns-save-fixed" id="save-contact-page" onclick="saveContactPage()"> -- Save Page</i>');
    $('#root').prepend('<i class="fa fa-refresh edit-btns-default-fixed" id="default-contact-page" onclick="clearContactPage()"> -- Default</i>');
    editContactPage();
    $('.fa').hide();
    $('#edit-contact-page').fadeIn();
});
var editContactPage = function() {
    $('.fa').fadeIn();
    $('#edit-contact-page').hide();
};
var saveContactPage = function() {

    // Download databases. ===============================================

    var dbContactEdited = localStorage.getItem('dataContactEdited');
    var dbContactDefault = localStorage.getItem('dataContactDefault');

    // Download edited database.
    var editedContactDB = new File([dbContactEdited], "dataContactEdited.json");

    // Download default database.
    var defaultContactDB = new File([dbContactDefault], "dataContactDefault.json");

    // Save to downloads folder.
    saveAs(defaultContactDB);
    saveAs(editedContactDB);
    $('#save-contact-page').hide();
    $('#edit-contact-page').fadeIn();

};

// Reset to default.
var clearContactPage = function() {
    localStorage.clear();
    location.reload();
};

// ==================================================================