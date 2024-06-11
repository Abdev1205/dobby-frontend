import React from 'react'

const CustomPopover = ({ isOpen, content, children }) => {
  return (
    <div>
      {children}
      {isOpen && content}
    </div>
  );
}

export default CustomPopover
