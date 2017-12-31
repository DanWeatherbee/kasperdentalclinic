/*
 Jason P_1 Text Controls =============================================
 New Naming convention so we can clone the control,
  simply by incrementing the number on the end of every variable all at once.
*/
app.editJasonP_1 = function(
    editJasonPText1,
    saveJasonPBtn1,
    textAreaJasonP_1
) {
    "use strict";
    var self = this;
    self.editJasonPBtn1 = '<i type="button" class="fa fa-edit edit-btns" id="edit-jason-p-btn-1"' +
        ' onclick="app.editJasonPText1()"></i>';
    self.saveJasonPBtn1 = '<i type="button" class="fa fa-save edit-btns" id="save-jason-p-btn-1"' +
        ' onclick="app.saveJasonPText1()"></i>';
    self.textAreaJasonP_1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="jason-input-p-1">' +
        self.jasonContentObj.main.content[0].jasonPText1 +
        '</textarea>';

    app.editJasonPText1 = function() {
        if ($('#edit-jason-p-btn-1')) {
            $('#edit-jason-p-btn-1').remove();
        };

        $('#jason-p-tag1').append(
            self.textAreaJasonP_1,
            self.saveJasonPBtn1
        );
    }
    app.saveJasonPText1 = function() {
        var usrInput = $('#jason-input-p-1').val();
        self.jasonContentObj.main.content[0].jasonPText1 = usrInput;
        $('#jason-p-tag1').html(
            self.jasonContentObj.main.content[0].jasonPText1
        );
        $('#save-jason-p-btn-1').remove();
        $('#jason-input-p-1').remove();
        app.saveJasonToDB();
    }
    app.createJasonPText1 = function() {
        $('#edit-jason-p-btn-1').remove();
        $('#jason-p-tag1').append(self.editJasonPBtn1);
    }
    self.createJasonPText1();
};