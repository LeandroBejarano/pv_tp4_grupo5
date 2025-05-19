function Titulo ({texto}){
    const style = {
        width:"100%",
        textAlign:"center",
        fontSize:"50px",
    }
    return(
    <h1 style={style}>{texto}</h1>
    )
}

export default Titulo