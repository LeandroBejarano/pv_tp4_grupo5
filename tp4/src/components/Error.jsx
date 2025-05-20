function Error ({texto}){
    const style={
        color:'black',
        oppacity:'50',
        fontSize:'20px',
        textAlign:'center',
        opacity: '0.35'
    }
    return <p style={style}>{texto}</p>
}

export default Error