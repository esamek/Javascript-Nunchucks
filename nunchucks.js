
// Limit Global Variables
// 


// Document Fragments

(function(w, d){
  
  w = w || window;
  d = d || document;
  
  var Frag = function(){
    this.fragment = this._createFrag();
    return this;
  };
  
  Frag.prototype._createFrag = function(){
    return d.createDocumentFragment();
  };
  
  Frag.prototype._createElement = function(tagName, textForTextNode){
    return tagName === 'text' ? d.createTextNode(textForTextNode) : d.createElement(tagName);
  };
  
  Frag.prototype.add = function(tag, text){
    if(arguments[1]){
      text = text
    }else{
      text = null;
    }
    this.fragment.appendChild(this._createElement(tag, text));
  };
  
  // Send (or attach) to the DOM
  Frag.prototype.send = function(parent){
    parent.appendChild(this.fragment);
    this.fragment = d.createDocumentFragment();
    return parent;
  };
  
  
  window.Frag = Frag;
  
})(window, window.document);






