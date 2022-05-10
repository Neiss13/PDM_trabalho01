var personagens = [
    { nome: "Hideo Yamamoto", classe: "lutador" },
    { nome: "Fenryr de Alfheim", classe: "bruxo" },
    { nome: "Tristan", classe: "bardo" },
    { nome: "Max", classe: "lutador" },
    { nome: "Mandrake", classe: "lutador" },
    { nome: "Erasto", classe: "bardo" },
    { nome: "Sirius", classe: "bruxo" }
]


function bruxos(classes) {
    if (classes.classe == "bruxo")
        return classes;
}
var pactos = personagens.filter(bruxos);
pactos.forEach(pacto => {
    document.write(pacto.value)

})
