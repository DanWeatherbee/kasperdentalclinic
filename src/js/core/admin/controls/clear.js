       var clearContent = function(elem, x) {
           elem.html('');
           alert("TODO strip off word content and use for button! -- this elem id is --> " + elem.attr('id'));

           elem.prepend(
               '<div class="btn btn-success" ' +
               'id="c-services-1">' +
               'c-services-1' +
               '<i style="font-size:2em;" class="fa fa-pencil" aria-hidden="true">' +
               '</i>' +
               '</div>'
           );
           $('#c-services-1').on('click', function() {
               getContent(elem);
           });

       };