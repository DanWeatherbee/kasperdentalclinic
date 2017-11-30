var getContent = function(elem) {
           var usrInput = prompt(
               'Paste content in here. '
           );

           if (usrInput === null) {
            return;
           }
           var contentArray = '[' +
               '{' +
               '"con1": "' +
               usrInput +
               '", "con2": "more stuff!"' +
               '}' +
               ']';
           console.log(contentArray);
           var obj = JSON.parse(contentArray);
           addContent(elem, obj[0].con1);

           return obj;
       };