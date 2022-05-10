async function enviar() {
    alert("Calculando...")
    await delta()
    alert("Resultados prontos!")
}

function delta() {
 

    return new Promise((resolve)=>{
        const A = document.querySelector('#A');
        const B = document.querySelector('#B');
        const C = document.querySelector('#C');
        try{
        setTimeout(() =>{
            const a = A.value;
            const b = B.value;
            const c = C.value;
            const D = Math.pow(parseInt(b), 2) - 4 * parseInt(a) * parseInt(c);
            if(D < 0){
                alert("Não existem raízes reais!!")
            }else if(D = 0){
                alert("Os resultados são iguais!")
                const r = parseInt(a) * 2;
                const r1 = (parseInt(-b) + Math.sqrt(D)) / r
                const r2 = (parseInt(-b) - Math.sqrt(D)) / r
                let x1 = document.querySelector('x1')
                let x2 = document.querySelector('x2')
                x1.innerHTML= r1
                x2.innerHTML= r2
            }else if(D > 0) {
                alert("São dois resultados diferentes!")
                const r = parseInt(a) * 2;
                const r1 = (parseInt(-b) + Math.sqrt(D)) / r
                const r2 = (parseInt(-b) - Math.sqrt(D)) / r
                let x1 = document.querySelector('x1')
                let x2 = document.querySelector('x2')
                x1.innerHTML= r1
                x2.innerHTML= r2

            }
        }, 2000)
    }catch(err){
        alert("Erro Fatal :(" + err)
    }
    })
};


const form = document.querySelector('#numbers');
form.addEventListener('submit', el => {
    el.preventDefault();
    enviar();
});

