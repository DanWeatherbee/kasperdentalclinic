<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <!-- #EndLibraryItem -->
    <title>My first PHP Code</title>
    <meta name="description" content="Dan Weatherbeee Developer">
    <link rel="icon" type="image/ico" href="images/favicon.png">
    <meta name="theme-color" content="#ffffff">
</head>
<html>
<body>



<?php
// This is a single-line comment

# This is also a single-line comment

/*
This is a multiple-lines comment block
that spans over multiple
lines
*/

// You can also use comments to leave out parts of a code line
$x = 5 /* + 15 */ + 5;
echo $x;
?>
<?php
// the message
$msg = "This is Dans php test, if you see me it works!";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("jedi-clan@jedi-clan.us","Hi Dan",$msg);

echo $msg;
?>





</body>
</html>
