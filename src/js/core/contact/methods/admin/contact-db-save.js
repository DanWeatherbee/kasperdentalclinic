/*
contact-db-save
 Save to Storage and pull data from it. ================================
*/
app.saveContactToDB = function() {
    /*
     Browser Local Storage.
    Stringify for local storage.
    */
    var contactContentObjStr = JSON.stringify(app.contactContentObj);
    // add to localstorage.
    localStorage.setItem('dataContactEdited', contactContentObjStr);
    // app.createSomething(); goes here.
    app.createContactHeaderH1Text();
    app.createContactPText1();
    app.editContactP_1();
    app.editContactP_2();
    app.editContactP_3();
    app.createContactCtrlBtn1();
    app.createContactIframe1Text();
};