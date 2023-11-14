const chatinput = document.querySelector(".chat-input input");
const chatBody = document.querySelector(".chat-body");
const sendChatbtn = document.querySelector(".send-icon");
const chatToggler = document.querySelector(".chat-toggler");
const closeChatbtn2 = document.querySelector(".close-icon2");
const closeChatbtn = document.querySelector(".close-icon");
const enquiriesBtn = document.querySelector(".enquiries");
const backToChat = document.querySelector(".back-to-chat");
const loadingEle = document.querySelector(".loading");


const renderUserMessage = () => {
    const userInput = chatinput.value;
    renderMessageEle(userInput, "user");
    chatinput.value = "";
    toggleLoading(false);
    setTimeout(() => {
        renderChatBotResponse(userInput);
        toggleLoading(true);
        setScrollPosition();
    }, 1200);
    
};

const renderMessageEle = (txt, type) => {
    // Create user-message 
    let className = "user-message";
    const messageEle = document.createElement("div");
    const txtNode = document.createTextNode(txt);
    messageEle.append(txtNode);

    // Create Chatbot-message
    if (type !== "user") {
        className = "chatbot-message"
        messageEle.classList.add(className);

        // create ChatBotResponse Container 
        const botResponseContainer = document.createElement("div");
        botResponseContainer.classList.add("bot-response-container");

        // create Chatbot Image 
        const botImage = document.createElement("img");
        botImage.setAttribute("src", "./images/Zbot.png");

        // add BotImage and botMessage to ChatBotRespponseContainer  
        botResponseContainer.append(botImage);
        botResponseContainer.append(messageEle);
        chatBody.append(botResponseContainer);
    }
    else{
        messageEle.classList.add(className);
        chatBody.append(messageEle)
    }
    
};

const renderChatBotResponse = (userInput) => {
    const result = getChatBotResponse(userInput);
    renderMessageEle(result);
};

const getChatBotResponse = (userInput) => {
    return responseObj[userInput] == undefined? "i didnt quite get that": responseObj[userInput];
};

const setScrollPosition = () => {
    if (chatBody.scrollHeight > 0) {
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}
const toggleLoading = (show) => loadingEle.classList.toggle("hide", show);






chatinput.addEventListener("keyup", () => {
    if(event.keyCode === 13) {
        renderUserMessage();
    }
});
sendChatbtn.addEventListener("click", () => renderUserMessage());
backToChat.addEventListener("click", () => document.body.classList.remove("show-enquiries"));
enquiriesBtn.addEventListener("click", () => document.body.classList.toggle("show-enquiries"))
closeChatbtn.addEventListener("click", () => document.body.classList.remove("show-container"));
closeChatbtn2.addEventListener("click", () => document.body.classList.remove("show-container"));
chatToggler.addEventListener("click", () => document.body.classList.toggle("show-container"));



//let userMessage;

//const creatChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className 
//    const chatLi = document.createElement("li");
//    chatLi.classList.add("chat", className);
//    let chatContent = className === "outgoing" ? `<p></p>`: `<i class="ri-robot-line"></i><p></p>`;
//   chatLi.innerHTML = chatContent;
//    chatLi.querySelector("p").textContent = message;
//    return chatLi;
//}
//const handleChat = () => {
//    userMessage = chatinput.value.trim();
//   if(!userMessage) return;
//    chatinput.value = "";

//    //Append the user's message to chatbox
//    chatBody.appendChild(creatChatLi(userMessage, "outgoing"));
//    chatBody.scrollTo(0, chatBody.scrollHeight);

//    setTimeout(() => {
//        // Displayv loading message...while waiting for response
//        chatBody.appendChild(creatChatLi("Loading...", "incoming"));
//        chatBody.scrollTo(0, chatBody.scrollHeight);
//    }, 800)
//}

//chatinput.addEventListener("keyup", (event) => {
//    if(event.keyCode === 13) {
//        handleChat();
//    }
//})

//