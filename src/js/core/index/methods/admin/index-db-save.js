// Save to Storage and pull dtat from it. ================================
app.saveIndexToDB = function() {
    /*
     Browser Local Storage.
    Stringify for local storage.
    */
    console.log()
    var indexContentObjStr = JSON.stringify(app.indexContentObj);
    // add to localstorage.
    localStorage.setItem('dataIndexEdited', indexContentObjStr);
    app.createHeaderH1Text();

};