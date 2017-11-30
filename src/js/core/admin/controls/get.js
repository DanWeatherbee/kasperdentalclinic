var getContent = function() {
           var usrInput = prompt(
               'Paste content in here. '
           );
           var contentArray = '[' +
               '{' +
               '"con1": "' +
               usrInput +
               '", "con2": "more stuff!"' +
               '}' +
               ']';
           console.log(contentArray);
           var obj = JSON.parse(contentArray);
           addContent(obj[0].con1);
       };