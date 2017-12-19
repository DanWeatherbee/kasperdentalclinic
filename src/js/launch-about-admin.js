$('window').ready(function() {
    // app.editSomething(); goes here.
    app.editAboutH1();
    app.editAboutP1();
    app.editAboutImg1();
    app.editAboutImg2();
    app.editAboutBtn1();
    app.editAboutBtn2();
    app.editAboutParallaxQuote();
    $('#root').prepend('<i class="fa fa-edit edit-btns-fixed" id="edit-about-page" onclick="editAboutPage()"> -- Edit Page</i>');
    $('#root').prepend('<i class="fa fa-save edit-btns-fixed" id="save-about-page" onclick="saveAboutPage()"> -- Save Page</i>');
    editAboutPage();
    $('.fa').hide();
    $('#edit-about-page').fadeIn();

});
var editAboutPage = function() {
    $('.fa').fadeIn();
    $('#edit-about-page').fadeOut();
};

var saveAboutPage = function() {

    // Download databases. ===============================================

    var dbAboutEdited = localStorage.getItem('dataAboutEdited');
    var dbAboutDefault = localStorage.getItem('dataAboutDefault');

    // Download edited database.
    var editedAboutDB = new File([dbAboutEdited], "dataAboutEdited");

    // Download default database.
    var defaultAboutDB = new File([dbAboutDefault], "dataAboutDefault");

    // Save to downloads folder.
    saveAs(defaultAboutDB);
    saveAs(editedAboutDB);
    $('#save-about-page').fadeOut();
    $('#edit-about-page').fadeIn();
    // ==================================================================
};