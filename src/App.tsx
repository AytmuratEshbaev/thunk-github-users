import "./App.css";
import RepoList from "./components";
import { connect } from "react-redux";
import { fetchData } from "./actions/repos";
import { useState } from "react";

function App({ fetchingData, data, isLoading }: any) {
  const [username, setUsername] = useState("");

  const searchValue = (e: React.FormEvent) => {
    let search = (e.target as HTMLInputElement).value;
    setUsername(search);
  };

  return (
    <div className="App">
      <div className="app__control">
        <input
          type="search"
          name="username"
          id="username"
          defaultValue={username}
          onInput={searchValue}
        />
        <button
          onClick={() =>
            fetchingData(
              `https://api.github.com/users/${username}/repos?sort=updated`
            )
          }
        >
          Get
        </button>
      </div>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <RepoList repos={data} />
      )}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    data: state.data,
    isLoading: state.dataIsLoading,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchingData: (url: string) => dispatch(fetchData(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
