let chatContainer = document.querySelectorAll(".chat__person-container");

chatContainer.forEach(chatContain => {

    chatContain.addEventListener("click", () => { 
        chatContainer.forEach(b => b.classList.remove('selected')); 

        chatContain.classList.add('selected'); 
    });
});




let chatContainers = document.querySelectorAll(".chat__person-container");


chatContainers.forEach(chatContainer => {
    chatContainer.addEventListener("click", () => {
        

        let chatName = chatContainer.getAttribute("data-name");
        let chatImage = chatContainer.getAttribute("data_image");

        
        document.getElementById("chatNameDisplay").textContent = chatName;
        document.getElementById("chatImageDisplay").src = chatImage;
    });
});
