// Se usa el $ para hacer referencia a que la variable trae datos de la interfaz
// Una varibale que empieza con  _ que indica quee sa variable es privada, significa que no debereiamos utilizarla en otro archivo

// Si a una variable no se le asigna el tipo (const, let) se le asigna como varpor default

// let y = 5
// console.log(y);
// Var no importa donde se declare, lo podremos utilizar en cualquier parte del codigo
// Let existe desde donde se declare hasta abajo
// Var no se utiliza casi
// y = 6
// console.log(y);


const $forms = document.querySelector(".signup-form")
console.log($forms.length);

const getTemplate = () => {
    return fetch("./template.html").then((response) => response.text())
}

const sendEmailToApi = (address, template) => {
    fetch("https://bedu-email-sender-api.herokuapp.com/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            address: address,
            template: template,
        }),
    })
        .then((results) => {
            console.log(results);
            document.getElementById("email").value = "";
            alert("Email sent!");
        })
        .catch(error => {
            console.log(error);
            document.getElementsById("email").value = "";
            alert("Error sending the email!");
        });
};

function sendEmail(miVariable) {
    miVariable.preventDefault()
    const email = miVariable.target.querySelector("#inputemail").value
    console.log(email);

    getTemplate()
        .then((template) => {
            sendEmailToApi(email, template)
        })
        .catch((error) => {
            console.log(error, "error al obtener el template");
        })
}

// const sendEmail = e => {
//     e.preventDefault()
//     const email = e.target.querySelector("#input").value
//     console.log(email)      ;
// }

$forms.addEventListener("submit", sendEmail)

// for(let i = 0; i < $forms.length; i++){
//     console.log($forms);
//     $forms[i].addEventListener("submit", sendEmail)
// }

