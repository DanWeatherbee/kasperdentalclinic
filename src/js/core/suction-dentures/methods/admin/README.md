  
        Document admin controls cloning procedure.

- Step 1.

    page-db-save configure database.
    add elem create method e.g.
    app.createPageH1Text();

- Step 2.

    Clone page-admin-controls-h1-1.js
    replace below with above after the period.
    e.g. createPageH1Text();

- Step 3. 

    Edit main function above e.g. editPageHeaderText to editPageHeaderText
    create a launch-page-admin from a cloning from one thats made.
    modify at the top. app.methods to your new one app.editPageHeaderText().

- Step 4.

    launch-page-admin
    Configure this page- replace word page with Page on everything.

- Step 5

    Configure content on page-content1.
    Add your new scripts to your page.html -- check page.html for model of script load order.
    Begin appending buttons.

- Step 6.

    db-content-Page - set up database.

- Step 7. 

    Page-layout-builder-class
    Once done you do not need to edit this file again. 1 per page.
    e.g. 
    (page1-layout-builder-class, page2-layout-builder-class, etc.)

- Step 8. 

    Page-admin-controls-h1
    Final step configure first element and by renaming and test.
    Keep adding elements until you are done.
    For images you must swap out img tag+src - not just src of tag.

- Step 9.

    Repeat this step for each element to edit.
    When content 1 is complete and working, wire up admin to elements.
    Then move on to content 2 and repeat.

Creating element controls;

    Using find replace in editor.
    e.g.

    a. increment H3_8
    b. increment tag8
    c. increment Text8
    d. update launch-page-admin, page-db-save, page.html
 
- Step 10. 

Test page.

NOTE
    Remember to add     <script src='js/core/lib/file-save.js'></script> to each page to enable file saving.


