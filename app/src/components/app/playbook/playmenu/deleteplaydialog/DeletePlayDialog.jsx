import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

class DeletePlayDialog extends React.Component {
  /**
   * When you click the dialog cancel
   */
  handleCancel = () => {
    const { deletePlayCallback } = this.props;
    deletePlayCallback('', false);
  }

  /**
   * When you click the dialog ok
   */
  handleOk = () => {
    const { deletePlayCallback, deleteKey } = this.props;
    deletePlayCallback(deleteKey, false);
  }

  /**
   * @param str - String to get play name of
   * @return - the str without underscore
   */
  getPlayName = (str) => {
    const name = str.split('_').join(' ');
    return name;
  }

  render() {
    const { deleteDialogVisible, deleteKey } = this.props;
    const name = this.getPlayName(deleteKey);
    return (
      <Modal
        title="Delete this play?"
        visible={deleteDialogVisible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <p>{`Are you sure you want to delete ${name}?`}</p>
      </Modal>
    );
  }
}

DeletePlayDialog.defaultProps = {
  deletePlayCallback: () => {},
  deleteDialogVisible: false,
  deleteKey: '',
};

DeletePlayDialog.propTypes = {
  deletePlayCallback: PropTypes.func,
  deleteDialogVisible: PropTypes.bool,
  deleteKey: PropTypes.string,
};

export default DeletePlayDialog;
