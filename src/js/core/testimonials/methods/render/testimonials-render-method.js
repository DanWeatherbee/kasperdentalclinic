// testimonials render method
var app = new CreateTestimonialsPageClass(CreateTestimonialsPage);
app.renderTestimonialsPage = function() {
    var self = this;
    $('#root').append(self.testimonialsContentObj.main.content1[0].testimonialsContainer);
    // Content1 =============================================
    $('#testimonials-container').append(
        self.testimonialsContentObj.main.content1[0].testimonialsCol1,
        self.testimonialsContentObj.main.content1[0].testimonialsCol2,
        self.testimonialsContentObj.main.content1[0].testimonialsCol3
    );
    $('#testimonials-col2').append(
        self.testimonialsContentObj.main.content1[0].testimonialsHeaderH1Tag,
        self.testimonialsContentObj.main.content1[0].testimonialsPTag1,
        self.testimonialsContentObj.main.content1[0].testimonialsPTag2,
        self.testimonialsContentObj.main.content1[0].testimonialsPTag3,
        self.testimonialsContentObj.main.content1[0].testimonialsPTag4
    );
    $('#testimonials-header-h1-tag').append(
        self.testimonialsContentObj.main.content1[0].testimonialsHeaderH1TagText
    );
    // quote 1
    $('#testimonials-p-tag1').append(
        self.testimonialsContentObj.main.content1[0].testimonialsQuoteLeft,
        self.testimonialsContentObj.main.content1[0].testimonialsPTagText1,
        self.testimonialsContentObj.main.content1[0].testimonialsQuoteRight
    );
    $('#testimonials-p-tag2').append(
        self.testimonialsContentObj.main.content1[0].testimonialsPTagText2
    );
    // quote 2
    $('#testimonials-p-tag3').append(
        self.testimonialsContentObj.main.content1[0].testimonialsQuoteLeft,
        self.testimonialsContentObj.main.content1[0].testimonialsPTagText3,
        self.testimonialsContentObj.main.content1[0].testimonialsQuoteRight
    );
    $('#testimonials-p-tag4').append(
        self.testimonialsContentObj.main.content1[0].testimonialsPTagText4
    );
};
app.renderTestimonialsPage();
$('#root').append(contentFooter);