import MyPosts from "./MyPosts";
import {addPostActionCreator,deletePostActionCreator} from "../../../redux/profile-reducer";
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
      dispatch(addPostActionCreator(newPostText));
    },
    deletePost: (postId)=>{
      dispatch(deletePostActionCreator(postId))
    }
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
