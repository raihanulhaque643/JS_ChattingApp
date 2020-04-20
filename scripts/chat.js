// addding new chat documents
// setting up real-time listener to get new chats
// updating the username
// updating the room


//constructor method sets up the initial properties in the chatroom instance:
//the asynchronous method of the class will be used to add new chats 
class Chatroom {
    constructor(room, username) { 
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
    }
    async addChat(message){
        //format a chat obejct
        const now = new Date();
        const chat = {
            message: message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
          };
          //save the chat document
          const response = await this.chats.add(chat);
          return response;
    }
    //set up real time listener:
    getChats(callback){
        this.unsub = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if(change.type === 'added'){
                        //update the UI
                        callback(change.doc.data());
                    }
                });
            });
    }
    updateName(username){
        this.username = username;
    }
    updateRoom(room){
        this.room = room;
        console.log('room updated');
        if(this.unsub){
            this.unsub();
        }
    }
}

//create new chatroom:
const chatroom = new Chatroom('gaming', 'shaun');
// console.log(chatroom); 
chatroom.getChats((data) => {
    console.log(data);
});

setTimeout(() => {
    chatroom.updateRoom('general');
    chatroom.updateName('yoshi');
    chatroom.getChats((data) => {
    console.log(data);
});
    chatroom.addChat('hello')
}, 3000)