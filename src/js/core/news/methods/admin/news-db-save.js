/*
news-db-save
 Save to Storage and pull data from it. ================================
*/
app.saveNewsToDB = function() {
    /*
     Browser Local Storage.
    Stringify for local storage.
    */
    var newsContentObjStr = JSON.stringify(app.newsContentObj);
    // add to localstorage.
    localStorage.setItem('dataNewsEdited', newsContentObjStr);
    // app.createSomething(); goes here.
    app.createNewsHeaderH1Text();
    app.createNewsH3Text1();
    app.createNewsHeaderH3Text2();
    app.createNewsHeaderH3Text3();
    app.createNewsPText1();
    app.createNewsPText2();
    app.createNewsPText3();
    app.createNewsPText4();
    app.createNewsPText5();
    app.createNewsImgSrc1();
};