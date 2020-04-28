import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  render() {
    return (
      <PhotoContextProvider>
        <HashRouter basename="/SnapScout">
          <div className="container">
            <Route
              render={props => (
                <Header
                  handleSubmit={this.handleSubmit}
                  history={props.history}
                />
              )}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/grupo" />}
              />
              <Route
                path="/grupo"
                render={() => <Item searchTerm="grupo" />}
              />
              <Route
                path="/emy"
                render={() => <Item searchTerm="emy" />}
              />
              <Route path="/rodrigao" render={() => <Item searchTerm="rodrigao" />} />
              <Route path="/betina" render={() => <Item searchTerm="betina" />} />
              <Route path="/kaka" render={() => <Item searchTerm="kaka" />} />
              <Route path="/princesa" render={() => <Item searchTerm="princesa" />} />
              <Route path="/pai" render={() => <Item searchTerm="pai" />} />
              <Route path="/filho" render={() => <Item searchTerm="filho" />} />
              <Route path="/hev" render={() => <Item searchTerm="hev" />} />
              <Route path="/yuuuri" render={() => <Item searchTerm="Yuuuri" />} />
              <Route
                path="/search/:searchInput"
                render={props => (
                  <Search searchTerm={props.match.params.searchInput} />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
      </PhotoContextProvider>
    );
  }
}

export default App;
