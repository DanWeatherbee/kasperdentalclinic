// Layout builder Class
CreateTestimonialsPageClass = function(
    CreateTestimonialsPage,
    testimonialsContentStr,
    testimonialsContentObj
) {
    var self = this;
    self.testimonialsContent = CreateTestimonialsPage; // Model
    self.testimonialsContentStr = JSON.stringify(self.testimonialsContent);

    // to localstorage
    localStorage.setItem('dataTestimonialsDefault', self.testimonialsContentStr);

    // Download databases. ===============================================

    var dbTestimonialsEdited = localStorage.getItem('dataTestimonialsEdited');
    var dbTestimonialsDefault =  localStorage.getItem('dataTestimonialsDefault');

    // Download edited database.
    var editedTestimonialsDB = new File([dbTestimonialsEdited], "dataTestimonialsEdited");

   // Download default database.
    var defaultTestimonialsDB = new File([dbTestimonialsDefault], "dataTestimonialsDefault");

    // Save to downloads folder.
// ==================================================================

    // // get from localstorage to load site.
    self.testimonialsContentObj = JSON.parse(localStorage.getItem('dataTestimonialsEdited'));
    if (!self.testimonialsContentObj) {
        self.testimonialsContentObj = JSON.parse(localStorage.getItem('dataTestimonialsDefault'));
    };
};