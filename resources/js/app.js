
require("./bootstrap");

const form = document.getElementById("form");
const inputMessage = document.getElementById("input-message");
const listMessage = document.getElementById("list-messages");



form.addEventListener("submit", function (event) {
    event.preventDefault();
    const userInput = inputMessage.value;

    console.log("value : " + userInput);

    axios.post("/chat-message", {
        message: userInput,
    });
});


const channel = Echo.channel("public.chat.1");

channel.subscribed(() => {
    console.log("subscribed!!!....");
}).listen(".chat-message", (event) => {
    console.log(event);

    // alert("Message come ");

    const li = document.createElement('li');

    li.textContent = event.message

    listMessage.append(li);
})
