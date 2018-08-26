
var card = document.querySelectorAll(".card");

for (var i=0; i<card.length;i++){
    
   card[i].addEventListener("mouseenter", function(){
   this.classList.add("border-secondary"); 
   });}
   
   
   for (var i=0; i<card.length;i++){
   card[i].addEventListener("mouseleave", function(){
   this.classList.remove("border-secondary");  
   });}
   

   for (var i=0; i<card.length;i++){
   card[i].addEventListener("click", function(){
   

      if(this.getAttribute('id')=="techniczne"){
      window.open("https://www.youtube.com/watch?v=3EJOERIKeLc");
      }
       if(this.getAttribute('id')=="spoty"){
      window.open("https://www.youtube.com/watch?v=Jsil57vnbLE");
      }
       if(this.getAttribute('id')=="animacje"){
      window.open("https://www.youtube.com/watch?v=HDr0rlH-Cdw");
      }
       if(this.getAttribute('id')=="instrukcje"){
      window.open("https://www.youtube.com/watch?v=9kYqANCBBCE");
      }
       if(this.getAttribute('id')=="portfolio"){
      window.open("https://github.com/Numbian/portfolio");
      }
       if(this.getAttribute('id')=="makro"){
      window.open("https://stock.adobe.com/pl/contributor/207721167/numbian");
      }
       if(this.getAttribute('id')=="gry"){
      window.open("https://play.google.com/store/apps/developer?id=NumbianDev");
      }
      if(this.getAttribute('id')=="yt"){
      window.open("https://www.youtube.com/channel/UCI4PjvSFvx-tg21FfQI3jDA");
      }
      
      
      
      
      else{
      window.open("http://www.wybrane-projekty.pl/"+this.getAttribute('id'));
      }
 
 
 
 
   });}
   
  