       var addContent = function(elem, x) {

           if (x === "") {
           x = elem.text();

           } else {
           elem.html('');

           elem.append(x);

           }
           return saveToDB();
       };