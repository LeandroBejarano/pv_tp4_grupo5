function Error ({texto}){
    const style={
        color:'red',
        oppacity:'50',
        fontSize:'20px'
    }
    return <p style={style}>{texto}</p>
}

export default Error