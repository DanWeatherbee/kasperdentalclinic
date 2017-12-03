var db = {
    "libs": [
        "js/core/lib/tether.min.js",
        "js/core/lib/bootstrap.min.js",
        "js/core/lib/mdb.min.js",
        "js/core/lib/popper.min.js"
    ],
    "head": [
        "js/core/helmet/helmet.js",
        "js/core/navbar/nav.js"
    ],
    "admin": [

            "js/core/admin/controls/add.js",
            "js/core/admin/controls/get.js",
            "js/core/admin/controls/save.js",
            "js/core/admin/controls/clear.js",
            "js/core/admin/admin.js"

    ]
};

db.appendScripts = function(
    src,
    doc,
    docCreate
) {
    var self = this;
    self.src = src;
    self.doc = doc;
    self.docCreate = docCreate;
    self.doc = document;
    self.docCreate = self.doc.createElement("script");
    self.docCreate.src = self.src;
    self.doc.body.append(self.docCreate);
};

db.array = function(
    libsArray,
    headArray,
    adminControlsArray
) {
    var self = this;
    self.libsArray = libsArray;
    self.headArray = headArray;
    self.adminControlsArray = adminControlsArray;
    self.libsArray = this.libs;
    self.headArray = this.head;
    self.adminControlsArray = this.admin;
    self.libsArray.forEach(function(script) {
        self.appendScripts(script);
    });
    self.headArray.forEach(function(script) {
        self.appendScripts(script);
    });
    self.adminControlsArray.forEach(function(script) {
        self.appendScripts(script);
    });
};

db.array();