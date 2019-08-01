var width = document.documentElement.clientWidth	
            function getPageHeight() {
                
                var height = document.body.clientHeight;
                var width = document.body.clientWidth;
                console.log("test", width)
                console.log(height)
                heightcanvas = height
                height = height - 100;
                  
                if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
                {
                    console.log('Opera');
                }
                else if(navigator.userAgent.indexOf("Chrome") != -1 )
                {
                    console.log('Chrome');
                }
                else if(navigator.userAgent.indexOf("Safari") != -1)
                {
                    console.log('Safari');
                }
                else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
                {
                    console.log('Firefox');
                }
                else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
                {
                    console.log('IE'); 
                    
                document.getElementById('animation').style.right = 0
                document.getElementById('navbarcontid').style.display = "none";
                
                
                }  
                else 
                {
                    console.log('unknown');
                }

                console.log(height +"px");
                if (width > 1200) {
                    menu3()
                    document.getElementById('animation').style.display = "flex";
                    document.getElementById('about').style.height= height + "px";
                    document.getElementById('projects').style.height= height + "px";
                    document.getElementById('contact').style.height= height + "px";
                    document.getElementById('animation').style.height= heightcanvas + "px";
                    document.getElementById('animation').style.width= width + "px";
                    ani()
                } else {
                    document.getElementById('animation').style.display = "none";
                }
                function ani(){
                  
                    setTimeout(
                        function(){
                            document.getElementById('hamburgermenu').style.display = "flex";
                            document.getElementById('logoid').style.display = "flex";
                            document.getElementById('animation').style.display = "none"; 
                        }, 2800);
                    
                
                }
                
            }
            $(document).ready(function () {
                $('html, body').animate({
                    scrollTop: $('#about').offset().top
                }, 100);
            });

            function menu3() {
                document.getElementById("links").classList.toggle("change");
                document.getElementById("links2").classList.toggle("change");
                document.getElementById("menu2").classList.toggle("change");
                document.getElementById("bar1").classList.toggle("change");
                document.getElementById("bar2").classList.toggle("change");
                document.getElementById("bar3").classList.toggle("change");
                document.getElementById("navbarcontid").classList.toggle("change");
                
            
            }

            function animationChanges () {
                document.getElementById("bar1").style.display = "none"
                document.getElementById("bar2").style.display = "none"
                document.getElementById("bar1").style.display = "none"
                document.getElementById("navbarcontid").style.display = "none"
                document.getElementById("menu2").style.display = "none"
                
            }

            function toggle() {
                document.getElementById("links").classList.toggle("change");
                document.getElementById("links2").classList.toggle("change");
                document.getElementById("menu2").classList.toggle("change");
                document.getElementById("bar1").classList.toggle("change");
                document.getElementById("bar2").classList.toggle("change");
                document.getElementById("bar3").classList.toggle("change");
                document.getElementById("navbarcontid").classList.toggle("change");
            }

            $(function () {
                $(document).scroll(function () {
                    var height = $(window).width()
                    var $nav = $(".heading");
                    var $nav2 = $(".navbarcont")
                    var bar = $(".bar")
                    var about = $("#about")
                    var contact = $("#contact")
                    var project = $("#projects")
                    var link = $("a")
                    var underlineLink = $(".link")
                    var menu = $("#menu2")
                    var logo = $(".logo")
                    var isNavInverted
                    if (width > 1200) {
                        isNavInverted =  (
                            ($(this).scrollTop() > about.height()) &&
                            ($(this).scrollTop() < (about.height() + project.height()))
                        );
                    } else {
                        isNavInverted =  (
                            ($(this).scrollTop() > about.height()) &&
                            ($(this).scrollTop() < (about.height() + project.height() + 100))
                        );
                    }
                    console.log(isNavInverted)
                    console.log($(this).scrollTop(), about.height(), (about.height() + project.height()))

                    $nav.toggleClass('scrolled', isNavInverted);
                    $nav2.toggleClass('scrolled', isNavInverted);
                    bar.toggleClass('scrolled', isNavInverted);
                    link.toggleClass('scrolled', isNavInverted);
                    underlineLink.toggleClass('scrolled', isNavInverted);
                    menu.toggleClass('scrolled',isNavInverted);
                    logo.toggleClass('scrolled', isNavInverted);
                });
            });

            
