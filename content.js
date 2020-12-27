setTimeout(function(){ var str_xpath;
  str_xpath = "//span[@class='lbl']"
  var flag ;
  var headings = document.evaluate(str_xpath, document, null, XPathResult.ANY_TYPE, null);
  flag =false;
  /* Search the document for all h3 elements.
   * The result will likely be an unordered node iterator. */
  var thisHeading = headings.iterateNext();
  var count =0;
  
  while (thisHeading) {
    count = count +1 ;
  flag =true ;
      alert(thisHeading.textContent);
    alertText += thisHeading.textContent + "\n";
    thisHeading = headings.iterateNext();
    
  }
  var alertText = "Total no of matching elements for the xpath :"+str_xpath+" are : " + count;
  alert(alertText);
}, 1000);
  



/* Code to Change the style of any web APP */
// var images = document.getElementsByTagName('a');
// for (var i = 0, l = images.length; i < l; i++) {
//   images[i].style.backgroundColor ="pink";
//   images[i].textContent ="Rahul Singh";
//   if(i==0)
//   {alert(window.location.href);
//     alert(document.body.nextElementSibling );
//     }
// }
