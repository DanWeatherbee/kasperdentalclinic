$('window').ready(function() {
    /*
    from step 3
    for every conrol you make you must then call it here to initiate.
        */
    app.editServicesH1();
    app.editServicesH3();
    app.editServicesP();
    app.editServicesUl();
    app.editServicesParallaxQuote();
    /*
    Whipe out old and do one at a time.=======================
    Step 4 configure this page- replace word services with services on everything.
    Step 5 add your new scripts to your page.html -- check services.html for model of script load order.
    Go to db-content-services for step 6.
    Begin appendding buttons.
*/
    $('#root').prepend('<i class="fa fa-edit edit-btns" id="edit-services-page" onclick="editServicesPage()"> -- Edit Page</i>');
    $('#root').prepend('<i class="fa fa-save edit-btns" id="save-services-page" onclick="saveServicesPage()"> -- Save Page</i>');

    // add footer
    $('#root').append(contentFooter);

    editServicesPage();
    $('.edit-btns').hide();
    $('#services-move-to-parallax-icon').show();
    $('#edit-services-page').fadeIn();
});

var editServicesPage = function() {
    $('.fa').fadeIn();
    $('#edit-services-page').fadeOut();
};

var saveServicesPage = function() {
    // Download databases. ===============================================

    var dbServicesEdited = localStorage.getItem('dataServicesEdited');
    var dbServicesDefault = localStorage.getItem('dataServicesDefault');

    // Download edited database.
    var defaultServicesDB = new File([dbServicesEdited], "dataServicesEdited");

    // Download default database.
    var editedServicesDB = new File([dbServicesDefault], "dataServicesDefault");

    // Save to downloads folder.
    saveAs(defaultServicesDB);
    saveAs(editedServicesDB);
    $('#save-services-page').fadeOut();
    $('#edit-services-page').fadeIn();
    // ==================================================================
};