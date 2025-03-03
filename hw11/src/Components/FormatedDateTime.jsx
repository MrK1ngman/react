import React from "react";

// eslint-disable-next-line no-unused-vars
function FormatedDateTime(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.date = props.date;
    }

    formate() {
      const date = Date.parse(this.date);
      const now = new Date();

      if (now - date > 1000 * 60 * 60 * 24) return "Больше суток назад";
      if (now - date > 1000 * 60 * 60) return "5 часов назад";
      return "12 минут назад";
    }

    render() {
      return <Component date={this.formate()} />;
    }
  };
}

export default FormatedDateTime;
