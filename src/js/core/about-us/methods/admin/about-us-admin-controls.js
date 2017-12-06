db.editAboutParallax = function(
    qBox,
    saveBtn,
    $saveBtn,
    editBtn,
    textArea,
    $textArea
) {
    "use strict";
    var self = this;
    self.renderAboutPage(aboutPageElements);
    self.qBox = $('#about-main-row3-parallax-quote-box');
    self.editBtn = '<button type="button" class="btn btn-success" id="edit-parallax-btn" onclick="db.edit()">Edit</button>';
    self.saveBtn = '<button type="button" class="btn btn-success" id="parallax-save-btn" onclick="db.save()">' +
        'Save' +
        '</button>';
    self.$saveBtn = $('#parallax-save-btn');
    self.textArea = '<textarea class="form-control" rows="3" maxlength="100" ' +
        'id="parallax-input">' +
        self.aboutPageElements.aboutPage.formatted[8]['9mR1C2PT'] +
        '</textarea>';
    self.$textArea = $('#parallax-input');

    db.edit = function() {
        $('#edit-parallax-btn').remove();
        self.qBox.append(self.textArea);
        self.qBox.append(self.saveBtn);
    }
    db.save = function() {
        var usrInput = $('#parallax-input').val();
        self.qBox.html(usrInput);
        self.$saveBtn.remove();
        self.$textArea.remove();
    }
    db.create = function(qBox) {
        self.qBox.append(self.editBtn);
    }
    self.create();
};
db.editAboutParallax();