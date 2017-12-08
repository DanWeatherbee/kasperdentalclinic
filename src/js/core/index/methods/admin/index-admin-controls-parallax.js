app.editindexParallax = function(
    qBoxParallax,
    saveBtnParallax,
    $saveBtnParallax,
    editBtnParallax,
    textAreaParallax,
    $textAreaParallax
) {
    "use strict";
    var self = this;
    self.renderindexPage(self.indexContentObj);
    // Parallax Controls =============================================
    self.qBoxParallax = $('#index-main-row3-parallax-quote-box');
    self.editBtnParallax = '<br /><i type="button" class="fa fa-edit" id="edit-parallax-btn" onclick="app.editParallax()"></i>';
    self.saveBtnParallax = '<i type="button" class="fa fa-save" id="parallax-save-btn" onclick="app.saveParallax()"></i>';
    self.$saveBtnParallax = $('#parallax-save-btn');
    self.textAreaParallax = '<textarea class="form-control" rows="3" maxlength="100" ' +
        'id="parallax-input">' +
        self.indexContentObj.main.content3[0].row3ParallaxQuoteBoxText +
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
        self.indexContentObj.main.content3[0].row3ParallaxQuoteBoxText = usrInput;
        self.qBoxParallax.html(self.indexContentObj.main.content3[0].row3ParallaxQuoteBoxText);
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
    var indexContentObjStr = JSON.stringify(app.indexContentObj);
    // add to localstorage.
    localStorage.setItem('dataAppEdited', indexContentObjStr);
    app.createParallax();
    app.createHeaderText();
    app.createHeaderPText();
};