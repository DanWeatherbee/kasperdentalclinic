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
    $('#root').prepend('<i class="fa fa-edit edit-btns-edit-fixed" id="edit-denture-page" onclick="editDenturePage()"> -- Edit Page</i>');
    $('#root').prepend('<i class="fa fa-save edit-btns-save-fixed" id="save-denture-page" onclick="saveDenturePage()"> -- Save Page</i>');
    $('#root').prepend('<i class="fa fa-refresh edit-btns-default-fixed" id="default-denture-page" onclick="clearDenturePage()"> -- Default</i>');
    editDenturePage();
    $('.fa').hide();
    $('#edit-denture-page').fadeIn();
});

var editDenturePage = function() {
    $('.fa').fadeIn();
    $('#edit-denture-page').hide();
    $('#default-denture-page').hide();
};

var saveDenturePage = function() {
    // Download databases. ===============================================

    var dbDentureEdited = localStorage.getItem('dataDentureEdited');
    var dbDentureDefault = localStorage.getItem('dataDentureDefault');

    // Download edited database.
    var defaultDentureDB = new File([dbDentureEdited], "dataDentureEdited.json");

    // Download default database.
    var editedDentureDB = new File([dbDentureDefault], "dataDentureDefault.json");

    // Save to downloads folder.
    saveAs(defaultDentureDB);
    saveAs(editedDentureDB);
    $('#save-denture-page').hide();
    $('#edit-denture-page').fadeIn();
    $('#default-denture-page').fadeIn();

};

// Reset to default.
var clearDenturePage = function() {
    localStorage.clear();
    location.reload();
};

// ==================================================================