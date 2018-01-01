$('window').ready(function() {
    // app.editSomething(); goes here.
    app.editTestimonialsHeaderH1();
    app.editTestimonialsP1();
    app.editTestimonialsP2();
    app.editTestimonialsP3();
    app.editTestimonialsP4();
    $('#root').prepend('<i class="fa fa-edit edit-btns-fixed" id="edit-testimonials-page" onclick="editTestimonialsPage()"> -- Edit Page</i>');
    $('#root').prepend('<i class="fa fa-save edit-btns-fixed" id="save-testimonials-page" onclick="saveTestimonialsPage()"> -- Save Page</i>');
    editTestimonialsPage();
    $('.fa').hide();
    $('#edit-testimonials-page').fadeIn();
    $('.fa-quote-left').fadeIn();
    $('.fa-quote-right').fadeIn();
});
var editTestimonialsPage = function() {
    $('.fa').fadeIn();
    $('#edit-testimonials-page').fadeOut();
};
var saveTestimonialsPage = function() {

    // Download databases. ===============================================

    var dbTestimonialsEdited = localStorage.getItem('dataTestimonialsEdited');
    var dbTestimonialsDefault = localStorage.getItem('dataTestimonialsDefault');

    // Download edited database.
    var editedTestimonialsDB = new File([dbTestimonialsEdited], "dataTestimonialsEdited.json");

    // Download default database.
    var defaultTestimonialsDB = new File([dbTestimonialsDefault], "dataTestimonialsDefault.json");

    // Save to downloads folder.
    saveAs(defaultTestimonialsDB);
    saveAs(editedTestimonialsDB);
    $('#save-testimonials-page').fadeOut();
    $('#edit-testimonials-page').fadeIn();
    // ==================================================================
};