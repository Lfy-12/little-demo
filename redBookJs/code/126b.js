function htmlEscape(text){
  return text.replace(/[<>"&]/g,function(match,pos,originalText){
    switch(match){
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "\"":
        return "&quot;";
    }
  });
}

console.log(htmlEscape("<p class=\"greeting\">Hello world!</p>"));