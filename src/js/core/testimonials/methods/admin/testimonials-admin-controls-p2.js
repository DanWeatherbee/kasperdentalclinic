/*
 testimonials P2 Text Controls =============================================
*/
app.editTestimonialsP2 = function(
    editTestimonialsP2Text,
    saveTestimonialsP2TextBtn,
    textAreaTestimonialsP2
) {
    "use strict";
    var self = this;
    self.editTestimonialsP2TextBtn = '<i type="button" class="fa fa-edit edit-btns" id="edit-testimonials-p2-btn"' +
        ' onclick="app.editTestimonialsP2Text()"></i>';
    self.saveTestimonialsP2TextBtn = '<i type="button" class="fa fa-save edit-btns" id="save-testimonials-p2-btn"' +
        ' onclick="app.saveTestimonialsP2Text()"></i>';
    self.textAreaTestimonialsP2 = '<textarea class="form-control textarea-style" rows="1" number="3" maxlength="1000" ' +
        'id="testimonials-p2-input">' +
        self.testimonialsContentObj.main.content1[0].testimonialsPTagText2 +
        '</textarea>';

    app.editTestimonialsP2Text = function() {
        if ($('#edit-testimonials-p2-btn')) {
            $('#edit-testimonials-p2-btn').remove();
        };

        $('#testimonials-p-tag2').append(
            self.textAreaTestimonialsP2,
            self.saveTestimonialsP2TextBtn
        );
    }
    app.saveTestimonialsP2Text = function() {
        var usrInput = $('#testimonials-p2-input').val();
        self.testimonialsContentObj.main.content1[0].testimonialsPTagText2 = usrInput;
        $('#testimonials-p-tag2').html(
            self.testimonialsContentObj.main.content1[0].testimonialsPTagText2
        );
        $('#save-testimonials-p2-btn').remove();
        $('#testimonials-p2-input').remove();
        app.saveTestimonialsToDB();
    }
    app.createTestimonialsP2Text = function() {
        $('#edit-testimonials-p2-btn').remove();
        $('#testimonials-p-tag2').append(self.editTestimonialsP2TextBtn);
    }
    self.createTestimonialsP2Text();
};