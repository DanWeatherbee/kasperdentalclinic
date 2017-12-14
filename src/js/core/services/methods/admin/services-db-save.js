/*
Written in a Object Oriented pattern OOP by Dan Weatherbee
index-db-save
 Save to Storage and pull data from it. ================================
*/

app.saveServicesToDB = function() {
    /*
     Browser Local Storage.
    Stringify for local storage.
    */
    console.log()
    var servicesContentObjStr = JSON.stringify(app.servicesContentObj);
    // add to localstorage.
    localStorage.setItem('dataServicesEdited', servicesContentObjStr);
    /*
        Step 1 replace page name in here (index to services) and
         add elem create method e.g. go to services-admin-controls-h1

         add the create function of every new element here to call the edit button.
         */
    app.createServicesH1Text();
    app.createServicesH3Text();
    app.createServicesPText();
    app.createServicesUlContent();
    app.createParallaxQuotePText();
    app.createServicesH3_2Text();
    app.createServicesH3_3Text();
    app.createServicesH3_4Text();
    app.createServicesH3_5Text();
    app.createServicesH3_6Text();
    app.createServicesH3_7Text();
    app.createServicesH3_8Text();
    app.createServicesP1Text();
    app.createServicesP2Text();
    app.createServicesP3Text();
    app.createServicesP4Text();
    app.createServicesP5Text();
    app.createServicesP6Text();
    app.createServicesP7Text();
    app.createServicesP8Text();
    app.createServicesFaqH1Text();
    app.createServicesH2Faq_1Text();
    app.createServicesH2Faq_2Text();
    app.createServicesH2Faq_3Text();
    app.createServicesH2Faq_4Text();
    app.createServicesPFaq_1Text();
    app.createServicesPFaq_2Text();
    app.createServicesPFaq_3Text();
    app.createServicesPFaq_4Text();
    app.createServicesMapH2Text();
    app.createServicesMapPText();
};