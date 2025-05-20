import React from 'react';

const styles = {
    navBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'cyan',
        padding: '10px',
        gap: '20px'
    },
    horizontal: {
        // definir estilo
    }
}

function NavBar(props) {
    // Destructure setModo and setBuscar directly from props
    const { setModo, setBuscar } = props;
    return (
        <nav style={styles.navBar}>
            <div className={styles.horizontal}> {}
                <button onClick={() => setModo('new')}>Nuevo Producto</button>
            </div>
            <div>
                <input placeholder='Buscar por ID...' type='number' onChange={(e) => setBuscar(e.target.value)}/>
                <button onClick={() => setModo('buscar')}>Buscar producto</button>
            </div>
        </nav>
    )
}

export default NavBar;