import MyPosts from "./MyPosts";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import { connect } from "react-redux";
import { getNewPostText,getPostData } from "../../../selectors/profile-selectors";

const mapStateToProps = (state) => {
  return {
    postData: getPostData(state),
    newPostText: getNewPostText(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
