function openQuestion(div_currq)
{

           $(".questionCont").removeClass("selectedQuestion");

           $(".answer").hide();

           $(".plus").text("+");
           div_currq.addClass("selectedQuestion");

           $(".selectedQuestion .plus").text("-")
           $(".selectedQuestion .answer").slideDown(200);

}

$(document).ready(function(){
   $(".questionCont").click(function(){
       
       if(!$(this).hasClass("selectedQuestion")) {
           openQuestion($(this));
        } else {
             $(".questionCont").removeClass("selectedQuestion");

            $(".answer").hide();

            $(".plus").text("+");
        }
       
       
       return false;
   });

   $(".example").click(function(){
      openQuestion($("#questionContPricing"));
      $('html,body').animate({scrollTop: $("#questionContPricing").offset().top});

   })
    
     $("#smallMenu").click(function(){
        
        
        $("#slideMenu").toggle();
        return false;
    });
    
    $("#x").click(function(){
           
        $("#slideMenu").toggle();
        return false;
    })
    
    
    
});