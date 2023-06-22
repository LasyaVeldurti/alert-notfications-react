// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'
import {GrFormClose} from 'react-icons/gr'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <>
    <div className="bg-container">
      <h1 className="heading">Alert Notifications</h1>
      <Notification>
        <div className="success-container">
          <div className="success-icon-container">
            <AiFillCheckCircle className="status-icon" />
            <h1 className="status-heading">Success</h1>
            <GrFormClose className="close-icon" />
          </div>
          <p className="description">
            You can access all the files in the folder
          </p>
        </div>

        <div className="success-container">
          <div className="error-icon-container">
            <RiErrorWarningFill className="error-icon" />
            <h1 className="status-heading">Error</h1>
            <GrFormClose className="close-icon" />
          </div>
          <p className="description">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>

        <div className="success-container">
          <div className="warning-icon-container">
            <MdWarning className="warning-icon" />
            <h1 className="status-heading">Warning</h1>
            <GrFormClose className="close-icon" />
          </div>
          <p className="description">
            Viewers of this file can see comments and suggestions
          </p>
        </div>

        <div className="success-container">
          <div className="info-icon-container">
            <MdInfo className="info-icon" />
            <h1 className="status-heading">Info</h1>
            <GrFormClose className="close-icon" />
          </div>
          <p className="description">
            Anyone on the internet can view these files
          </p>
        </div>
      </Notification>
    </div>
  </>
)

export default AlertNotifications
