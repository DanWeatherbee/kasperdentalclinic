var db = {
    "libs": {
        "1": "js/core/lib/tether.min.js",
        "2": "js/core/lib/bootstrap.min.js",
        "3": "js/core/lib/mdb.min.js",
        "4": "js/core/lib/popper.min.js"
    },
    "head": {
        "helmet": "js/core/helmet/helmet.js",
        "nav": "js/core/navbar/nav.js"
    },
    "admin": {
        "controls": {
            "add": "js/core/admin/controls/add.js",
            "get": "js/core/admin/controls/get.js",
            "save": "js/core/admin/controls/save.js",
            "clear": "js/core/admin/controls/clear.js",
            "admin": "js/core/admin/admin.js"
        }
    }
};



console.log(db);
db.display = function() {
    var x = [];
  x.push(this.admin['controls']);

    x.forEach(function (item) {
    console.log(item.add);
    });

};
db.display();