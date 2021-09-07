                       window.onload=function(){


                     

                          const title = document.getElementById('contents2_title')
                          title.innerHTML = "COLOR COMBINATION";
                          title.style.fontFamily = "Josefin Sans,sans-serif";
                          title.style.color = "#111";
                          title.style.fontSize = "38px";
                          title.style.width = "100%";
                          title.style.textAlign = "center";       
                          title.style.letterSpacing = "1px";
                          title.margin = "0";

                          const subtitle = document.createElement("p");
                          const textnode = document.createTextNode("전문가가 제안하는 컬러 조합을 만나보세요");
                          subtitle.appendChild(textnode);
                          title.appendChild(subtitle);
                          subtitle.style.color = "#666";
                          subtitle.style.fontSize = "16px";
                          subtitle.style.marginTop = "15px";
                          subtitle.style.letterSpacing = "-0.025em";
                          subtitle.style.fontWeight = "lighter";

                          const article = document.getElementsByTagName('article')[0];
                          article.style.width = "1200px";
                          article.style.height = "1230px";
                          article.style.textAlign = "center";


                          article.style.margin = "0 auto";

                          let boxs = document.getElementsByClassName('contents2_box');

                          for(var i=0; i<boxs.length; i++){

                            boxs[i].boxSizing = "border-box";
                            boxs[i].style.width = "270px";
                            boxs[i].style.height = "380px";
                            boxs[i].style.border = "1px solid #ddd";
                            boxs[i].style.backgroundColor = "#fff";
                            boxs[i].style.margin ="15px 10px";
                            boxs[i].style.display ="inline-block";
                            boxs[i].style.boxShadow = "4px 4px 4px #ddd";
                            boxs[i].style.fontFamily = "Josefin Sans,sans-serif";

                          }


                        }


                        const contents4_title = document.getElementById('contents4_title')

                        contents4_title.innerHTML = "HOME&TONES SELCETION";
                        contents4_title.style.fontFamily = "Josefin Sans,sans-serif";
                        contents4_title.style.color = "#111";
                        contents4_title.style.fontSize = "38px";
                        contents4_title.style.width = "100%";
                        contents4_title.style.textAlign = "center";       
                        contents4_title.style.letterSpacing = "1px";
                        contents4_title.style.margin = "40px 0 0 0";

                        const contents4_subtitle = document.createElement("p");
                        const contents4_textnode = document.createTextNode("어떤 페인트가 필요하세요?");

                        contents4_subtitle.appendChild(contents4_textnode);
                        contents4_title.appendChild(contents4_subtitle);

                        contents4_subtitle.style.color = "#666";
                        contents4_subtitle.style.fontSize = "16px"
                        contents4_subtitle.style.marginTop = "15px"
                        contents4_subtitle.style.letterSpacing = "-0.025em";
                        contents4_subtitle.style.fontWeight = "lighter";



                        const contents4_article = document.getElementsByTagName('article')[0];

                        contents4_article.style.width = "1200px";
                        contents4_article.style.height = "1000px";
                        contents4_article.textAlign = "center";
                        contents4_article.style.margin = "0 auto";

                        const box = document.getElementsByClassName('contents4_box');

                        for (let i=0; i<box.length; i++){

                          box[i].style.width = "200px";
                          box[i].style.height = "320px";
                          box[i].style.border = "1px solid #ddd";
                          box[i].style.backgroundColor = "#fff";
                          box[i].style.margin = "15px 10px";
                          box[i].style.display = "inline-block";
                          box[i].style.boxShadow = "4px 4px 4px #ddd";


                        }





