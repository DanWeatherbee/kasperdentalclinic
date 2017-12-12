$('window').ready(function() {
    app.editAboutParallax();
    app.editAboutHeaderText();
    app.editAboutHeaderPText();

    $('#root').prepend('<br /><i class="fa fa-edit edit-btns-fixed" id="edit-about-page" onclick="editAboutPage()"> -- Edit Page</i>');
    $('#root').prepend('<br /><i class="fa fa-save edit-btns-fixed" id="save-about-page" onclick="saveAboutPage()"> -- Save Page</i>');
    $('#root').append(contentFooter);

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

    var dbAboutEdited = localStorage.getItem('dataAppEdited');
    var dbAboutDefault = localStorage.getItem('dataAppDefault');

    // Download edited database.
    var editedDB = new File([dbAboutEdited], "dataAppEdited");
    //saveAs(editedDB);
    // Download default database.
    var defaultDB = new File([dbAboutDefault], "dataAppDefault");

    // Save to downloads folder.
    saveAs(defaultDB);
    saveAs(editedDB);
        $('#save-about-page').fadeOut();
        $('#edit-about-page').fadeIn();
    // ==================================================================
};