const styles ={
    navBar: {
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor:'cyan'
    }
}
function NavBar (props){
    const [modo, setModo] = props.modo;

    return(
        <nav style={styles.navBar}>
            <div ClassName={styles.horizontal}>
                <button onClick={()=>setModo('new')}>Nuevo Producto</button>
            </div>
        </nav>
    )
}

export default NavBar;