$(document).ready(function() {
  $("button#Meow").click(function() {
    $("ul#cat").prepend("<li>Meooooow</li>");
    $("ul#dog").prepend("<li>Baaark</li>");
    $("ul#cat").before("<li>Cat:</li>");
    $("ul#dog").before("<li>Dog:</li>");
  });

});
