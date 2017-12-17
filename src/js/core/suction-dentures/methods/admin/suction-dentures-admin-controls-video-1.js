// Img Src Controls =============================================

app.editSuctionDenturesVideo1 = function(
    editSuctionDenturesVideo1SrcBtn,
    saveSuctionDenturesVideo1SrcBtn,
    textAreaSuctionDenturesVideo1Src
) {
    "use strict";
    var self = this;
    // Header Img Controls =============================================
    self.editSuctionDenturesVideo1SrcBtn = '<br /><i type="button" class="fa fa-film edit-btns" id="edit-suction-dentures-video1-src-btn" ' +
        'onclick="app.editSuctionDenturesVideo1Src1()">' +
        ' video 1 -copy new video address, click Film icon then paste local file address' +
        ' e.g. images/your-new-img.png  into the input area. Note the img must be uploaded to the server.</i>';
    self.saveSuctionDenturesVideo1SrcBtn = '<i type="button" class="fa fa-save edit-btns" id="save-suction-dentures-video1-src-btn" ' +
        'onclick="app.saveSuctionDenturesVideo1Src1()"></i>';
    self.textAreaSuctionDenturesVideo1Src = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="150" ' +
        'id="suction-dentures-video1-src-input">' +
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2Video1Src1 +
        '</textarea>';
    app.editSuctionDenturesVideo1Src1 = function() {
        if ($('#edit-suction-dentures-video1-src-btn')) {
            $('#edit-suction-dentures-video1-src-btn').remove();
        };
        $('#suction-dentures-main-content1-col2-ul-container').append(self.textAreaSuctionDenturesVideo1Src);
        $('#suction-dentures-main-content1-col2-ul-container').append(self.saveSuctionDenturesVideo1SrcBtn);
    }
    app.saveSuctionDenturesVideo1Src1 = function() {
        var usrInput = $('#suction-dentures-video1-src-input').val();
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2Video1Src1 = usrInput;
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2Video1 = '<video id="' +
            'suction-dentures-video1' +
            '" class="center-block"' +
            ' controls="controls controlsList="nodownload" width="500" height="350" name="Suction Dentures 1" ' +
            'src="' +
            self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2Video1Src1 +
            '"></video>';
        $('#suction-dentures-video1').remove();
        $('#suction-dentures-main-content1-col2-ul-container').append(
            self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2Video1
        );
        $('#save-suction-dentures-video1-src-btn').remove();
        $('#suction-dentures-video1-src-input').remove();
        app.saveSuctionDenturesToDB();
        location.reload();
    }
    app.createSuctionDenturesVideo1Src1 = function() {
        $('#edit-suction-dentures-video1-src-btn').remove();
        $('#suction-dentures-main-content1-col2-ul-container').append(self.editSuctionDenturesVideo1SrcBtn);
    }
    self.createSuctionDenturesVideo1Src1();
};