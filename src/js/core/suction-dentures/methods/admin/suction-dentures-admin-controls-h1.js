/*
 SuctionDentures Header H1 Text Controls =============================================
*/
app.editHeaderSuctionDenturesH1 = function(
    editSuctionDenturesH1Text,
    saveSuctionDenturesH1TextBtn,
    textAreaSuctionDenturesH1
) {
    "use strict";
    var self = this;
    self.editSuctionDenturesH1TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-suction-dentures-h1-btn"' +
        ' onclick="app.editHeaderSuctionDenturesH1Text()"></i>';
    self.saveSuctionDenturesH1TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-suction-dentures-h1-btn"' +
        ' onclick="app.saveHeaderSuctionDenturesH1Text()"></i>';
    self.textAreaSuctionDenturesH1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="150" ' +
        'id="suction-dentures-h1-input">' +
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2HeaderH1TagText +
        '</textarea>';

    app.editHeaderSuctionDenturesH1Text = function() {
        if ($('#edit-suction-dentures-h1-btn')) {
            $('#edit-suction-dentures-h1-btn').remove();
        };

        $('#suction-dentures-main-col2-h1-tag-1').append(
            self.textAreaSuctionDenturesH1,
            self.saveSuctionDenturesH1TextBtn
        );

    }
    app.saveHeaderSuctionDenturesH1Text = function() {
        var usrInput = $('#suction-dentures-h1-input').val();
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2HeaderH1TagText = usrInput;
        $('#suction-dentures-main-col2-h1-tag-1').html(
            self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2HeaderH1TagText
        );
        $('#save-suction-dentures-h1-btn').remove();
        $('#suction-dentures-h1-input').remove();
        app.saveSuctionDenturesToDB();
    }
    app.createHeaderSuctionDenturesH1Text = function() {
        $('#edit-suction-dentures-h1-btn').remove();
        $('#suction-dentures-main-col2-h1-tag-1').append(self.editSuctionDenturesH1TextBtn);
    }
    self.createHeaderSuctionDenturesH1Text();
};