import { Component, Fragment } from "react";
import Layout from "./layouts/Layout";

type MainState = {
  toggleSidebar: boolean;
};

class Main extends Component<{}, MainState> {
  state: MainState = {
    toggleSidebar: false,
  };

  onClickToggleSidebar = () => {
    let current = this.state.toggleSidebar;
    this.setState({ toggleSidebar: !current });
  };
  

  render() {
    return (
      <Fragment>
        <Layout></Layout>
      </Fragment>
    );
  }
}

export default Main;
