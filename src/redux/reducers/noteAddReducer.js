const initialState = {
  notes: JSON.parse(localStorage.getItem("notes")) || [],
};

const addNotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
        let old = [...state.notes,action.payload]
        let all = localStorage.setItem('notes',JSON.stringify(old))
      return {
        ...state,
        notes: old
      }
    case "DELETE":
        let id = action.payload
        let deleteNote = state.notes.filter(item => item.id != id)
        localStorage.setItem('notes',JSON.stringify(deleteNote))
      return {
        ...state,
        notes: deleteNote
      }

    default:
      return state;
  }
};

export default addNotesReducer
