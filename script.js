
  $(document).ready(function() {
    $(".btn-link").click(function () {
     if ($("#collapseOne" && "#collapseTwo" && "#collapseThree").is('collapse')) {
       $("#manymore").show();
     } else {
       $("#manymore").toggle();
     }
   });
 });