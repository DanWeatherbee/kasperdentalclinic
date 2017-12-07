// Layout builder Class
CreateAboutPageClass = function(
    CreateAboutPage,
    aboutContentStr,
    aboutContentObj
) {
    var self = this;
    self.aboutContent = CreateAboutPage; // Model
    self.aboutContentStr = JSON.stringify(self.aboutContent);
    // // to localstorage
    localStorage.setItem('dataAppDefault', self.aboutContentStr);
    // // get from localstorage


    self.aboutContentObj = JSON.parse(localStorage.getItem('dataAppEdited'));
    if (!self.aboutContentObj) {
        self.aboutContentObj = JSON.parse(localStorage.getItem('dataAppDefault'));
    };
};