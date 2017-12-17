
app.editSuctionDenturesUl = function(
    editUlContent,
    saveUlContent,
    textAreaSuctionDenturesUl
) {
    "use strict";
    var self = this;
    // Services Controls =============================================

    self.editUlContentBtn = '<br /><i type="button" class="fa fa-edit edit-btns" id="edit-suction-dentures-ul-btn"' +
    ' onclick="app.editSuctionDenturesUlContent()"> -edit List container </i>';
    self.saveUlContent = '<i type="button" class="fa fa-save edit-btns" id="save-suction-dentures-ul-btn"' +
    ' onclick="app.saveSuctionDenturesUlContent()"></i>';
    self.textAreaSuctionDenturesUl = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="suction-dentures-ul-input">' +
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2UlContent +
        '</textarea>';
    app.editSuctionDenturesUlContent = function() {
        if ($('#edit-suction-dentures-ul-btn')) {
            $('#edit-suction-dentures-ul-btn').remove();
        };
        $('#suction-dentures-main-content1-col2-ul-container').append(self.textAreaSuctionDenturesUl);
        $('#suction-dentures-main-content1-col2-ul-container').append(self.saveUlContent);
    }
    app.saveSuctionDenturesUlContent = function() {
        var usrInput = $('#suction-dentures-ul-input').val();
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2UlContent = usrInput;
        $('#suction-dentures-main-content1-col2-ul-container').html(self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2UlContent);
        $('#save-suction-dentures-ul-btn').remove();
        $('#suction-dentures-ul-input').remove();
        app.saveSuctionDenturesToDB();
    }
    app.createSuctionDenturesUlContent = function() {
        $('#edit-suction-dentures-ul-btn').remove();
        $('#suction-dentures-main-content1-col2-ul-container').append(self.editUlContentBtn);
    }

    self.createSuctionDenturesUlContent();
};