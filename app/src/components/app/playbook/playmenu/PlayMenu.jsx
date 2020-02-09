import React from 'react';
import { Menu, Icon, message } from 'antd';
import 'antd/dist/antd.css';
import './PlayMenu.scss';
import { Link } from 'react-router-dom';

import AddPlayDialog from './addplaydialog/AddPlayDialog';
import DeletePlayDialog from './deleteplaydialog/DeletePlayDialog';

class PlayMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plays: [{ name: 'Overview' }, { name: 'Risks' }],
      addDialogVisible: false,
      deleteDialogVisible: false,
      currentKey: '',
      currentPlayName: '',
    };
  }

  /**
   * The function that is called whenever a Menu Item is clicked.
   * @param e : event
   */
  handleClick = (e) => {
    const { key } = e;
    // if they click 'add-play' item, make the dialog visible
    if (key === 'add-play') {
      this.setState({
        addDialogVisible: true,
      });
    } else if (key.includes('delete')) {
      this.setState({
        deleteDialogVisible: true,
      });
    } else { // otherwise just show the feedback
      this.setState({
        currentKey: key,
      });
    }
  };

  /**
   * Callback when the dialog is closed
   * @param playName : the name of the play
   * @param isVisible : true the window isn't closed, false the window is closed
   */
  addPlayCallback = (playName, isVisible) => {
    this.setState({
      addDialogVisible: isVisible,
    });
    if (playName) { // if the name exists then return
      this.addPlay(playName);
    }
  }

  /**
   * Adds a play to the state
   * @param playName : the name of the play
   */
  addPlay = (playName) => {
    const { plays } = this.state;
    const names = plays.map((play) => play.name);

    if (names.includes(playName)) {
      message.error(`"${playName}" already exists.`);
    } else if (playName.includes('_')) {
      message.error('You cannot have an underscore in a play name.');
    } else {
      this.setState((prevState) => ({
        plays: [...prevState.plays, { name: playName }],
      }));
      message.success(`"${playName}" has been added!`);
    }
  }

  /**
   * Called when the DeletePlayDialog is finished its lifecycle.
   * @param playToDelete - The play to delete
   * @param isVisible - If the dialog is visible
   */
  deletePlayCallback = (playToDelete, isVisible) => {
    const { plays } = this.state;
    this.setState({
      deleteDialogVisible: isVisible,
    });
    if (playToDelete) {
      const nameToDelete = playToDelete.replace(/_/g, ' ');
      const playsRemoved = plays.filter((el) => el.name !== nameToDelete);
      this.setState({
        plays: playsRemoved,
      });
      message.success(`"${playToDelete}" has been removed.`);
    }
  }

  /**
   * Called when the title of a submenu is clicked
   * @param e - event
   */
  handleTitleClick = (e) => {
    this.setState({
      currentPlayName: e.key,
      currentKey: `${e.key}_edit`,
    });


  }

  render() {
    const {
      plays,
      addDialogVisible,
      deleteDialogVisible,
      currentKey,
      currentPlayName,
    } = this.state;
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          className="menu"
          mode="inline"
          selectedKeys={[currentKey]}
          openKeys={[currentPlayName]}
        >
          {
            plays.map((val) => {
              const { name } = val;
              const keyName = name.replace(/\s+/g, '_');
              return (
                <Menu.Item
                  key={keyName}
                  onTitleClick={this.handleTitleClick}
                >
                  <Link to={name.toLowerCase()} />
                  {name}
                </Menu.Item>
              );
            })
          }
          <Menu.Item key="add-play">
            <Icon type="download" />
            Import a file.
          </Menu.Item>
        </Menu>

        {addDialogVisible
          && (
            <AddPlayDialog
              addPlayCallback={this.addPlayCallback}
              addDialogVisible={addDialogVisible}
            />
          )}
        {deleteDialogVisible
          && (
            <DeletePlayDialog
              deletePlayCallback={this.deletePlayCallback}
              deleteKey={currentPlayName}
              deleteDialogVisible={deleteDialogVisible}
            />
          )}
      </div>
    );
  }
}

export default PlayMenu;
