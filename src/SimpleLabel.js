import React, { Component } from "react";
import ReactDOMServer from "react-dom/server";
import { Parser as HtmlToReactParser } from "html-to-react";

export default class SimpleLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: ""
    };
  }

  componentDidMount() {
    let { schema: { title }, name } = this.props;

    this.setState({
      label: title ? title : name
    });
  }

  render() {
    let {
      uiSchema: { simpleLabel: { styles, classNames = "simpleLabel" } = {} }
    } = this.props;

    const htmlToReactParser = new HtmlToReactParser();
    const reactElement = htmlToReactParser.parse(this.state.label);
    const reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);
    return (
      <span className={classNames} style={styles}>
        {reactHtml}
      </span>
    );
  }
}
