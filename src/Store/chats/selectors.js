const getChats = (state) => state.chats.chatList || [];

export const chatSelectors = {
    getChats
}