import {connect} from "react-redux";
import {chatSelectors, createAddChat} from "../../Store/chats";


const mapStateToProps = (state) => ({
  chats: state.chats.chatList,
})

const mapDispatchToProps = (dispatch) => ({
  addChat: (chat) => dispatch(createAddChat(chat)),
})

export const chatsConnect = connect(mapStateToProps, mapDispatchToProps);