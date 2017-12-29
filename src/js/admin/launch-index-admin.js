$('window').ready(function() {
    app.editIndexHeaderText();
    app.editIndexHeaderH2Text();
    app.editIndexHeaderImgJason();
    app.editIndexHeaderH3Text();
    app.editIndexHeaderPText();
    app.editIndexParallaxQuote();
    $('#root').prepend('<i class="fa fa-edit edit-btns-fixed" id="edit-Index-page" onclick="editIndexPage()"> -- Edit Page</i>');
    $('#root').prepend('<i class="fa fa-save edit-btns-fixed" id="save-Index-page" onclick="saveIndexPage()"> -- Save Page</i>');
    editIndexPage();
    $('.edit-btns').hide();
    $('#index-move-to-parallax-icon').show();
    $('#edit-Index-page').fadeIn();
});

var editIndexPage = function() {
    $('.fa').fadeIn();
    $('#edit-Index-page').fadeOut();
};

var saveIndexPage = function() {
    console.log('running saveIndexPage')
    // Download databases. ===============================================

    var dbIndexEdited = localStorage.getItem('dataIndexEdited');
    var dbIndexDefault = localStorage.getItem('dataIndexDefault');

    // Download edited database.
    var defaultIndexDB = new File([dbIndexEdited], "dataIndexEdited");
    //saveAs(editedDB);
    // Download default database.
    var editedIndexDB = new File([dbIndexDefault], "dataIndexDefault");

    // Save to downloads folder.
    saveAs(defaultIndexDB);
    saveAs(editedIndexDB);
    $('#save-Index-page').fadeOut();
    $('#edit-Index-page').fadeIn();
    // ==================================================================
};
