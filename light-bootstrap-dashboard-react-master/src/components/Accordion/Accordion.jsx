import React, { Component } from "react";
import { Panel, PanelGroup } from "react-bootstrap";

class Accordion extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      activeKey: "0"
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  render() {
    return (
      <PanelGroup
        accordion
        id="accordion-controlled-example"
        activeKey={this.state.activeKey}
        onSelect={this.handleSelect}
      >
        <Panel eventKey="1">
          <Panel.Heading>
            <Panel.Title toggle>{this.props.titulo}</Panel.Title>
          </Panel.Heading>
            <Panel.Body collapsible>{this.props.descricao}</Panel.Body>
        </Panel>
{/*         <Panel eventKey="2">
          <Panel.Heading>
            <Panel.Title toggle>Panel heading 2</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>Panel content 2</Panel.Body>
        </Panel> */}
      </PanelGroup>
    );
  }
}

export default Accordion;