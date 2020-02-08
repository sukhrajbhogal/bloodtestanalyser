import React from 'react';
import { Modal, Input } from 'antd';
import PropTypes from 'prop-types';

class AddPlayDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playName: '',
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

    render() {
      const { addDialogVisible } = this.props;
      return (
        <Modal
          title="Import a file"
          visible={addDialogVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input id="add-play" placeholder="Play name" onChange={this.handleChange} onPressEnter={this.handleOk} />
        </Modal>
      );
    }
}

AddPlayDialog.defaultProps = {
  addPlayCallback: () => {},
  addDialogVisible: true,
};

AddPlayDialog.propTypes = {
  addPlayCallback: PropTypes.func,
  addDialogVisible: PropTypes.bool,
};

export default AddPlayDialog;
