import React from 'react'

export default props => (
  <div
    style={{ position: 'relative', display: 'inline-block', ...props.style }}
    className="customFileInput_root">
    <input
      type="file"
      name={props.name}
      onChange={props.onChange}
      disabled={props.disabled}
      accept={props.accept}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    />
    {props.children}
  </div>
)
