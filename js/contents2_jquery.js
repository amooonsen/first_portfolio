    $(function(){

      $.ajax({

        url: "./product.json",

        dataType: "json",

        success : function(data){

          if(data.length>0){



            for(let i in data){
              let tags = data[i].tags;
              let text = data[i].text;

              let url = data[i].url;

              $(".contents2_box").eq(i).append( '<div><a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a></div>'); 





              $(".contents2_box").eq(i).append('<h5><a href="#">'+data[i].tags+"</a><h5>");      

              $(".contents2_box").eq(i).append('<p><a href="#">'+data[i].text+"</a></p>");                             






                             //review random count

                             const count = Math.floor(Math.random() * 100);
                             $(".contents2_box").eq(i).append("<button>"+count+" REVIEWS"+"</button>");




                              // img

                              $(".contents2_box > div").attr("width", "270");
                              $(".contents2_box > div").attr("height", "270");

                              $(".contents2_box > div").css("overflow", "hidden");



                              $(".contents2_box > div > a > img").attr("width", "270");
                              $(".contents2_box > div > a > img").attr("height", "270");
                              $(".contents2_box > div > a > img").attr("alt", "상품사진");





                              $(".contents2_box > div > a > img").hover(function(){
                               $(this).attr("width", "270").attr("height", "270").css({"opacity":"0.6", "display":"inline"});
                             },
                             function(){
                               $(this).attr("width", "270").attr("height", "270").css({"opacity":"1" , "display":"inline"});
                             });






                              $(".contents2_box>h5>a").css({"font-size": "16px",  "height":"20px", "margin": "0px", "marginTop":"15px", "marginRight": "15px" , "marginLeft": "15px" ,"color":"#333",  "text-align":"left", "text-decoration":"none", "display":"block", "letterSpacing":"0px"
                            });


                              $(".contents2_box>p>a").css({"marginRight": "12px" ,"marginTop": "5px",  "marginLeft": "15px", "font-size": "12px", "color":"#666", "line-height": "35px", "text-align":"left", "text-decoration":"none", "display":"block"
                            });


                              $(".contents2_box>button").css({"font-size": "11px", "border-radius":" 3px" , "border":"none" ,  "background" : "rgba(255, 229, 164, 0.84)" , "padding" : "5px" , "color" : "#333" , "marginRight": "15px",  "float":"right" , "cursor":"pointer", 
                            });




                            }

                          }

                        }

                      });


    });
