   var admin = $('#admin-link');
   // setTimeout(function() {
   //     admin.hide();
   // }, 500);
   var count = 0;
   admin.on('click', function() {
       count++;
       console.log(count);
       admin.remove();
       var person = prompt("Please enter your name.", "Dan");
       var passcode = prompt("Please enter your passcode.", "2101");
       if (count === 2) {
           admin.remove();
       } else {
           if (count === 1 && person === "Dan" && passcode === "2101") {
               $('#root').prepend(
                   'Welcome admin: ' +
                   person +
                   " What would you like to do today?"
               );

               $('#c-services-1-content').prepend(
                   '<div class="btn btn-success" ' +
                   'id="c-services-1-clear">' +
                   'c-services-1-clear' +
                   '<i style="font-size:2em;" class="fa fa-pencil" aria-hidden="true">' +
                   '</i>' +
                   '</div>'
               );

               $('#c-services-2-content').prepend(
                   '<div class="btn btn-success" ' +
                   'id="c-services-2">' +
                   'c-services-2' +
                   '<i style="font-size:2em;" class="fa fa-pencil" aria-hidden="true">' +
                   '</i>' +
                   '</div>'
               );

               $('#c-services-3-content').prepend(
                   '<div class="btn btn-success" ' +
                   'id="c-services-3">' +
                   'c-services-3' +
                   '<i style="font-size:2em;" class="fa fa-pencil" aria-hidden="true">' +
                   '</i>' +
                   '</div>'
               );
               $('#c-services-4-content').prepend(
                   '<div class="btn btn-success" ' +
                   'id="c-services-4">' +
                   'c-services-4' +
                   '<i style="font-size:2em;" class="fa fa-pencil" aria-hidden="true">' +
                   '</i>' +
                   '</div>'
               );
               $('#c-services-5-content').prepend(
                   '<div class="btn btn-success" ' +
                   'id="c-services-5">' +
                   'c-services-4' +
                   '<i style="font-size:2em;" class="fa fa-pencil" aria-hidden="true">' +
                   '</i>' +
                   '</div>'
               );

           } else {
               return;
           };
       };

       $('#c-services-1-clear').on('click', function() {
           clearContent($('#c-services-1-content'));
       });

       $('#c-services-2').on('click', function() {
           getContent($('#c-services-2-content'));
       });
       $('#c-services-3').on('click', function() {
           getContent($('#c-services-3-content'));
       });
       $('#c-services-4').on('click', function() {
           getContent($('#c-services-4-content'));
       });
       $('#c-services-5').on('click', function() {
           getContent($('#c-services-5-content'));
       });

   });