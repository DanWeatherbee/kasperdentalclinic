/*
denture-db-save
 Save to Storage and pull data from it. ================================
*/
app.saveDentureToDB = function() {
    /*
     Browser Local Storage.
    Stringify for local storage.
    */
    var dentureContentObjStr = JSON.stringify(app.dentureContentObj);
    // add to localstorage.
    localStorage.setItem('dataDentureEdited', dentureContentObjStr);
    app.createHeaderDentureH1Text();
    app.createDentureH2_1Text();
    app.createDentureH2_2Text();
    app.createDentureH2_3Text();
    app.createDentureP1Text();
    app.createDentureP2Text();
    app.createDentureP3Text();
    app.createDentureIframe1Text();
    app.createDentureIframe2Text();
    app.createDentureIframe3Text();
};