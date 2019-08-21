const authReducer = (state, action) => {
  switch (action.type) {
    case 'AUTHENTICATE':
      return { isAuth: action.isAuth }
    case 'ADD_TODO':
			return [ 
				...state, 
				{ toDo: action.toDo, 
					id: action.id, 
					isComplete: action.isComplete 
				}
		]
    default:
      return state;
  }
}

export default authReducer;