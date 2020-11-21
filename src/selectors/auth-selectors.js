export const getIsAuth=(state)=> (state.auth.get("isAuth"))

export const getLogin =(state)=> (state.auth.get("login"))

export const getAuthorizedUserId = (state)=> (state.auth.get("userId"))

export const getIsFetching = (state)=> (state.auth.get("isFetching"))
