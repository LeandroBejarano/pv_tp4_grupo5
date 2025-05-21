const styles = {
      navBar: {
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        backgroundColor: '#00A6A6',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.2)'
    },
    searchContainer: {
        display: 'flex',
        flexDirection: 'row', 
        gap: '10px',
        width: '100%'
    },
    input: {
        flex: '1', 
        padding: '12px',
        fontSize: '1.2em', 
        borderRadius: '8px',
        border: '2px solid #028090'
    },
    button: {
        padding: '14px 20px', 
        fontSize: '1.2em', 
        fontWeight: 'bold',
        backgroundColor: '#028090',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background 0.3s ease-in-out'
    },
    buttonContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '15px'
    }
};

function NavBar(props) {
    const [setModo] = props.modo;
    const [setBuscar] = props.setBuscar;
    return (
        <nav style={styles.navBar}>
            <div ClassName={styles.horizontal}>
                <button onClick={() => setModo('new')}>Nuevo Producto</button>
            </div>
            <div>
                <input placeholder='Buscar por descripción...' type='text' onChange={(e) => setBuscar(e.target.value)} />
                <button onClick={() => setModo('buscar')}>Buscar producto</button>
            </div>
        </nav>
    );
}

export default NavBar;
