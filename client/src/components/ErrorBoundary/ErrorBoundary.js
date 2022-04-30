import React, { Component } from "react";
import "./errorBoundary.css";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
    });
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div class="card Error-Boundary">
          <div class="card-body py-4 lead text-danger">
            something went wrong please reload
          </div>
        </div>
      );
    }

    return <div>{this.props.children}</div>;
  }
}
