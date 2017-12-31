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

};