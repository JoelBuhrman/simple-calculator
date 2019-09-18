import React from 'react'

const Box = ({ className, children }) => (
  <div className={`${className} box`}>{children}</div>
)

export default Box
