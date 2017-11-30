var saveToDB = function() {
    var saveData = prompt(
        'Do you wish to save to database?'
    );

    if (saveData === "yes") {
        alert('Saved.');
        window.print();
    } else {

        alert('! Not saved');
    };

    console.log("saveToDB is running.");

};