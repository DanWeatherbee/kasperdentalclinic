/*
 Oley P_1 Text Controls =============================================
 New Naming convention so we can clone the control,
  simply by incrementing the number on the end of every variable all at once.
*/
app.editOleyP_1 = function(
    editOleyPText1,
    saveOleyPBtn1,
    textAreaOleyP_1
) {
    "use strict";
    var self = this;
    self.editOleyPBtn1 = '<i type="button" class="fa fa-edit edit-btns" id="edit-oley-p-btn-1"' +
        ' onclick="app.editOleyPText1()"></i>';
    self.saveOleyPBtn1 = '<i type="button" class="fa fa-save edit-btns" id="save-oley-p-btn-1"' +
        ' onclick="app.saveOleyPText1()"></i>';
    self.textAreaOleyP_1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="oley-input-p-1">' +
        self.oleyContentObj.main.content[0].oleyPText1 +
        '</textarea>';

    app.editOleyPText1 = function() {
        if ($('#edit-oley-p-btn-1')) {
            $('#edit-oley-p-btn-1').remove();
        };

        $('#oley-p-tag1').append(
            self.textAreaOleyP_1,
            self.saveOleyPBtn1
        );
    }
    app.saveOleyPText1 = function() {
        var usrInput = $('#oley-input-p-1').val();
        self.oleyContentObj.main.content[0].oleyPText1 = usrInput;
        $('#oley-p-tag1').html(
            self.oleyContentObj.main.content[0].oleyPText1
        );
        $('#save-oley-p-btn-1').remove();
        $('#oley-input-p-1').remove();
        app.saveOleyToDB();
    }
    app.createOleyPText1 = function() {
        $('#edit-oley-p-btn-1').remove();
        $('#oley-p-tag1').append(self.editOleyPBtn1);
    }
    self.createOleyPText1();
};