'use strict';
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function main (){
    let ans = prompt('Угадайте загаданное число');




        let getRandomNum = function(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let num = getRandomNum(1, 100);

    
        if(ans === null){
            return;
        }
    if(ans == num){
        alert('Вы угадали!');
        return;
    }
    
    

    function IF1(){
        if(ans === null){
            return;
        }
        if(ans < num){
            ans = prompt('Загаданное число больше');
            IF1();


            if(ans == num){
                alert('Вы угадали!');
                return;
            }

            return IF2();
            
            
        }

}        
        function IF2(){
        if(ans > num){
            ans = prompt('Загаданное число меньше');

            if(ans == num){
                alert('Вы угадали!');
                return;
            }
            IF2();
            if(ans === null){
                return;
            }
            return IF1();
            
            

        }
    }
        function test(){
            if (ans = !isNumber(ans)){
                alert('Введи число!');
                return(main());
            }
            if(ans === null){
                return;
            }
            test();
        }



    num > ans ? IF1() : num < ans ? IF2() : ans = !isNumber(ans) ? test() : null;
}

main();
