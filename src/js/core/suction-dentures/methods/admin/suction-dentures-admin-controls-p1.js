/*
 SuctionDentures Header P1 Text Controls =============================================
*/
app.editSuctionDenturesP1 = function(
    editSuctionDenturesP1Text,
    saveSuctionDenturesP1TextBtn,
    textAreaSuctionDenturesP1
) {
    "use strict";
    var self = this;
    self.editSuctionDenturesP1TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-suction-dentures-p1-btn"' +
        ' onclick="app.editSuctionDenturesP1Text()"></i>';
    self.saveSuctionDenturesP1TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-suction-dentures-p1-btn"' +
        ' onclick="app.saveSuctionDenturesP1Text()"></i>';
    self.textAreaSuctionDenturesP1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="150" ' +
        'id="suction-dentures-p1-input">' +
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2PTag1Text +
        '</textarea>';

    app.editSuctionDenturesP1Text = function() {
        if ($('#edit-suction-dentures-p1-btn')) {
            $('#edit-suction-dentures-p1-btn').remove();
        };

        $('#suction-dentures-main-content1-col2-p-tag-1').append(
            self.textAreaSuctionDenturesP1,
            self.saveSuctionDenturesP1TextBtn
        );

    }
    app.saveSuctionDenturesP1Text = function() {
        var usrInput = $('#suction-dentures-p1-input').val();
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2PTag1Text = usrInput;
        $('#suction-dentures-main-content1-col2-p-tag-1').html(
            self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2PTag1Text
        );
        $('#save-suction-dentures-p1-btn').remove();
        $('#suction-dentures-p1-input').remove();
        app.saveSuctionDenturesToDB();
    }
    app.createSuctionDenturesP1Text = function() {
        $('#edit-suction-dentures-p1-btn').remove();
        $('#suction-dentures-main-content1-col2-p-tag-1').append(self.editSuctionDenturesP1TextBtn);
    }
    self.createSuctionDenturesP1Text();
};