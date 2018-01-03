$('window').ready(function() {
    app.editIndexHeaderText();
    app.editIndexHeaderH2Text();
    app.editIndexHeaderImgJason();
    app.editIndexHeaderH3Text();
    app.editIndexHeaderPText();
    app.editIndexParallaxQuote();
    $('#root').prepend('<i class="fa fa-edit edit-btns-edit-fixed" id="edit-Index-page" onclick="editIndexPage()"> -- Edit Page</i>');
    $('#root').prepend('<i class="fa fa-save edit-btns-save-fixed" id="save-Index-page" onclick="saveIndexPage()"> -- Save Page</i>');
    $('#root').prepend('<i class="fa fa-refresh edit-btns-default-fixed" id="default-Index-page" onclick="clearIndexPage()"> -- Default</i>');
    editIndexPage();
    $('.fa').hide();
    $('#index-move-to-parallax-icon').show();
    $('#edit-Index-page').fadeIn();
});

var editIndexPage = function() {
    $('.fa').fadeIn();
    $('#edit-Index-page').hide();
};

var saveIndexPage = function() {

    // Download databases. ===============================================

    var dbIndexEdited = localStorage.getItem('dataIndexEdited');
    var dbIndexDefault = localStorage.getItem('dataIndexDefault');

    // Download edited database.
    var defaultIndexDB = new File([dbIndexEdited], "dataIndexEdited.json");
    //saveAs(editedDB);
    // Download default database.
    var editedIndexDB = new File([dbIndexDefault], "dataIndexDefault.json");

    // Save to downloads folder.
    saveAs(defaultIndexDB);
    saveAs(editedIndexDB);
    $('#save-Index-page').hide();
    $('#edit-Index-page').fadeIn();
};

// Reset to default.
var clearIndexPage = function() {
    localStorage.clear();
    location.reload();
};
// ==================================================================