/*
before-db-save
 Save to Storage and pull data from it. ================================
*/
app.saveBeforeToDB = function() {
    /*
     Browser Local Storage.
    Stringify for local storage.
    */
    var beforeContentObjStr = JSON.stringify(app.beforeContentObj);
    // add to localstorage.
    localStorage.setItem('dataBeforeEdited', beforeContentObjStr);
    // app.createSomething(); goes here.
    app.createBeforeH1Text();
    app.createBeforeImgSrc1();
    app.createBeforeImgSrc2();
    app.createBeforeImgSrc3();
    app.createBeforeImgSrc4();
    app.createBeforeImgSrc5();
    app.createBeforeImgSrc6();



    location.reload();
};