import { connect } from "react-redux";
import { addNote } from "../actions/actions";
import { showSnackbar } from "../actions/actions";
import NoteForm from "../components/forms/noteForm/NoteForm";

const mapStateToProps = state => {
  return {
    noteStore: state.notes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitForm: note => {
      dispatch(addNote(note));
    },
    showSnackbar: message => {
      dispatch(showSnackbar(message));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
