import React from 'react';
import { Modal } from 'antd';
import { post } from 'axios';
import PropTypes from 'prop-types';

class AddPlayDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
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

    onFormSubmit(e){
      e.preventDefault() // Stop form submit
      this.fileUpload(this.state.file).then((response)=>{
        console.log(response.data);
      })
    }
    onChange(e) {
      this.setState({file:e.target.files[0]})
    }
    fileUpload(file){
      const url = '';
      const formData = new FormData();
      formData.append('file',file)
      const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      }
      return  post(url, formData,config)
    }

    render() {
      const { addDialogVisible } = this.props;
      return (
        <Modal
          title="Import a file"
          visible={addDialogVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}>


      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>    

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
