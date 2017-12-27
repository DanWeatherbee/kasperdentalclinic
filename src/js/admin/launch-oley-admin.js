$('window').ready(function() {
    // app.editSomething(); goes here.
    app.editOleyImg1();
    app.editOleyHeaderH1();
    app.editOleyP_1();

    $('#root').prepend('<i class="fa fa-edit edit-btns-fixed" id="edit-oley-page" onclick="editOleyPage()"> -- Edit Page</i>');
    $('#root').prepend('<i class="fa fa-save edit-btns-fixed" id="save-oley-page" onclick="saveOleyPage()"> -- Save Page</i>');
    editOleyPage();
    $('.fa').hide();
    $('#edit-oley-page').fadeIn();

});
var editOleyPage = function() {
    $('.fa').fadeIn();
    $('#edit-oley-page').fadeOut();
};
var saveOleyPage = function() {

    // Download databases. ===============================================

    var dbOleyEdited = localStorage.getItem('dataOleyEdited');
    var dbOleyDefault = localStorage.getItem('dataOleyDefault');

    // Download edited database.
    var editedOleyDB = new File([dbOleyEdited], "dataOleyEdited");

    // Download default database.
    var defaultOleyDB = new File([dbOleyDefault], "dataOleyDefault");

    // Save to downloads folder.
    saveAs(defaultOleyDB);
    saveAs(editedOleyDB);
    $('#save-oley-page').fadeOut();
    $('#edit-oley-page').fadeIn();
    // ==================================================================
};