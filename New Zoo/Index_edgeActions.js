/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.play("Loop")

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.$("Sound")[0].muted = true;
         sym.$("Video")[0].muted = true;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Speaker}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("Lion_Roar")[0].muted = !sym.$("Lion_Roar")[0].muted;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Homebtn}", "mouseover", function(sym, e) {
         sym.$("Arrow1").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Background}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Hide an element 
         sym.$("Arrow1").hide();
         sym.$("Arrow").hide();
         sym.$("Arrow2").hide();
         sym.$("Arrow3").hide();
         sym.$("Arrow4").hide();
         sym.$("Arrow5").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Aboutbtn}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("Arrow2").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Gallerybtn}", "mouseover", function(sym, e) {
         
         // Show an element 
         sym.$("Arrow3").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Animalbtn}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("Arrow4").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Contactbtn}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("Arrow5").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Homebtn}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         // Hide an element 
         sym.$("Arrow1").hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Aboutbtn}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         // Hide an element 
         sym.$("Arrow2").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Gallerybtn}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         // Hide an element 
         sym.$("Arrow3").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Animalbtn}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         // Hide an element 
         sym.$("Arrow4").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Contactbtn}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         // Hide an element 
         sym.$("Arrow5").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Homebtn}", "mousedown", function(sym, e) {
         
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("index.html", "_parent");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Bird_Sprite_symbol_1'
   (function(symbolName) {   
   
   })("Bird_Flying");
   //Edge symbol end:'Bird_Flying'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-12885463");