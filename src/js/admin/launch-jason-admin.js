$('window').ready(function() {
    // app.editSomething(); goes here.
    app.editJasonImg1();
    app.editJasonHeaderH1();
    app.editJasonP_1();

    $('#root').prepend('<i class="fa fa-edit edit-btns-edit-fixed" id="edit-jason-page" onclick="editJasonPage()"> -- Edit Page</i>');
    $('#root').prepend('<i class="fa fa-save edit-btns-save-fixed" id="save-jason-page" onclick="saveJasonPage()"> -- Save Page</i>');
    $('#root').prepend('<i class="fa fa-refresh edit-btns-default-fixed" id="default-jason-page" onclick="clearJasonPage()"> -- Default</i>');
    editJasonPage();
    $('.fa').hide();
    $('#edit-jason-page').fadeIn();

});
var editJasonPage = function() {
    $('.fa').fadeIn();
    $('#edit-jason-page').hide();
};
var saveJasonPage = function() {

    // Download databases. ===============================================

    var dbJasonEdited = localStorage.getItem('dataJasonEdited');
    var dbJasonDefault = localStorage.getItem('dataJasonDefault');

    // Download edited database.
    var editedJasonDB = new File([dbJasonEdited], "dataJasonEdited.json");

    // Download default database.
    var defaultJasonDB = new File([dbJasonDefault], "dataJasonDefault.json");

    // Save to downloads folder.
    saveAs(defaultJasonDB);
    saveAs(editedJasonDB);
    $('#save-jason-page').hide();
    $('#edit-jason-page').fadeIn();
};

// Reset to default.
var clearJasonPage = function() {
    localStorage.clear();
    location.reload();
};

// ==================================================================