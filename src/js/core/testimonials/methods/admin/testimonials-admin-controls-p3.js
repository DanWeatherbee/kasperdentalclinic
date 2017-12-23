/*
 testimonials P3 Text Controls =============================================
*/
app.editTestimonialsP3 = function(
    editTestimonialsP3Text,
    saveTestimonialsP3TextBtn,
    textAreaTestimonialsP3
) {
    "use strict";
    var self = this;
    self.editTestimonialsP3TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-testimonials-p3-btn"' +
        ' onclick="app.editTestimonialsP3Text()"></i>';
    self.saveTestimonialsP3TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-testimonials-p3-btn"' +
        ' onclick="app.saveTestimonialsP3Text()"></i>';
    self.textAreaTestimonialsP3 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="testimonials-p3-input">' +
        self.testimonialsContentObj.main.content1[0].testimonialsPTagText3 +
        '</textarea>';

    app.editTestimonialsP3Text = function() {
        if ($('#edit-testimonials-p3-btn')) {
            $('#edit-testimonials-p3-btn').remove();
        };

        $('#testimonials-p-tag3').append(
            self.textAreaTestimonialsP3,
            self.saveTestimonialsP3TextBtn
        );
    }
    app.saveTestimonialsP3Text = function() {
        var usrInput = $('#testimonials-p3-input').val();
        self.testimonialsContentObj.main.content1[0].testimonialsPTagText3 = usrInput;
        $('#testimonials-p-tag3').html(
            self.testimonialsContentObj.main.content1[0].testimonialsPTagText3
        );
        $('#save-testimonials-p3-btn').remove();
        $('#testimonials-p3-input').remove();
        app.saveTestimonialsToDB();
    }
    app.createTestimonialsP3Text = function() {
        $('#edit-testimonials-p3-btn').remove();
        $('#testimonials-p-tag3').append(self.editTestimonialsP3TextBtn);
    }
    self.createTestimonialsP3Text();
};