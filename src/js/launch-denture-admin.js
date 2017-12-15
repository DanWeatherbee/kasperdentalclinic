$('window').ready(function() {
    app.editHeaderDentureH1();
    app.editDentureH2_1();
    app.editDentureH2_2();
    app.editDentureH2_3();
    app.editDentureP1();
    app.editDentureP2();
    app.editDentureP3();
    app.editDentureIframe1();
    app.editDentureIframe2();
    app.editDentureIframe3();



    $('#root').prepend('<i class="fa fa-edit edit-btns-fixed" id="edit-denture-page" onclick="editDenturePage()"> -- Edit Page</i>');
    $('#root').prepend('<i class="fa fa-save edit-btns-fixed" id="save-denture-page" onclick="saveDenturePage()"> -- Save Page</i>');

    editDenturePage();
    $('.edit-btns').hide();
    $('#edit-denture-page').fadeIn();
});

var editDenturePage = function() {
    $('.fa').fadeIn();
    $('#edit-denture-page').fadeOut();

};

var saveDenturePage = function() {
    // Download databases. ===============================================

    var dbDentureEdited = localStorage.getItem('dataDentureEdited');
    var dbDentureDefault = localStorage.getItem('dataDentureDefault');

    // Download edited database.
    var defaultDentureDB = new File([dbDentureEdited], "dataDentureEdited");

    // Download default database.
    var editedDentureDB = new File([dbDentureDefault], "dataDentureDefault");

    // Save to downloads folder.
    saveAs(defaultDentureDB);
    saveAs(editedDentureDB);
    $('#save-denture-page').fadeOut();
    $('#edit-denture-page').fadeIn();
    // ==================================================================
};