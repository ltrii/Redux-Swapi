import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions

import { fetchSwapi, reqSuccess, reqFailure } from "../actions";


class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    
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

const mapStateToProps = state => ({
  characters: state.characters,
  fetching: state.fetching
});

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    fetchSwapi, reqSuccess, reqFailure
  }
)(CharacterListView);
