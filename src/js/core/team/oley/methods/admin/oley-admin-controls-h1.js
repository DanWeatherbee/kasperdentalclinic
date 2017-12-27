/*
 Oley Header H1 Text Controls =============================================
*/
app.editOleyHeaderH1 = function(
    editOleyHeaderH1Text,
    saveOleyHeaderH1TextBtn,
    textAreaOleyHeaderH1
) {
    "use strict";
    var self = this;
    self.editOleyHeaderH1TextBtn = '<br /><i type="button" class="fa fa-edit edit-btns" id="edit-oley-header-h1-btn"' +
        ' onclick="app.editOleyHeaderH1Text()"></i>';
    self.saveOleyHeaderH1TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-oley-header-h1-btn"' +
        ' onclick="app.saveOleyHeaderH1Text()"></i>';
    self.textAreaOleyHeaderH1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="oley-header-h1-input">' +
        self.oleyContentObj.main.content[0].oleyHeaderH1TagText +
        '</textarea>';

    app.editOleyHeaderH1Text = function() {
        if ($('#edit-oley-header-h1-btn')) {
            $('#edit-oley-header-h1-btn').remove();
        };

        $('#oley-header-h1-tag').append(
            self.textAreaOleyHeaderH1,
            self.saveOleyHeaderH1TextBtn
        );
    }
    app.saveOleyHeaderH1Text = function() {
        var usrInput = $('#oley-header-h1-input').val();
        self.oleyContentObj.main.content[0].oleyHeaderH1TagText = usrInput;
        $('#oley-header-h1-tag').html(
            self.oleyContentObj.main.content[0].oleyHeaderH1TagText
        );
        $('#save-oley-header-h1-btn').remove();
        $('#oley-header-h1-input').remove();
        app.saveOleyToDB();
    }
    app.createOleyHeaderH1Text = function() {
        $('#edit-oley-header-h1-btn').remove();
        $('#oley-header-h1-tag').append(self.editOleyHeaderH1TextBtn);
    }
    self.createOleyHeaderH1Text();
};