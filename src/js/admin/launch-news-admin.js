$('window').ready(function() {
    // app.editSomething(); goes here.
    app.editNewsHeaderH1();
    app.editNewsH3_1();
    app.editNewsH3_2();
    app.editNewsH3_3();
    app.editNewsP_1();
    app.editNewsP_2();
    app.editNewsP_3();
    app.editNewsP_4();
    app.editNewsP_5();
    app.editNewsImg1();
    $('#root').prepend('<i class="fa fa-edit edit-btns-edit-fixed" id="edit-news-page" onclick="editNewsPage()"> -- Edit Page</i>');
    $('#root').prepend('<i class="fa fa-save edit-btns-save-fixed" id="save-news-page" onclick="saveNewsPage()"> -- Save Page</i>');
    $('#root').prepend('<i class="fa fa-refresh edit-btns-default-fixed" id="default-news-page" onclick="clearNewsPage()"> -- Default</i>');
    editNewsPage();
    $('.fa').hide();
    $('#edit-news-page').fadeIn();
    $('.fa-quote-left').fadeIn();
    $('.fa-quote-right').fadeIn();
});
var editNewsPage = function() {
    $('.fa').fadeIn();
    $('#edit-news-page').hide();
    $('#default-news-page').hide();
};
var saveNewsPage = function() {

    // Download databases. ===============================================

    var dbNewsEdited = localStorage.getItem('dataNewsEdited');
    var dbNewsDefault = localStorage.getItem('dataNewsDefault');

    // Download edited database.
    var editedNewsDB = new File([dbNewsEdited], "dataNewsEdited.json");

    // Download default database.
    var defaultNewsDB = new File([dbNewsDefault], "dataNewsDefault.json");

    // Save to downloads folder.
    saveAs(defaultNewsDB);
    saveAs(editedNewsDB);
    $('#save-news-page').hide();
    $('#edit-news-page').fadeIn();
    $('#default-news-page').fadeIn();

};

// Reset to default.
var clearNewsPage = function() {
    localStorage.clear();
    location.reload();
};

// ==================================================================