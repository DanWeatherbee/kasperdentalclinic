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

               $('#root').prepend(
                   '<div class="btn btn-success" ' +
                   'id="con1">' +
                   'Content 1 ' +
                   '<i style="font-size:2em;" class="fa fa-pencil" aria-hidden="true">' +
                   '</i>' +
                   '</div>'
               );

           } else {
               return;
           };
       };
       $('#con1').on('click', function() {
           getContent();
           saveToDB();
       });

   });