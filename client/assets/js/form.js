const btn = document.querySelector('#button');
const formElem = document.querySelector('form')

function sendData( data ) {
    console.log('Sending data');
    fetch("http://127.0.0.1:3000/newuser", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    })
}

formElem.addEventListener( 'submit', (e) => {
    e.preventDefault();
    const newData = {
        name : e.target["first_name"].value,
        surname : e.target["last_name"].value,
        email : e.target["email"].value,
        gender : e.target["gender"].value,
        ip : e.target["ip_address"].value
    }
    console.log(newData)
  sendData(newData);
} )
