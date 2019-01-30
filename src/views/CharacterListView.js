import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions

import { fetchSwapi } from "../actions";


class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchSwapi()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      console.log("fetching");
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  }
}

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    fetchSwapi
  }
)(CharacterListView);
