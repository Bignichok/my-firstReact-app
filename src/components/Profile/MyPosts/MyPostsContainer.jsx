import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  onPostActionCreator,
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";

// const MyPostsContainer = ({ store }) => {
//   const addPost = () => {
//     store.dispatch(addPostActionCreator()); //we are rendering new post
//   };

//   const onPostChange = (postMessage) => {
//     store.dispatch(onPostActionCreator(postMessage)); //set every change in our text area to state
//   };

//   const state = store.getState();

//   return (
//     <MyPosts
//       updateNewPostText={onPostChange}
//       addPost={addPost}
//       newPostText={state.profilePage.newPostText}
//       postData={state.profilePage.postData}
//     />
//   );
// };

const mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (postMessage) => {
      dispatch(onPostActionCreator(postMessage));
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
