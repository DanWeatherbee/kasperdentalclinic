$('window').ready(function() {
    // app.editSomething(); goes here.
    app.editOleyImg1();
    app.editOleyHeaderH1();
    app.editOleyP_1();
    $('#root').prepend('<i class="fa fa-edit edit-btns-edit-fixed" id="edit-oley-page" onclick="editOleyPage()"> -- Edit Page</i>');
    $('#root').prepend('<i class="fa fa-save edit-btns-save-fixed" id="save-oley-page" onclick="saveOleyPage()"> -- Save Page</i>');
    $('#root').prepend('<i class="fa fa-refresh edit-btns-default-fixed" id="default-oley-page" onclick="clearOleyPage()"> -- Default</i>');
    editOleyPage();
    $('.fa').hide();
    $('#edit-oley-page').fadeIn();

});
var editOleyPage = function() {
    $('.fa').fadeIn();
    $('#edit-oley-page').hide();
};
var saveOleyPage = function() {

    // Download databases. ===============================================

    var dbOleyEdited = localStorage.getItem('dataOleyEdited');
    var dbOleyDefault = localStorage.getItem('dataOleyDefault');

    // Download edited database.
    var editedOleyDB = new File([dbOleyEdited], "dataOleyEdited.json");

    // Download default database.
    var defaultOleyDB = new File([dbOleyDefault], "dataOleyDefault.json");

    // Save to downloads folder.
    saveAs(defaultOleyDB);
    saveAs(editedOleyDB);
    $('#save-oley-page').hide();
    $('#edit-oley-page').fadeIn();
};

// Reset to default.
var clearOleyPage = function() {
    localStorage.clear();
    location.reload();
};

// ==================================================================