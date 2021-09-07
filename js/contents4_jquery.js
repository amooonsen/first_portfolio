    $(function(){

      $.ajax({ 

        url : "./product2.json",
        dataType : "json",
        success : function(data){
          if(data.length>0){

            for(let i in data){
              let tags = data[i].tags;
              let text = data[i].text;
              let url = data[i].url;
              let smallTags = data[i].smallTags;

              $(".contents4_box").eq(i).append('<div><a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a></div>'); 

              $(".contents4_box").eq(i).append('<h4><a href="#">'+data[i].tags+'</a><h4>');
              $(".contents4_box").eq(i).append('<p><a href="#">'+data[i].text+'</a></p>');
              $(".contents4_box").eq(i).append('<h5>'+data[i].smallTags+'<h5>');


              //img

              $(".contents4_box > div").attr("width", "225");
              $(".contents4_box > div").attr("height", "200");

              $(".contents4_box > div").css({"overflow":"hidden"});
              

              $(".contents4_box > div > a > img").attr("width", "225");
              $(".contents4_box > div > a > img").attr("height", "200");
              

              $(".contents4_box > div > a > img").attr("alt", "상품사진");

              $(".contents4_box > div > a > img").hover(function(){


                $(this).attr("width", "225").attr("height", "200").css({"opacity":"0.6", "display":"inline"});
              },
              function(){
                $(this).attr("width", "225").attr("height", "200").css({"opacity":"1", "display":"inline"});

              });

              $(".contents4_box > h4 > a ").css({"font-size":"12px", "margin":"0", "marginTop":"15px", "marginRight":"15px", "marginLeft":"15px",
                "text-align":"left","display":"block", "color":"#666"

              });




              $(".contents4_box > p > a ").css({"font-size":"15px", "marginTop":"15px",
                "text-align":"center", "display":"block", "color":"#111", "fontWeight":"bold"

              });


              $(".contents4_box > h5").css({"font-size":"14px", "color":"#666", "text-align":"center", "marginTop":"15px"

            });

            }
          }
        }


      });
    });