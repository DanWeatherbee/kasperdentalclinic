var scriptArray = [

    "js/core/lib/tether.min.js",
    "js/core/lib/bootstrap.min.js",
    "js/core/lib/mdb.min.js",
    "js/core/lib/popper.min.js",
    "js/core/helmet/helmet.js",
    "js/core/navbar/nav.js",
    "js/core/admin/controls/add.js",
    "js/core/admin/controls/get.js",
    "js/core/admin/controls/save.js",
    "js/core/admin/admin.js"
];

var appendScripts = function(src) {
    this.src = src;
    var x = document.createElement("script");
    x.src = this.src;
    document.body.append(x);
}

scriptArray.forEach(function(script) { appendScripts(script); });