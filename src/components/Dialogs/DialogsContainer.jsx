import Dialogs from "./Dialogs.jsx";
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";



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

const mapStateToProps = (state) => ({ dialogsPage: state.dialogsPage,});





export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

// let AuthRedirectComponent = withAuthRedirect(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);