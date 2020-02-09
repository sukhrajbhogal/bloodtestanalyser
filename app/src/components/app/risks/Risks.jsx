import React from 'react';

import 'antd/dist/antd.css';
import './Risks.scss';
import { Card } from 'antd'
import { Statistic, Icon } from 'antd'
import { Progress } from 'antd';
import AppContext from '../../../context/AppContext'

class Risks extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    if (this.props.counter == 0) {
      
    }
    return (
      <div className="containerRisk">
        <Card title='Hemoglobin' style={{ height: 400, width: '65%' }}>
          <div style={{ display: 'flex' }}>
            <Card style={{ width: '50%', height: 300 }} title="Low amounts of hemoglobin">
              <p style={{ fontSize: 20 }}>Low hemoglobin count mean you likely have anemia.</p>
              <p style={{ fontSize: 20 }}>This means you may be defficient in Iron, Vitamin B12, or your hemoglobin protein is abnormal. </p>
            </Card>
            <Card style={{ marginLeft: 32, width: '50%', height: 300 }}>
              <h1>You have a lower hemoglobin count than around 25% of people.</h1>
              <div style={{ display: 'flex' }}>
                <Progress type="dashboard" percent={25} />
                <div style={{marginLeft: 24}}>
                  <p style={{marginBottom: 0}}>Eat more eggs and iron rich foods.</p>
                  <p>Take Vitamin B12 and Vitamin C supplements </p>
                </div>
              </div>
            </Card>
          </div>
        </Card>

        <Card title='Sodium' style={{ marginTop: 64, height: 400, width: '65%' }}>
          <div style={{ display: 'flex' }}>
            <Card style={{ width: '50%', height: 300 }} title="High amounts of Sodium">
              <p style={{ fontSize: 20 }}>This mean you likely comsume too many processed or salty products.</p>
              <p style={{ fontSize: 20 }}>Theis means you are usually dehydrated.</p>
            </Card>
            <Card style={{ marginLeft: 32, width: '50%', height: 300 }}>
              <h1>You have higher amounts of Sodium in your blood than around 73% of people.</h1>
              <div style={{ display: 'flex' }}>
                <Progress type="dashboard" percent={73} />
                <div style={{marginLeft: 24}}>
                  <p style={{marginBottom: 0}}>Stay hydrated. Two or three quarts of water every 24 hours.</p>
                  <p>Avoid caffeine and alchohol</p>
                </div>
              </div>
            </Card>
          </div>
        </Card>

        <Card title='White Blood Cells' style={{ marginTop: 64, height: 400, width: '65%' }}>
          <div style={{ display: 'flex' }}>
            <Card style={{ width: '50%', height: 300 }} title="Low amounts of White Blood Cells">
              <p style={{ fontSize: 20 }}>This may mean you have diminishing bone marrow function.</p>
              <p style={{ fontSize: 20 }}>You may be taking prescription drugs that are destroying the cells.</p>
            </Card>
            <Card style={{ marginLeft: 32, width: '50%', height: 300 }}>
              <h1>You have lower amounts of White Blood Cells than around 43% of people.</h1>
              <div style={{ display: 'flex' }}>
                <Progress type="dashboard" percent={43} />
                <div style={{marginLeft: 24}}>
                  <p style={{marginBottom: 0}}>See your doctor</p>
                </div>
              </div>
            </Card>
          </div>
        </Card>
      </div>
    )
  }

}

export default Risks;
