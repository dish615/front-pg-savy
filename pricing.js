$(document).ready(function(){
   $(".questionCont").click(function(){
       
       if(!$(this).hasClass("selectedQuestion")) {
           
       
           $(".questionCont").removeClass("selectedQuestion");

           $(".answer").hide();

           $(".plus").text("+");
           $(this).addClass("selectedQuestion");

           $(".selectedQuestion .plus").text("-")
           $(".selectedQuestion .answer").slideDown(200);
        } else {
             $(".questionCont").removeClass("selectedQuestion");

            $(".answer").hide();

            $(".plus").text("+");
        }
       
       
       return false;
   });
    
     $("#smallMenu").click(function(){
        
        
        $("#slideMenu").toggle();
        return false;
    });
    
    $("#x").click(function(){
           
        $("#slideMenu").toggle();
        return false;
    })
    
    
    
});