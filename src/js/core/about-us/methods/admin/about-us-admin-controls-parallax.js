app.editAboutParallax = function(
    qBoxParallax,
    saveBtnParallax,
    $saveBtnParallax,
    editBtnParallax,
    textAreaParallax,
    $textAreaParallax
) {
    "use strict";
    var self = this;
    // Parallax Controls =============================================
    self.qBoxParallax = $('#about-main-row3-parallax-quote-box');
    self.editBtnParallax = '<br /><i type="button" class="fa fa-edit" id="edit-parallax-btn" onclick="app.editParallax()"></i>';
    self.saveBtnParallax = '<i type="button" class="fa fa-save" id="parallax-save-btn" onclick="app.saveParallax()"></i>';
    self.$saveBtnParallax = $('#parallax-save-btn');
    self.textAreaParallax = '<textarea class="form-control" rows="3" maxlength="100" ' +
        'id="parallax-input">' +
        self.aboutContentObj.main.content3[0].row3ParallaxQuoteBoxText +
        '</textarea>';
    self.$textAreaParallax = $('#parallax-input');

    app.editParallax = function() {
        if ($('#edit-parallax-btn')) {
            $('#edit-parallax-btn').remove();
        };
        self.qBoxParallax.append(self.textAreaParallax);
        self.qBoxParallax.append(self.saveBtnParallax);
    }
    app.saveParallax = function() {
        var usrInput = $('#parallax-input').val();
        self.aboutContentObj.main.content3[0].row3ParallaxQuoteBoxText = usrInput;
        self.qBoxParallax.html(self.aboutContentObj.main.content3[0].row3ParallaxQuoteBoxText);
        self.$saveBtnParallax.remove();
        self.$textAreaParallax.remove();
        app.saveToDB();

    }
    app.createParallax = function(qBox) {
        $('#edit-parallax-btn').remove();
        self.qBoxParallax.append(self.editBtnParallax);

    }
    self.createParallax();
};

// Save to Storage and pull dtat from it. ================================
app.saveToDB = function() {
    /*
     Browser Local Storage.
    Stringify for local storage.
    */
    var aboutContentObjStr = JSON.stringify(app.aboutContentObj);
    // add to localstorage.
    localStorage.setItem('dataAppEdited', aboutContentObjStr);
    app.createParallax();
    app.createHeaderText();
    app.createHeaderPText();
};