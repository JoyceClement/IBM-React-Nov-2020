function addCount(){
    var cnt =  0;
    for(var i=0; i<arguments.length; i++){
       cnt += arguments[i];
    }
    return cnt;
  }