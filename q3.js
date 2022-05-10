async function enviar() {
    alert("sss")
    await delta()
    alert("aaa")
}

function delta() {
    const a = document.querySelector('#A')
    const b = document.querySelector('#B')
    const c = document.querySelector('#C')
    const D = Math.pow(parseInt(b.value), 2) - 4 * parseInt(a.value) * parseInt(c.value)
    alert(parseInt(a.value)+ parseInt(b.value)+ parseInt(c.value))

    return new Promise((resolve)=>{
        setTimeout(() =>{
            let x1 = document.querySelector('x1')
            x1.innerHTML = parseInt(-b.value) + Math.sqrt(D) / 2 * parseInt(a.value)
            let x2 = document.querySelector('x1')
            x2.innerHTML = parseInt(-b.value) - Math.sqrt(D) / 2 * parseInt(a.value)
            resolve()
        }, 2000)
    })
}


const form = document.querySelector('#numbers')
form.addEventListener('submit', el => {
    el.preventDefault();
    enviar()
})


