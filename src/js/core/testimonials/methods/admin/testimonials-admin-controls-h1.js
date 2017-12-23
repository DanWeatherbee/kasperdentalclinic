/*
 testimonials Header H1 Text Controls =============================================
*/
app.editTestimonialsHeaderH1 = function(
    editTestimonialsH1Text,
    saveTestimonialsH1TextBtn,
    textAreaTestimonialsH1
) {
    "use strict";
    var self = this;
    self.editTestimonialsH1TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-testimonials-h1-btn"' +
        ' onclick="app.editTestimonialsH1Text()"></i>';
    self.saveTestimonialsH1TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-testimonials-h1-btn"' +
        ' onclick="app.saveTestimonialsH1Text()"></i>';
    self.textAreaTestimonialsH1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="testimonials-h1-input">' +
        self.testimonialsContentObj.main.content1[0].testimonialsHeaderH1TagText +
        '</textarea>';

    app.editTestimonialsH1Text = function() {
        if ($('#edit-testimonials-h1-btn')) {
            $('#edit-testimonials-h1-btn').remove();
        };

        $('#testimonials-header-h1-tag').append(
            self.textAreaTestimonialsH1,
            self.saveTestimonialsH1TextBtn
        );
    }
    app.saveTestimonialsH1Text = function() {
        var usrInput = $('#testimonials-h1-input').val();
        self.testimonialsContentObj.main.content1[0].testimonialsHeaderH1TagText = usrInput;
        $('#testimonials-header-h1-tag').html(
            self.testimonialsContentObj.main.content1[0].testimonialsHeaderH1TagText
        );
        $('#save-testimonials-h1-btn').remove();
        $('#testimonials-h1-input').remove();
        app.saveTestimonialsToDB();
    }
    app.createTestimonialsH1Text = function() {
        $('#edit-testimonials-h1-btn').remove();
        $('#testimonials-header-h1-tag').append(self.editTestimonialsH1TextBtn);
    }
    self.createTestimonialsH1Text();
};