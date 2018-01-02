$('window').ready(function() {
    // app.editSomething(); goes here.
    app.editBeforeHeaderH1();
    app.editBeforeImg1();
    app.editBeforeImg2();
    app.editBeforeImg3();
    app.editBeforeImg4();
    app.editBeforeImg5();
    app.editBeforeImg6();
    $('#root').prepend('<i class="fa fa-edit edit-btns-edit-fixed" id="edit-before-page" onclick="editBeforePage()"> -- Edit Page</i>');
    $('#root').prepend('<i class="fa fa-save edit-btns-save-fixed" id="save-before-page" onclick="saveBeforePage()"> -- Save Page</i>');
    $('#root').prepend('<i class="fa fa-refresh edit-btns-default-fixed" id="default-before-page" onclick="clearBeforePage()"> -- Default</i>');
    editBeforePage();
    $('.fa').hide();
    $('#edit-before-page').fadeIn();
    $('#before-main-parallax-quote-box-icon-left').fadeIn();
    $('#before-main-parallax-quote-box-icon-right').fadeIn();
});
var editBeforePage = function() {
    $('.fa').fadeIn();
    $('#edit-before-page').hide();
    $('#default-before-page').hide();
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
    $('#save-before-page').hide();
    $('#edit-before-page').fadeIn();
    $('#default-before-page').fadeIn();

};


// Reset to default.
var clearBeforePage = function() {
    localStorage.clear();
    location.reload();
};

// ==================================================================