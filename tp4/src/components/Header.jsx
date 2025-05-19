function Header ({texto}){
    const style={
        padding: '20px',
        fontSize: '50px',
        textAlign: 'center',
        backgroundColor: '#ff6240'
    };
    return (
        <header style={style}>{texto}</header>
    );
}

export default Header;