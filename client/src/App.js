import React from "react";
import { connect } from "react-redux";
import { getData } from "./actions/actions";
import "./App.css";
import { Lyrics } from "./components/Lyrics";
import { SearchBar } from "./components/SearchBar";

function App(props) {
  return (
    <div className="App">
      <button
        onClick={() => {
          props.getData();
        }}
      >
        click for call
      </button>

      {props.isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <br />
          <SearchBar />
          <br />
          <Lyrics lyrics={props.lyrics} />
        </>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    lyrics: state.lyrics,
    artist: state.artist,
    title: state.title
  };
};

export default connect(mapStateToProps, { getData })(App);
