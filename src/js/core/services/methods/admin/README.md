Document admin controls cloning procedure.

Step 1. index-db-save configure database.
add elem create method e.g.
app.createServicesH1Text();

Step 2. services-admin-controls-h1 steps 1 - 3 are listed here.
replace below with above after the period.
e.g. createServicesH1Text();

Step 3. 
edit main function above e.g. editIndexHeaderText to editServicesHeaderText
create a launch-services-admin from a cloning from one thats made.
modify at the top. app.methods to your new one app.editServicesHeaderText().

Step 4.
launch-services-admin
configure this page- replace word index with services on everything.

Step 5
configure content on services-content1.
add your new scripts to your page.html -- check index.html for model of script load order.
Begin appending buttons.

Step 6.
db-content-services - set up database.

Step 7. 
services-layout-builder-class
Once done you do not need to edit this file again. 1 per page.
e.g. 
(page1-layout-builder-class, page2-layout-builder-class, etc.)

Step 8. 
services-admin-controls-h1
Final step configure first element and by renaming and test.
Keep adding elements until you are done.
For images you must swap out img tag+src - not just src of tag.

Step 9.
When content 1 is complete and working, wire up admin to elements.
Then move on to content 2 and repeat.

Step. 10
Creating element controls;

Admin Control Cloning procedure-----
Using find replace in editor;
e.g.
a. increment H3_7 to H3_7
b. increment tag7 to tag8
c. increment Text7 to Text7
d. increment -h3-7- to -h3-7-
e. increment "to tag7" to "to tag8"
f. increment "to Text7" to "to Text8"
------     Test    ---------------------------