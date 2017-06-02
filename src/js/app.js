var app = function () {
    $('#p-1').prepend('<option>' + $('#src-file').val() + '</option>')
    var srcFile = $('#p-1 option:selected').val();
    $('#header-img').attr("src", srcFile);

}
