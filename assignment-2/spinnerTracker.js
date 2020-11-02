
var spinner = (function(){
    var cnt = 0;
        function spinnerUp(){
            cnt++;
            return cnt
        }
         function spinnerDown (){
             cnt -1;
             return cnt
           }
           return {
            spinnerUp:spinnerUp,
            spinnerDown:spinnerDown
        }
    })();
    
    