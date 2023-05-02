import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            
            <div className='heading'>
                <h1>---Employee Management Software--</h1>
            </div>
        
            
            <div style={{ marginTop: '10px', marginBottom: '18px',marginLeft:'1000px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Button</button>
            </div>
        </header>
    )
}

export default Header