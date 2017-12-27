/*
jason-db-save
 Save to Storage and pull data from it. ================================
*/
app.saveJasonToDB = function() {
    /*
     Browser Local Storage.
    Stringify for local storage.
    */
    var jasonContentObjStr = JSON.stringify(app.jasonContentObj);
    // add to localstorage.
    localStorage.setItem('dataJasonEdited', jasonContentObjStr);
    // app.createSomething(); goes here.
    app.createJasonImgSrc1();
    app.createJasonHeaderH1Text();
    app.createJasonPText1();
};