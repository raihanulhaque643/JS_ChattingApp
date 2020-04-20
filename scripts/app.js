//DOM queries:
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');

//check local stoage for a name
const username = localStorage.username ? localStorage.username : 'anonymous';

//class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);

//update username
newNameForm.addEventListener('submit', e =>{
    e.preventDefault();
    //update name cia Chatroom class
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    //reset the form
    newNameForm.reset();
    //show then hide the update message
    updateMssg.innerText =`Your name was updated to ${newName}`;
    setTimeout(() => updateMssg.innerText = '', 3000);
});

//add a new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => {
            newChatForm.reset()
        })
        .catch ((err) => {
            console.log(err);
        })
});

//get chats and render
chatroom.getChats((data) => {
    chatUI.render(data)
});