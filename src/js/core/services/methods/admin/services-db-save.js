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
};