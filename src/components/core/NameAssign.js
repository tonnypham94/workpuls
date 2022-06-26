import * as React from 'react'

const FAKE_NAME = 'MS'

const NameAssign = () => {
  return (
    <div style={{
      fontSize: '0.5rem',
      color: '#fff',
      backgroundColor: '#42d2b8',
      borderRadius: '50%',
      width: '20px',
      height: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {FAKE_NAME}
    </div>
  )
}

export default NameAssign
