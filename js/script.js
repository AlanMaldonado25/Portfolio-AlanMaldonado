// https://formspree.io/f/myyrwlnw

const form = document.getElementById('form');

async function handleSendEmail(e){
    e.preventDefault()
    const fd = new  FormData(form);
    const response = await fetch('https://formspree.io/f/myyrwlnw',{
        method: 'POST',
        body:fd,
        headers:{
            Accept:'application/json'
        }
    })
    if(response.ok){
        form.reset()
        swal("Bien!", "Acabas de enviar tu mensaje!", "success");
    }else{
        swal({
            title: "Oops!",
            text: "Tu mensaje no pudo ser enviado",
            icon: "warning",
            button: "Intentalo nuevamente"
        });
    }
}
form.addEventListener('submit',handleSendEmail)