/*
 testimonials P4 Text Controls =============================================
*/
app.editTestimonialsP4 = function(
    editTestimonialsP4Text,
    saveTestimonialsP4TextBtn,
    textAreaTestimonialsP4
) {
    "use strict";
    var self = this;
    self.editTestimonialsP4TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-testimonials-p4-btn"' +
        ' onclick="app.editTestimonialsP4Text()"></i>';
    self.saveTestimonialsP4TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-testimonials-p4-btn"' +
        ' onclick="app.saveTestimonialsP4Text()"></i>';
    self.textAreaTestimonialsP4 = '<textarea class="form-control textarea-style" rows="1" number="4" maxlength="1000" ' +
        'id="testimonials-p4-input">' +
        self.testimonialsContentObj.main.content1[0].testimonialsPTagText4 +
        '</textarea>';
    app.editTestimonialsP4Text = function() {
        if ($('#edit-testimonials-p4-btn')) {
            $('#edit-testimonials-p4-btn').remove();
        };
        $('#testimonials-p-tag4').append(
            self.textAreaTestimonialsP4,
            self.saveTestimonialsP4TextBtn
        );
    }
    app.saveTestimonialsP4Text = function() {
        var usrInput = $('#testimonials-p4-input').val();
        self.testimonialsContentObj.main.content1[0].testimonialsPTagText4 = usrInput;
        $('#testimonials-p-tag4').html(
            self.testimonialsContentObj.main.content1[0].testimonialsPTagText4
        );
        $('#save-testimonials-p4-btn').remove();
        $('#testimonials-p4-input').remove();
        app.saveTestimonialsToDB();
    }
    app.createTestimonialsP4Text = function() {
        $('#edit-testimonials-p4-btn').remove();
        $('#testimonials-p-tag4').append(self.editTestimonialsP4TextBtn);
    }
    self.createTestimonialsP4Text();
};