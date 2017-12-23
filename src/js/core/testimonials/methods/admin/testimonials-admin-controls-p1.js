/*
 testimonials P1 Text Controls =============================================
*/
app.editTestimonialsP1 = function(
    editTestimonialsP1Text,
    saveTestimonialsP1TextBtn,
    textAreaTestimonialsP1
) {
    "use strict";
    var self = this;
    self.editTestimonialsP1TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-testimonials-p1-btn"' +
        ' onclick="app.editTestimonialsP1Text()"></i>';
    self.saveTestimonialsP1TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-testimonials-p1-btn"' +
        ' onclick="app.saveTestimonialsP1Text()"></i>';
    self.textAreaTestimonialsP1 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="testimonials-p1-input">' +
        self.testimonialsContentObj.main.content1[0].testimonialsPTagText1 +
        '</textarea>';

    app.editTestimonialsP1Text = function() {
        if ($('#edit-testimonials-p1-btn')) {
            $('#edit-testimonials-p1-btn').remove();
        };

        $('#testimonials-p-tag1').append(
            self.textAreaTestimonialsP1,
            self.saveTestimonialsP1TextBtn
        );
    }
    app.saveTestimonialsP1Text = function() {
        var usrInput = $('#testimonials-p1-input').val();
        self.testimonialsContentObj.main.content1[0].testimonialsPTagText1 = usrInput;
        $('#testimonials-p-tag1').html(
            self.testimonialsContentObj.main.content1[0].testimonialsPTagText1
        );
        $('#save-testimonials-p1-btn').remove();
        $('#testimonials-p1-input').remove();
        app.saveTestimonialsToDB();
    }
    app.createTestimonialsP1Text = function() {
        $('#edit-testimonials-p1-btn').remove();
        $('#testimonials-p-tag1').append(self.editTestimonialsP1TextBtn);
    }
    self.createTestimonialsP1Text();
};