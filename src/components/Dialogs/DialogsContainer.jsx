import Dialogs from "./Dialogs.jsx";
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

// const DialogsContainer = ({ store }) => {
//   const state = store.getState();

//   const onAddMessage = () => {
//     store.dispatch(addMessageActionCreator());
//   };

//   const onMessageChange = (textMessage) => {
//     store.dispatch(onMessageChangeActionCreator(textMessage));
//   };

//   return (
//     <Dialogs
//       addMessage={onAddMessage}
//       messageChange={onMessageChange}
//       dialogsPage={state.dialogsPage}
//     />
//   );
// };

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },

    messageChange: (textMessage) => {
      dispatch(onMessageChangeActionCreator(textMessage));
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
