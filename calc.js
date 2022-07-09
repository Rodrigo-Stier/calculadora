var res = document.querySelector('p#res')
var calculo = []
var si = 0

function insert(n){
    var numero = res.innerHTML;
    res.innerHTML = numero + n
}

function res1(){
    var resultado = calculo.reduce(function(total,item){
        return total + item;
    })
    calculo = []
    calculo.push(resultado)
}
function res2(){
    var resultado = calculo.reduce(function(total,item){
        return total * item
    })
    calculo = []
    calculo.push(resultado)
}
function res3(){
    var resultado = calculo.reduce(function(total,item){
        return total - item;
    })
    calculo = []
    calculo.push(resultado)
}
function res4(){
    var resultado = calculo.reduce(function(total,item){
        return total/item;
    })
    calculo = []
    calculo.push(resultado)
}
function res5(){
    var resultado = calculo.reduce(function(total,item){
        return total**item;
    })
    calculo = []
    calculo.push(resultado)
}
function res6(){
    var resultado = calculo.reduce(function(total,item){
        return total**(1/item)
    }) 
    calculo = []
    calculo.push(resultado)
}

function somar(){
    calculo.push(+res.innerHTML)
    res.innerHTML = '' 

    if(si == 2){
        res2()
    }

    if(si == 3){
        res3()
    }

    if(si == 4){   
        res4()
    }

    if(si == 5){   
        res5()
    }

    if(si == 6){   
        res6()
    }

    if(si != 1){
        si = 1
    }
}

function mult(){
    calculo.push(+res.innerHTML)
    res.innerHTML = ''

    if(si == 1){ 
        res1()
    } 

    if(si == 3){
        res3()
    }

    if(si == 4){   
        res4()
    }

    if(si == 5){   
        res5()
    }

    if(si == 6){   
        res6()
    }

    if(si != 2){
        si = 2
    }
}

function sub(){
    calculo.push(+res.innerHTML)
    res.innerHTML = ''

    if(si == 1){ 
        res1()
    } 

    if(si == 2){
        res2()
    }

    if(si == 4){   
        res4()
    }

    if(si == 5){   
        res5()
    }

    if(si == 6){   
        res6()
    }

    if(si != 3){
        si = 3
    }
}

function div(){
    calculo.push(+res.innerHTML)
    res.innerHTML = ''

    if(si == 1){ 
        res1()

    } 
     if(si == 2){
        res2()
    }

    if(si == 3){
        res3()
    }

    if(si == 5){   
        res5()
    }

    if(si == 6){   
        res6()
    }

    if(si != 4){
        si = 4
    }
}

function pot(){
    calculo.push(+res.innerHTML)
    res.innerHTML = ''

    if(si == 1){ 
        res1()
    }

    if(si == 2){
        res2()
    }

    if(si == 3){
        res3()
    }

    if(si == 4){   
        res4()
    }

    if(si != 5){
        si = 5
    }
}

function raiz(){
    calculo.push(+res.innerHTML)
    res.innerHTML = ''

    if(si == 1){ 
        res1()
    }

    if(si == 2){
        res2()
    }

    if(si == 3){
        res3()
    }  

    if(si == 4){   
        res4()
    }

    if(si == 5){   
        res5()
    }

    if(si != 6){
        si = 6
    }
}

function potencia(){
    var pot = (+res.innerHTML) ** 2 
    res.innerHTML = pot
}

function raiz2(){
    var sourc = (+res.innerHTML) ** 0.5
    res.innerHTML = sourc
}

function clean(){
    res.innerHTML = ''
    calculo = []
}

function CE(){
    res.innerHTML = ''
}

function fatorial(){
    var fat = +res.innerHTML
    var f = 1
    for (c = fat; c > 1; c--){
        f *= c
    }
    res.innerHTML = f
}

function igual(){
    
    calculo.push(+res.innerHTML)

    if(si == 1){ 
        var resultado = calculo.reduce(function(total,item){
        return total + item;
    })}

    if(si == 2){
        var resultado = calculo.reduce(function(total,item){
        return total * item;
    })}

    if(si == 3){
        var resultado = calculo.reduce(function(total,item){
        return total - item;
    })}

    if(si == 4){   
        var resultado = calculo.reduce(function(total,item){
        return total/item;
    })}

    if(si == 5){   
        var resultado = calculo.reduce(function(total,item){
        return total**item;
    })}

    if(si == 6){   
        var resultado = calculo.reduce(function(total,item){
            return total**(1/item)
    })}
    
    document.querySelector('p#res').innerHTML = resultado
    calculo = []
} 
