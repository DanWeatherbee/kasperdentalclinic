/*
suction-dentures.js
*/
var app = new CreateSuctionDenturesPageClass(CreateSuctionDenturesPage);
app.renderSuctionDenturesPage = function() {
    var self = this;
    console.log(self.suctionDenturesContentObj);
   $('#root').append(self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContentContainer);
    // Content1 ==================================================
    $('#suction-dentures-main-container').append(
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col1,
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2,
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col3
    );
    $('#suction-dentures-main-col2').append(
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2HeaderH1Tag,
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2Img1,
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2UlContainer,
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2Video1,
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2Video2,
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2PTag1
    );
    $('#suction-dentures-main-col2-h1-tag-1').append(
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2HeaderH1TagText
    );
    $('#suction-dentures-main-content1-col2-ul-container').append(
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2UlContent
    );
    $('#suction-dentures-main-content1-col2-p-tag-1').append(
        self.suctionDenturesContentObj.main.content1[0].suctionDenturesMainContent1Col2PTag1Text
    );
    $('#root').append(contentFooter);
};
app.renderSuctionDenturesPage();
