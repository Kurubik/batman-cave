// users reducer
export default function users(state = {}, action) {
  switch (action.type) {
    case 'USERS_LIST_SAVE':
      return action.users;

    case 'USERS_ADD_SAVE':
      const user = action.user;
      user._id = user._id || Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      return [...state, user];

      case 'USERS_EDIT_SAVE':
      return state.map(user =>
        Number(user._id) === Number(action.user._id) ? action.user : user
      );
      break;

    case 'USERS_DELETE_SAVE':
      return state.filter(user =>
        Number(user._id) !== Number(action.user_id)
      );

    // initial state
    default:
      return state;
  }
}