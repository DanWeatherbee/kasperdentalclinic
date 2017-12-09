$('window').ready(function() {
    // app.editIndexHeaderText();
    $('#root').prepend('<i class="fa fa-edit edit-btns" id="edit-Index-page" onclick="editIndexPage()"> -- Edit Page</i>');
    $('#root').prepend('<i class="fa fa-save edit-btns" id="save-Index-page" onclick="saveIndexPage()"> -- Save Page</i>');
    $('#root').append(contentFooter);

    editIndexPage();
    $('.edit-btns').hide();
    $('#index-move-to-parallax-icon').show();
    $('#edit-Index-page').fadeIn();
});

var editIndexPage = function() {
    $('.fa').fadeIn();
    $('#edit-Index-page').fadeOut();
    alert('Hi Sharon or Jason, this edit index page is not complete. It will not allow editing yet. About page you can try it is working.');
};

var saveIndexPage = function() {
    console.log('running')
    // Download databases. ===============================================

    var dbIndexEdited = localStorage.getItem('dataIndexEdited');
    var dbIndexDefault = localStorage.getItem('dataIndexDefault');

    // Download edited database.
    var editedDB = new File([dbIndexEdited], "dataIndexEdited");
    //saveAs(editedDB);
    // Download default database.
    var defaultDB = new File([dbIndexDefault], "dataIndexDefault");

    // Save to downloads folder.
    saveAs(defaultDB);
    saveAs(editedDB);
    $('#save-Index-page').fadeOut();
    $('#edit-Index-page').fadeIn();
    // ==================================================================
};