$(document).ready(function(){
   
    
    setInterval(function(){
        
        var myArray = [
            {
                text: 'product management',
                color: '#ff5f79'
            },
            {
                text: 'building your business',
                color: '#2aadda'
            },
            {
                text: 'innovating',
                color: '#BEB8EB'
            },
            {
                text: 'your passions',
                color: '#2aff9f'
            },
            {
                text: 'perfecting your brand',
                color: '#56b0ff'
            },
            {
                text: 'your customers',
                color: '#8be3ef'
            },
            {
                text: 'designing your products',
                color: '#8898aa'
            },
            {
                text: 'marketing',
                color: '#ff5f79'
            },
            {
                text: 'your employees',
                color: '#2aadda'
            },
            {
               text: 'growth',
                color: '#2aff9f'
            }
        ]
        
        var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
        
        $(".variable").text(randomItem.text);
        $(".variable").css("color", randomItem.color);
        
    }, 5000);
    
    $("#smallMenu").click(function(){
        
        
        $("#slideMenu").toggle();
        return false;
    });
    
    $("#x").click(function(){
           
        $("#slideMenu").toggle();
        return false;
    });
    
    $(window).resize(function(){
       if($(document).width()>630) {
           $(".init").html('Our job is to understand pricing so <br>you can focus on ');
       } else {
           
           $(".init").text('Our job is to understand pricing so you can focus on ');
       }
        
        if($(document).width()>520) {
            $(".dataArg .demark").text("right price = maximum profits");
        } else {
            $(".dataArg .demark").html("right price = <br>maximum profits");
        }
        
    });
    
       if($(document).width()>630) {
           $(".init").html('Our job is to understand pricing so <br>you can focus on ');
       } else {
           
           $(".init").text('Our job is to understand pricing so you can focus on ');
       }
    
     if($(document).width()>520) {
            $(".dataArg .demark").text("right price = maximum profits");
        } else {
            $(".dataArg .demark").html("right price = <br>maximum profits");
        }
        
    
});