/*
suction-dentures-db-save
 Save to Storage and pull data from it. ================================
*/
app.saveSuctionDenturesToDB = function() {
    /*
     Browser Local Storage.
    Stringify for local storage.
    */
    var suctionDenturesContentObjStr = JSON.stringify(app.suctionDenturesContentObj);
    // add to localstorage.
    localStorage.setItem('dataSuctionDenturesEdited', suctionDenturesContentObjStr);
    // Edit button is created and appended here.
   app.createHeaderSuctionDenturesH1Text();
   app.createSuctionDenturesImg1Src();
   app.createSuctionDenturesVideo1Src1();
};