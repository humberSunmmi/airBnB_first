$(document).ready(function(){
   
   var search = $("#search-criteria");
   var items  = $(".section");

   $("#search").on("click", function(e){
        
        var v = search.val().toLowerCase();
       if(v == "") { 
           items.show("div");
           return;
       }
        $.each(items, function(){
            var it = $(this);
            var dv = it.find("div").text().toLowerCase();
            
            if(dv.indexOf(v) == -1) 
               it.hide();
        });
    });        
});

