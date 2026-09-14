const inputs = document.querySelectorAll(".codigo input");

inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        if (input.value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });
});

const envioCodigo = document.querySelector("#enviar_codigo")
const inputEmail = document.querySelector("#email")
envioCodigo.addEventListener("click" , (event) => {
    event.preventDefault()
    if(inputEmail.value == ""){
        alert("Preencha o campo com seu E-mail antes!")
        return
    }
    alert("Código Enviado para o E-mail!")
});
