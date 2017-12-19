/*
about-db-save
 Save to Storage and pull data from it. ================================
*/
app.saveAboutToDB = function() {
    /*
     Browser Local Storage.
    Stringify for local storage.
    */
    var aboutContentObjStr = JSON.stringify(app.aboutContentObj);
    // add to localstorage.
    localStorage.setItem('dataAboutEdited', aboutContentObjStr);
    // app.createSomething(); goes here.
    app.createAboutH1Text();
    app.createAboutPText1();
    app.createAboutImgSrc1();
    app.createAboutImgSrc2();
    app.createAboutCtrlBtn1();
    app.createAboutCtrlBtn2();
    app.createParallaxQuotePText();
};