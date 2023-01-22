import React, { useState } from 'react'

const Notification = props => {
  const { message, setMessage } = props

  return (
    <div style={{ display: message ? 'block' : 'none' }} id="notificationPopup">
      <div className="popup">
        <div id="overlay" />
        <div id="notification_popup">
          <p>{message}</p>
          <div className="notification_popup">
            <div className="field_section">
              <div className="field_row">
                <div className="field_column one_half">
                  <a
                    href=""
                    onClick={e => {
                      e.preventDefault()
                      setMessage('')
                    }}
                    id="popup_cancel"
                    className="block_button cancel_button extend">
                    Continue
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification;
