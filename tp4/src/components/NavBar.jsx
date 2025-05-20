const styles = {
    navBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00A6A6'
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
