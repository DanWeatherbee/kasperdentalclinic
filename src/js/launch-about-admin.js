$('window').ready(function() {
    app.editAboutParallax();
    app.editAboutHeaderText();
    app.editAboutHeaderPText();
    $('#root').prepend('<i class="fa fa-edit" id="edit-about-page" onclick="editAboutPage()"> -- Edit Page</i>');
    $('#root').append(contentFooter);
    $('.fa').hide();
    $('#edit-about-page').fadeIn()
    app.editAboutPage();
});
var editAboutPage = function() {
$('.fa').fadeIn();
};