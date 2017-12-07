app.editAboutParallax = function(
    qBox,
    saveBtn,
    $saveBtn,
    editBtn,
    textArea,
    $textArea
) {
    "use strict";
    var self = this;
    self.renderAboutPage(self.aboutContentObj);
    self.qBox = $('#about-main-row3-parallax-quote-box');
    self.editBtn = '<button type="button" class="btn btn-success" id="edit-parallax-btn" onclick="app.edit()">Edit</button>';
    self.saveBtn = '<button type="button" class="btn btn-success" id="parallax-save-btn" onclick="app.save()">' +
        'Save' +
        '</button>';
    self.$saveBtn = $('#parallax-save-btn');
    self.textArea = '<textarea class="form-control" rows="3" maxlength="100" ' +
        'id="parallax-input">' +
        self.aboutContentObj.main.content3[0].row3ParallaxQuoteBoxText +
        '</textarea>';
    self.$textArea = $('#parallax-input');

    app.edit = function() {
        $('#edit-parallax-btn').remove();
        self.qBox.append(self.textArea);
        self.qBox.append(self.saveBtn);
    }
    app.save = function() {
        var usrInput = $('#parallax-input').val();
        self.aboutContentObj.main.content3[0].row3ParallaxQuoteBoxText = usrInput;
        self.qBox.html(self.aboutContentObj.main.content3[0].row3ParallaxQuoteBoxText);
        self.$saveBtn.remove();
        self.$textArea.remove();
        app.editAboutParallaxSaveToDB();

    }
    app.create = function(qBox) {
        self.qBox.append(self.editBtn);
    }
    self.create();
};
app.editAboutParallax();

app.editAboutParallaxSaveToDB = function() {
    /*
     Browser Local Storage.
    Stringify for local storage.
    */
    var aboutContentObjStr = JSON.stringify(app.aboutContentObj);
    // add to localstorage.
    localStorage.setItem('dataAboutEdited', aboutContentObjStr);
    app.create();
};