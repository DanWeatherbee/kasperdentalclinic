/*
Written in a Object Oriented pattern OOP by Dan Weatherbee
index-db-save
 Save to Storage and pull data from it. ================================
*/

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
    app.createHeaderH2Text();
    app.createHeaderImgSrc();
    app.createHeaderH3Text();
    app.createHeaderPText();
    app.createHeaderParallaxQuotePText();
};