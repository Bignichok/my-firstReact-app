import MyPosts from "./MyPosts";
import { addPostSuccess, deletePostSuccess } from "../../../redux/profile-reducer";
import { connect } from "react-redux";
import { getPostData } from "../../../selectors/profile-selectors";

const mapStateToProps = (state) => {
  return {
    postData: getPostData(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostSuccess(newPostText));
    },
    deletePost: (postId) => {
      dispatch(deletePostSuccess(postId));
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
