// Img Src Controls =============================================

app.editSuctionDenturesImg1Certified = function(
    editSuctionDenturesImg1SrcBtn,
    saveSuctionDenturesImg1SrcBtn,
    textAreaSuctionDenturesImg1Src
) {
    "use strict";
    var self = this;
    // Header Img Controls =============================================
    self.editSuctionDenturesImg1SrcBtn = '<i type="button" class="fa fa-photo edit-btns" id="edit-suction-dentures-img1-src-btn" ' +
        'onclick="app.editSuctionDenturesImg1Src()">' +
        ' -copy new img address, click Photo icon then paste image URL or' +
        ' local file address into the input area.</i>';
    self.saveSuctionDenturesImg1SrcBtn = '<i type="button" class="fa fa-save edit-btns" id="save-suction-dentures-img1-src-btn" ' +
        'onclick="app.saveSuctionDenturesImg1Src()"></i>';
    self.textAreaSuctionDenturesImg1Src = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="150" ' +
        'id="suction-dentures-img1-src-input">' +
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2Img1Src +
        '</textarea>';
    app.editSuctionDenturesImg1Src = function() {
        if ($('#edit-suction-dentures-img1-src-btn')) {
            $('#edit-suction-dentures-img1-src-btn').remove();
        };
        $('#suction-dentures-main-content1-col2-ul-container').prepend(self.textAreaSuctionDenturesImg1Src);
        $('#suction-dentures-main-content1-col2-ul-container').prepend(self.saveSuctionDenturesImg1SrcBtn);
    }
    app.saveSuctionDenturesImg1Src = function() {
        var usrInput = $('#suction-dentures-img1-src-input').val();
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2Img1Src = usrInput;
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2Img1 = '<br /><img' +
            ' class="img-responsive center-block" ' +
            'src="' +
            self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2Img1Src +
            '" id="suction-dentures-img1" alt="' +
            self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2Img1Src +
            '"><br />';
        $('#suction-dentures-img1').remove();
        $('#suction-dentures-main-content1-col2-ul-container').prepend(
            self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2Img1
        );
        $('#save-suction-dentures-img1-src-btn').remove();
        $('#suction-dentures-img1-src-input').remove();
        app.saveSuctionDenturesToDB();
        location.reload();
    }
    app.createSuctionDenturesImg1Src = function() {
        $('#edit-suction-dentures-img1-src-btn').remove();
        $('#suction-dentures-main-content1-col2-ul-container').prepend(self.editSuctionDenturesImg1SrcBtn);
    }
    self.createSuctionDenturesImg1Src();
};