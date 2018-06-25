$(document).ready(function(){
   
    
    $("#savySalesGif").on("timeupdate", function(event){
      //  onTrackedVideoFrame(this.currentTime);
    });
    
    function onTrackedVideoFrame(currentTime) {
        console.log(currentTime);
        
        
        
        if(0<currentTime && currentTime<5.089916) {
            $($(".descPart")[0]).show();
            $($(".descPart")[1]).hide();
            $($(".descPart")[2]).hide();
            $($(".descPart")[3]).hide();
        } else if(5.089916<currentTime && currentTime<8.873504) {
            $($(".descPart")[0]).hide();
            $($(".descPart")[1]).show();
            $($(".descPart")[2]).hide();
            $($(".descPart")[3]).hide();
        } else if(8.873504<currentTime && currentTime<22) {
            $($(".descPart")[0]).hide();
            $($(".descPart")[1]).hide();
            $($(".descPart")[2]).show();
            $($(".descPart")[3]).hide();
        } else if(22<currentTime) {
            $($(".descPart")[0]).hide();
            $($(".descPart")[1]).hide();
            $($(".descPart")[2]).hide();
            $($(".descPart")[3]).show();
        }
    }
    
     
    $(".slProd .rotateOpt").click(function(){
        var ind= $(this).index()+1;
        $(".slProd .rotateOpt").removeClass("selectedRotateOpt");
        $(this).addClass("selectedRotateOpt");
        
        //prodHowToCont
        $(".slProd .prodHowToContSec").css("display", "none");
        
        if(ind == 1) {
            //$(".slProd .prodHowToContSec:first-child").removeClass("hideRotators");
            $(".slProd .prodHowToContSec:first-child").css("display", "inline-block");
        } else {
            //$(".slProd .prodHowToContSec:nth-child("+ind+")").removeClass("hideRotators");
            $(".slProd .prodHowToContSec:nth-child("+ind+")").css("display", "inline-block");
        }
        
        console.log(ind);
        
        return false;
        
    })
    
    $(".ssProd .rotateOpt").click(function(){
        var ind= $(this).index()+1;
        $(".ssProd .rotateOpt").removeClass("selectedRotateOpt");
        $(this).addClass("selectedRotateOpt");
        
        $(".ssProd .prodHowToContSec").css("display", "none");
        
        if(ind == 1) {
            // $(".ssProd .prodHowToContSec:first-child").removeClass("hideRotators");
            $(".ssProd .prodHowToContSec:first-child").css("display", "inline-block");
        } else {
           // $(".ssProd .prodHowToContSec:nth-child("+ind+")").removeClass("hideRotators");
            $(".ssProd .prodHowToContSec:nth-child("+ind+")").css("display", "inline-block");
        }
        
        console.log(ind);
        
        return false;
        
    })
    
    $(window).resize(function(){
        if($(window).width()>650) {
            $(".prodHowToContSec").removeAttr( "style" )
        } else {
             $(".ssProd .rotateOpt").removeClass("selectedRotateOpt");
             $(".slProd .rotateOpt").removeClass("selectedRotateOpt");
             
            $($(".ssProd .rotateOpt")[0]).addClass("selectedRotateOpt");
            $($(".slProd .rotateOpt")[0]).addClass("selectedRotateOpt");
            
        } 
    })
    
    $("#savyLite").click(function(){
        $("#savySales").removeClass("selected");
        $("#savyLite").addClass("selected");
        $("#animCont").hide();
        $("#animCont2").show();
    });
    
    $("#savySales").click(function(){
           $("#savySales").addClass("selected");
        $("#savyLite").removeClass("selected");
          $("#animCont").show();
        $("#animCont2").hide();
    });
    
    $(".opt").click(function(){
        if(!$(this).hasClass("selectedOpt")) {
            

            $(".opt").removeClass("selectedOpt");
            $(this).addClass("selectedOpt");
            /*
            if($(".selectedOpt a").text().includes("Savy Sales")) {

                if($(document).width()<855) {
                     $(".ssProd").addClass("dispBlock");
                } else {
                     $(".ssProd").addClass("dispInline");
                }


            } else {
                  if($(document).width()<855) {
                      $(".slProd").addClass("dispBlock");
                  } else {
                      $(".slProd").addClass("dispInline");
                  }


            }*/

            $(".prodCont").fadeToggle();
        }
        
        return false;
    })
    
    
    /*
    
        anim >>
        1. enter 5
        2. enter 50
        3. show green check mark & slash through price
        4. hover cart & shows entered price w/ dress
        
        .enterPrice
        .acceptedPrice
        #hoverCart
        .price
    
    
    */
    
    $("#smallMenu").click(function(){
        
        
        $("#slideMenu").toggle();
        return false;
    });
    
    $("#x").click(function(){
           
        $("#slideMenu").toggle();
        return false;
    })
    
     
    
    function notifAnim(ind) {
        //notifsSS
        
        var myArray= [
            {
                email: "victor@gmail.com",
                purchasePrice: 184,
                merchantMinimum: 122,
                moneyMade: 62,
                color: "redHighlight"
            },
            {
                email: "maddie@gmail.com",
                purchasePrice: 87,
                merchantMinimum: 70,
                moneyMade: 17,
                color: "orchidHighlight"
            },
            {
                email: "tom@gmail.com",
                purchasePrice: 99,
                merchantMinimum: 70,
                moneyMade: 29,
                color: "darkGreenHighlight"
            },
            {
                email: "matt@gmail.com",
                purchasePrice: 110,
                merchantMinimum: 80,
                moneyMade: 30,
                color: "tealHighlight"
            },
            
            {
                email: "katy@gmail.com",
                purchasePrice: 250,
                merchantMinimum: 150,
                moneyMade: 100,
                color: "pinkHighlight"
            },
            {
                email: "alice@gmail.com",
                purchasePrice: 90,
                merchantMinimum: 80,
                moneyMade: 10,
                color: "deepRedHighlight"
            },
            {
                email: "alex@gmail.com",
                purchasePrice: 45,
                merchantMinimum: 30,
                moneyMade: 15,
                color: "greenHighlight"
            },
            {
                email: "megan@gmail.com",
                purchasePrice: 85,
                merchantMinimum: 50,
                moneyMade: 35,
                color: "rasberryHighlight"
            }
        ];
        
        if(ind>(myArray.length-1)) {
            ind=0;
        }
        
        var rand = myArray[ind];
        
        var newNotif= '<div class="cartDesc activeNotif hiddenNotif"><span class="'+rand.color+'">'+rand.email+'</span> bought an item for <span class="'+rand.color+'">$'+rand.purchasePrice+'</span>. Your merchant minimum was <span class="'+rand.color+'">$'+rand.merchantMinimum+'</span>. <span class="moneyMade">Savy made you $'+rand.moneyMade+' for this purchase!</span></div>';
        $(".notifsSS .cartDesc").removeClass("activeNotif");
        
         $('.notifsSS').prepend(newNotif);
        $($('.notifsSS .cartDesc')[0]).slideDown(700);
      
         setTimeout(function(){
             notifAnim(ind+1);
         }, 6500); 
        
    }
    setTimeout(function(){
        notifAnim(0);
     }, 6500); 
    
    function resetIllustration() {
        $(".enterPrice").val("");
        $(".acceptedPrice").hide();
        $("#hoverCart").hide();
        $(".price").text("$ 60.00");
    }
    
    function startAnim() {
        $(".enterPrice").val("5");
        setTimeout(function(){
            $(".enterPrice").val("50");
            
            setTimeout(function(){
                $(".acceptedPrice").css("display", "inline-block");
                $(".price").html("$ 50.00 <s>$ 60.00</s>");
                setTimeout(function(){
                    
                    $("#hoverCart").fadeIn(200);
                    setTimeout(function(){
                       resetIllustration();
                        setTimeout(function(){
                            startAnim();
                        }, 900); 
                    }, 1800);
                    
                }, 2000);
                
                
            }, 800);
        }, 500);
    }
    
    startAnim();
});