$('window').ready(function() {
    // app.editSomething(); goes here.
    app.editAboutH1();
    app.editAboutP1();
    app.editAboutImg1();
    app.editAboutImg2();
    app.editAboutBtn1();
    app.editAboutBtn2();
    app.editAboutParallaxQuote();
    $('#root').prepend('<i class="fa fa-edit edit-btns-edit-fixed" id="edit-about-page" onclick="editAboutPage()"> -- Edit Page</i>');
    $('#root').prepend('<i class="fa fa-save edit-btns-save-fixed" id="save-about-page" onclick="saveAboutPage()"> -- Save Page</i>');
        $('#root').prepend('<i class="fa fa-refresh edit-btns-default-fixed" id="default-about-page" onclick="clearAboutPage()"> -- Default</i>');
    editAboutPage();
    $('.fa').hide();
    $('#edit-about-page').fadeIn();
    $('#about-main-parallax-quote-box-icon-left').fadeIn();
    $('#about-main-parallax-quote-box-icon-right').fadeIn();
});
var editAboutPage = function() {
    $('.fa').fadeIn();
    $('#edit-about-page').hide();
    $('#default-about-page').hide();
};

var saveAboutPage = function() {

    // Download databases. ===============================================

    var dbAboutEdited = localStorage.getItem('dataAboutEdited');
    var dbAboutDefault = localStorage.getItem('dataAboutDefault');

    // Download edited database.
    var editedAboutDB = new File([dbAboutEdited], "dataAboutEdited.json");

    // Download default database.
    var defaultAboutDB = new File([dbAboutDefault], "dataAboutDefault.json");

    // Save to downloads folder.
    saveAs(defaultAboutDB);
    saveAs(editedAboutDB);
    $('#save-about-page').hide();
    $('#edit-about-page').fadeIn();
    $('#default-about-page').fadeIn();
};

// Reset to default.
var clearAboutPage = function() {
    localStorage.clear();
    location.reload();
};
 // ==================================================================