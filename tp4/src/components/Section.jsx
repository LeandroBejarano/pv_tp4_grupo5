function Section ({children}){
    const style={
    padding:'20px',
    backgroundColor:'#fff0f0',
    display:'block',
    margin:'0 auto',
    maxWidth:'400px',
    borderRadius:'8px',
    textAlign:'center'
    }
    return (
        <section style={style}>{children}</section>
    )
}
export default Section