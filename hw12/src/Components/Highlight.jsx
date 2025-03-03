import React from "react";
import Popular from "./Popular";
import New from "./New";

// eslint-disable-next-line no-unused-vars
function Highlight(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.views = props.views;
    }

    render() {
      if (this.views > 1000) {
        return (
          <Popular>
            <Component {...this.props} />
          </Popular>
        );
      }
      if (this.views < 100) {
        return (
          <New>
            <Component {...this.props} />
          </New>
        );
      }
      return <Component {...this.props} />;
    }
  };
}

export default Highlight;
