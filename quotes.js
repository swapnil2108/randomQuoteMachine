 var colors = ["cornflowerblue","blurywood","choclate","crimson","darkblue","darkolivegreen","darkorchid","darkslateblue","darkturquoise","dimgrey","firebrick"];
var prev;
$(document).ready(function(){  
   
    $.ajax({
        url: "http://quotes.stormconsultancy.co.uk/quotes.json",
        success: function(data){
            var random = Math.floor(Math.random()*44);
      var author = JSON.stringify(data[random].author);
      var quote = JSON.stringify(data[random].quote);
            
           $("#message").html(quote); 
            $("#author").html("-"+author);
            $("#tweet").attr("href",'https://twitter.com/intent/tweet?text='+quote +"-"+ author);
           
}
    });
    
    
    
    $("#getQuotes").on("click",function(){

        $.ajax({
  url: "http://quotes.stormconsultancy.co.uk/quotes.json",
  success: function(data){
      var random = Math.floor(Math.random()*6);
      var author = JSON.stringify(data[random].author);
      var quote = JSON.stringify(data[random].quote);
      $("#message").html(quote);
      $("#author").html("-"+author);

      $("#tweet").attr("href",'https://twitter.com/intent/tweet?text='+quote +"-"+ author);
      rand();
}
    });
    });
    
  });

function rand(){
    var getColorNumber = Math.floor(Math.random()*11);
    if(getColorNumber == prev){
        rand();
    }
    else{
         var color = colors[getColorNumber];
    
        $(".container-table").css("background", color);
        $(".tweetButton").css("background",color);
        $("#getQuotes").css("background",color);
    prev = getColorNumber;
    }
    }
