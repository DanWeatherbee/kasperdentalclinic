// about-us render method
db.renderAboutPage = function(
    aboutPageElements
) {
    var self = this;
    self.aboutPageElements = aboutPageElements;
    $('#root').append(self.aboutPageElements.aboutPage.formatted[0]['1main']);
    // Content1 ============================================================
    // row
    $('#about-main-container').append(self.aboutPageElements.aboutPage.formatted[1]['2mR1']);
    // cols
    $('#about-main-row1').append(
        self.aboutPageElements.aboutPage.formatted[2]['3mR1C1'],
        self.aboutPageElements.aboutPage.formatted[3]['4mR1C2'],
        self.aboutPageElements.aboutPage.formatted[4]['5mR1C3']
    );
    /*
    Tags
     h1 - header
     */
    $('#about-main-row1-col2').append(
        self.aboutPageElements.aboutPage.formatted[5]['6mR1C2H1'],
        // p - paragraph
        self.aboutPageElements.aboutPage.formatted[6]['7mR1C2P']
    );
    /*
    Text
     h1 text
    */
    $('#about-main-row1-col2-header-h1-tag').append(
        self.aboutPageElements.aboutPage.formatted[7]['8mR1C2H1T']
    );
    // p text
    $('#about-main-row1-col2-p-tag').append(
        self.aboutPageElements.aboutPage.formatted[8]['9mR1C2PT']
    );
    // // Content2 ============================================================
    $('#about-main-container').append(self.aboutPageElements.aboutPage.formatted[9]['10mR2']);
    $('#about-main-row2').append(
        self.aboutPageElements.aboutPage.formatted[10]['11mR2C1'],
        self.aboutPageElements.aboutPage.formatted[11]['12mR2C2'],
        self.aboutPageElements.aboutPage.formatted[12]['13mR2C3'],
        self.aboutPageElements.aboutPage.formatted[13]['14mR2C4']
    );
    $('#about-main-row2-col2').append(
        self.aboutPageElements.aboutPage.formatted[14]['15mR2C2Img'],
        self.aboutPageElements.aboutPage.formatted[15]['16mR2C2B']
    );
    $('#about-main-row2-col3').append(
        self.aboutPageElements.aboutPage.formatted[16]['17mR2C3Img'],
        self.aboutPageElements.aboutPage.formatted[17]['18mR2C3B']
    );
    /*
     Content3 ============================================================
     parallax container
     row 3
     */
    $('#root').append(self.aboutPageElements.aboutPage.formatted[18]['19mR3']);
    // col
    $('#about-main-row3-parallax').append(self.aboutPageElements.aboutPage.formatted[19]['20mR3C1']);
    // quote box
    $('#about-main-parallax-row3-col1').append(self.aboutPageElements.aboutPage.formatted[20]['21mR3C1Q']);
    // icon left
    $('#about-main-row3-parallax-quote-box').append(
        self.aboutPageElements.aboutPage.formatted[21]['22mR3C1QL'],
        // text
        self.aboutPageElements.aboutPage.formatted[22]['23mR3C1QT'],
        // icon right
        self.aboutPageElements.aboutPage.formatted[23]['24mR3C1QR']
    );
};


