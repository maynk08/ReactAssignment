import React from "react";
import "./Modal.css";
import {FaTimes} from 'react-icons/fa'

type CustomModalProps = {
  headerContent: React.ReactNode;
  headerSeparator?: boolean;
  footerContent?: React.ReactNode;
  footerSeparator?: boolean;
  bodyContent: React.ReactNode;
  height: number;
  width: number;
  showPrimaryButton?: boolean;
  showSecondaryButton?: boolean;
  showCloseButton?: boolean;
  onClose?: () => void;
};

const CustomModal = ({
  headerContent,
  headerSeparator,
  footerSeparator,
  bodyContent,
  height,
  showPrimaryButton,
  showSecondaryButton,
  width,
  onClose,
}: CustomModalProps) => {
  const modalStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div className={`custom-modal`}>
      <div className="custom-modal-overlay" />
      <div className="custom-modal-content" style={modalStyle}>

        <div className="custom-modal-header">{headerContent}
        <button style={
          {
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:'10px',
            border: "0px",
            backgroundColor: "rgb(255, 255, 255)",
            marginTop: "6px",
            position: "relative",
            bottom: "20px",
            left: "20px",
            height: "24px"
        }
         }
          onClick={onClose}>
        <FaTimes />
      </button>
        </div> 
        
        {headerSeparator && <hr />}
        <div className="custom-modal-body">{bodyContent}</div>
        {footerSeparator && <hr />}
        <div className="btns">
          {showPrimaryButton && <button className="close-btn" onClick={onClose}>Close</button>}
          {showSecondaryButton && (
            <button className="save-btn">
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
