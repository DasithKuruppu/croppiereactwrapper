import React, { Component } from "react";
import PropTypes from "prop-types";
import Croppie from 'croppie';
import styles from "./styles.css";

export default class CroppieWrapper extends Component {
  static propTypes = {
    Options: PropTypes.object
  };
  componentDidMount() {
    const { Options } = this.props;
    let reactcroppie = new Croppie.Croppie(
      document.getElementById("croppie-wrapper-react"),
      Options
    );
    // call a method
    reactcroppie.bind({
      url: "./download.jpg",
      orientation: 4
    });
  }

  render() {
    return (
      <div className={styles.test} id="croppie-wrapper-react">
        Example Component:
      </div>
    );
  }
}
