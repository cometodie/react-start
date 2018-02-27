import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { List, ListItem } from "material-ui/List";
import IconButton from "material-ui/IconButton";
import { Card, CardHeader } from "material-ui/Card";
import Checkbox from "material-ui/Checkbox";
import ActionFavorite from "material-ui/svg-icons/action/favorite";
import ActionFavoriteBorder from "material-ui/svg-icons/action/favorite-border";
import NavigationClose from "material-ui/svg-icons/navigation/close";
require("./list.scss");

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: props.noteStore
    };
    this.deleteNote = this.deleteNote.bind(this);
    this.updateCheck = this.updateCheck.bind(this);
  }

  componentWillMount() {
    this.props.getNotes();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ notes: nextProps.noteStore });
  }

  deleteNote(note) {
    this.props.deleteNote(note);
    this.props.showSnackbar("Note was deleted successfuly!");
  }

  updateCheck(note) {
    note.important = !note.important;
    this.props.updateNote(note);
    this.props.showSnackbar("Note was successfuly changed!");
  }

  render() {
    return (
      <Card className="card">
        <CardHeader
          title="Football dude"
          subtitle="here you can manage your notes"
          className="cardHeader"
          avatar="assets/images/RV1YFXOLicc.jpg"
        />
        <List>
          {this.state.notes.map((note, index) => {
            return (
              <div className="row-flex" key={index}>
                <div className="row-flex">
                  <Checkbox
                    checkedIcon={<ActionFavorite />}
                    uncheckedIcon={<ActionFavoriteBorder />}
                    checked={note.important}
                    onCheck={this.updateCheck.bind(this, note)}
                    className="important"
                  />
                  <ListItem
                    key={index}
                    style={{ color: this.props.isMultiplicity }}
                  >
                    Title: {note.title}. Text: {note.text}
                  </ListItem>
                </div>
                <IconButton onClick={this.deleteNote.bind(this, note)}>
                  <NavigationClose />
                </IconButton>
              </div>
            );
          })}
        </List>
      </Card>
    );
  }
}

TodoList.propTypes = {
  noteStore: PropTypes.arrayOf(
    PropTypes.shape({
      important: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TodoList;
