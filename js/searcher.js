let button = document.getElementById("button");
let buttonX = document.getElementById("buttonX");
let containerSeacher = document.getElementById("containerSeacher");
let containerQuery = document.getElementById("containerQuery");
let container = document.getElementById("container");
let mainSearcher = document.getElementById("mainSearcher");
let chat = document.getElementById("chat");
let chatX = document.getElementById("chatX")
let containChat = document.getElementById("containChat");
let containChatX = document.getElementById("containChatX");
let mainContaint = document.getElementById("mainContaint");
let chatModal = document.getElementById("chatModal");


button.addEventListener("click",function(){
    containerQuery.classList.remove("main-searcher-query-hidden");
});
buttonX.addEventListener("click",function(){
    containerQuery.classList.add("main-searcher-query-hidden");
});

chat.addEventListener("click",function(){
    containChat.classList.remove("containt-chat");
    containChat.classList.add("contain-chat-hidden");
    containChatX.classList.remove("containt-chat-x-hidden")
    chatModal.classList.remove("chat-modal-hidden")
});
chatX.addEventListener("click",function(){
    containChat.classList.add("containt-chat");
    containChat.classList.remove("contain-chat-hidden");
    containChatX.classList.add("containt-chat-x-hidden")
    chatModal.classList.add("chat-modal-hidden")
})