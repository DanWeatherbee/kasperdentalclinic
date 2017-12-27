/*
Oley-db-save
 Save to Storage and pull data from it. ================================
*/
app.saveOleyToDB = function() {
    /*
     Browser Local Storage.
    Stringify for local storage.
    */
    var oleyContentObjStr = JSON.stringify(app.oleyContentObj);
    // add to localstorage.
    localStorage.setItem('dataOleyEdited', oleyContentObjStr);
    // app.createSomething(); goes here.
    app.createOleyImgSrc1();
    app.createOleyHeaderH1Text();
    app.createOleyPText1();
};