var res = document.querySelector('p#res')
var calculo = []
var si = 0     

function insert(n){
    var numero = res.innerHTML;
    res.innerHTML = numero + n
}     


function somar(){
    calculo.push(+res.innerHTML)
    res.innerHTML = '' 

     if(si == 2){
        var resultado = calculo.reduce(function(total,item){
        return total * item;
    })
    calculo = []
    calculo.push(resultado)
    }

    if(si == 3){
        var resultado = calculo.reduce(function(total,item){
        return total - item;
    })
    calculo = []
    calculo.push(resultado)
    }

    if(si == 4){   
        var resultado = calculo.reduce(function(total,item){
        return total/item;
    })
       calculo = []
       calculo.push(resultado)
    }

    if(si == 5){   
        var resultado = calculo.reduce(function(total,item){
        return total**item;
    })
    calculo = []
    calculo.push(resultado)
    }

    if(si == 6){   
        var resultado = calculo[0] ** (1/calculo[1]) 
        calculo = []
        calculo.push(resultado)
    }
    else{
        si = 1
    }
}


function mult(){
    calculo.push(+res.innerHTML)
    res.innerHTML = ''

    if(si == 1){ 
        var resultado = calculo.reduce(function(total,item){
        return total + item;
    })
    calculo = []
    calculo.push(resultado)
    } 

    if(si == 3){
        var resultado = calculo.reduce(function(total,item){
        return total - item;
    })
    calculo = []
    calculo.push(resultado)
    }

    if(si == 4){   
        var resultado = calculo.reduce(function(total,item){
        return total/item;
    })
    calculo = []
    calculo.push(resultado)
    }

    if(si == 5){   
        var resultado = calculo.reduce(function(total,item){
        return total**item;
    })
    calculo = []
    calculo.push(resultado)
    }

    if(si == 6){   
        var resultado = calculo[0] ** (1/calculo[1]) 
        calculo = []
    calculo.push(resultado)
    }
    else{
        si = 2
    }
}


function sub(){
    calculo.push(+res.innerHTML)
    res.innerHTML = ''

    if(si == 1){ 
        var resultado = calculo.reduce(function(total,item){
        return total + item;
    })
    calculo = []
    calculo.push(resultado)
    } 

     if(si == 2){
        var resultado = calculo.reduce(function(total,item){
        return total * item;
    })
    calculo = []
    calculo.push(resultado)
    }

    if(si == 4){   
        var resultado = calculo.reduce(function(total,item){
        return total/item;
    })
    calculo = []
    calculo.push(resultado)
    }

    if(si == 5){   
        var resultado = calculo.reduce(function(total,item){
        return total**item;
    })
    calculo = []
    calculo.push(resultado)
    }

    if(si == 6){   
        var resultado = calculo[0] ** (1/calculo[1]) 
        calculo = []
    calculo.push(resultado)
    }
    else{
        si = 3
    }
}


function div(){
    calculo.push(+res.innerHTML)
    res.innerHTML = ''

    if(si == 1){ 
        var resultado = calculo.reduce(function(total,item){
        return total + item;
    })
    calculo = []
    calculo.push(resultado)

    } 
     if(si == 2){
        var resultado = calculo.reduce(function(total,item){
        return total * item;
    })
    calculo = []
    calculo.push(resultado)
    }

    if(si == 3){
        var resultado = calculo.reduce(function(total,item){
        return total - item;
    })
    calculo = []
    calculo.push(resultado)
    }

    if(si == 5){   
        var resultado = calculo.reduce(function(total,item){
        return total**item;
    })
    calculo = []
    calculo.push(resultado)
    }

    if(si == 6){   
        var resultado = calculo[0] ** (1/calculo[1]) 
        calculo = []
    calculo.push(resultado)
    }
    else{
        si = 4
    }
}


function pot(){
    calculo.push(+res.innerHTML)
    res.innerHTML = ''

    if(si == 1){ 
        var resultado = calculo.reduce(function(total,item){
        return total + item;
    })
    calculo = []
    calculo.push(resultado)
    }

    if(si == 2){
        var resultado = calculo.reduce(function(total,item){
        return total * item;
    })
    calculo = []
    calculo.push(resultado)
    }

    if(si == 3){
        var resultado = calculo.reduce(function(total,item){
        return total - item;
    })
    calculo = []
    calculo.push(resultado)
    }

    if(si == 4){   
        var resultado = calculo.reduce(function(total,item){
        return total/item;
    })
    calculo = []
    calculo.push(resultado)
    }
    else{
        si = 5
    }
}


function raiz(){
    calculo.push(+res.innerHTML)
    res.innerHTML = ''
    if(si == 1){ 
        var resultado = calculo.reduce(function(total,item){
        return total + item;
    })
    calculo = []
    calculo.push(resultado)
    }

    if(si == 2){
        var resultado = calculo.reduce(function(total,item){
        return total * item;
    })
    calculo = []
    calculo.push(resultado)
    }

    if(si == 3){
        var resultado = calculo.reduce(function(total,item){
        return total - item;
    })
    calculo = []
    calculo.push(resultado)
    }  

    if(si == 4){   
        var resultado = calculo.reduce(function(total,item){
        return total/item;
    })
    calculo = []
    calculo.push(resultado)
    }

    if(si == 5){   
        var resultado = calculo.reduce(function(total,item){
        return total**item;
    })
    calculo = []
    calculo.push(resultado)
    }
    else{
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
        var resultado = calculo[0] ** (1/calculo[1]) 
    }
    document.querySelector('p#res').innerHTML = resultado
    calculo = []
}