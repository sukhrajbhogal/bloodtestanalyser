import React from 'react';
import { Modal, Input } from 'antd';
import PropTypes from 'prop-types';
import "./AddPlayDialog.scss"
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
registerPlugin(FilePondPluginImagePreview);

class AddPlayDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playName: '',
      file: null
    };
  }

  /**
   * When the ok button or the enter key is clicked
   */
  handleOk = () => {
    const { addPlayCallback } = this.props;
    const { playName } = this.state;
    addPlayCallback(playName, false);
  }

  /**
   * When the cancel button is clicked do nothing
   */
  handleCancel = () => {
    const { addPlayCallback } = this.props;
    addPlayCallback('', false);
  }

  /**
   * When the input is changed
   * @e : event
   */
  handleChange = (e) => {
    this.setState({
      playName: e.target.value,
    });
  }

  onChange(e) {
    this.setState({ file: e.target.files[0] })
    registerPlugin(FilePondPluginImagePreview);
  }

  render() {
    const { addDialogVisible } = this.props;
    return (
      <Modal
        title="Import a file"
        visible={addDialogVisible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}

      >

        <FilePond name="File" server="#" />



      </Modal>


    );
  }
}

AddPlayDialog.defaultProps = {
  addPlayCallback: () => { },
  addDialogVisible: true,
};

AddPlayDialog.propTypes = {
  addPlayCallback: PropTypes.func,
  addDialogVisible: PropTypes.bool,
};

export default AddPlayDialog;
