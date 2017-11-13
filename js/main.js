window.onload = function(){
    
    var num1 = document.querySelector('input[name=num1]'),
        num2 = document.querySelector('input[name=num2]'),
        num3 = document.querySelector('input[name=num3]'),
        num4 = document.querySelector('input[name=num4]'),
        num5 = document.querySelector('input[name=num5]'),
        num6 = document.querySelector('input[name=num6]'),
        num7 = document.querySelector('input[name=num7]'),
        num8 = document.querySelector('input[name=num8]'),
        equal = document.querySelectorAll('input[name=calc]'),
        
        plus = document.querySelector('.plus'),
        minus = document.querySelector('.minus'),
        division = document.querySelector('.division'),
        multiply = document.querySelector('.multiply'),
        
        res1 = document.querySelector('.res1'),
        res2 = document.querySelector('.res2'),
        res3 = document.querySelector('.res3'),
        res4 = document.querySelector('.res4');
    
    
    
        for(var i = 0 ; i < equal.length; i++){
            equal[i].onclick  = function(){
                if(plus){
                    var result1 = 0;
                    result1 = +num1.value + +num2.value;
                    res1.innerHTML = result1;
                }
                
                if(minus){
                    var result2 = 0;
                    result2 = +num3.value - +num4.value;
                    res2.innerHTML = result2;
                }
                
                if(division){
                    var result3;
                    result3 = +num5.value / +num6.value;
                    res3.innerHTML = result3;
                }
                
                if(multiply){
                    var result4 = 0;
                    result4 = +num7.value * +num8.value;
                    res4.innerHTML = result4;
                }
            }
        }
      
        
   
}