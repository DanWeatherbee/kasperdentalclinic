/*
tetimonials-db-save
 Save to Storage and pull data from it. ================================
*/
app.saveTestimonialsToDB = function() {
    /*
     Browser Local Storage.
    Stringify for local storage.
    */
    var testimonialsContentObjStr = JSON.stringify(app.testimonialsContentObj);
    // add to localstorage.
    localStorage.setItem('dataTestimonialsEdited', testimonialsContentObjStr);
    // app.createSomething(); goes here.
    app.createTestimonialsH1Text();
    app.createTestimonialsP1Text();
    app.createTestimonialsP2Text();
    app.createTestimonialsP3Text();
    app.createTestimonialsP4Text();
};