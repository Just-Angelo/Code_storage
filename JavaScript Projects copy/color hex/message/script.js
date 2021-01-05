const send_button = document.querySelector('#send_button');
const message_in = document.querySelector('#messageIn');
const message_out = document.querySelector('#message_out');

send_button.addEventListener('click', sendMSG)

function sendMSG(){
    let content = message_in.value;
    message_out.innerHTML = content;
}
