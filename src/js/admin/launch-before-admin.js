$('window').ready(function() {
    // app.editSomething(); goes here.
    app.editBeforeHeaderH1();
    app.editBeforeImg1();
    app.editBeforeImg2();
    app.editBeforeImg3();
    app.editBeforeImg4();
    app.editBeforeImg5();
    app.editBeforeImg6();
    $('#root').prepend('<i class="fa fa-edit edit-btns-fixed" id="edit-before-page" onclick="editBeforePage()"> -- Edit Page</i>');
    $('#root').prepend('<i class="fa fa-save edit-btns-fixed" id="save-before-page" onclick="saveBeforePage()"> -- Save Page</i>');
    editBeforePage();
    $('.fa').hide();
    $('#edit-before-page').fadeIn();
    $('#before-main-parallax-quote-box-icon-left').fadeIn();
    $('#before-main-parallax-quote-box-icon-right').fadeIn();
});
var editBeforePage = function() {
    $('.fa').fadeIn();
    $('#edit-before-page').fadeOut();
};

var saveBeforePage = function() {

    // Download databases. ===============================================

    var dbBeforeEdited = localStorage.getItem('dataBeforeEdited');
    var dbBeforeDefault = localStorage.getItem('dataBeforeDefault');

    // Download edited database.
    var editedBeforeDB = new File([dbBeforeEdited], "dataBeforeEdited.json");

    // Download default database.
    var defaultBeforeDB = new File([dbBeforeDefault], "dataBeforeDefault.json");

    // Save to downloads folder.
    saveAs(defaultBeforeDB);
    saveAs(editedBeforeDB);
    $('#save-before-page').fadeOut();
    $('#edit-before-page').fadeIn();
    // ==================================================================
};