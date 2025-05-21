function Section ({children}){
    const style={
            padding: '25px', 
        backgroundColor: '#5E6472', 
        color: 'white',
        display: 'block',
        margin: '20px auto', 
        maxWidth: '500px', 
        borderRadius: '12px', 
        textAlign: 'center',
        boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)', 
        border: '3px solid #028090', 
        transition: 'background 0.3s ease-in-out, transform 0.2s ease-in-out'
    };
    return (
        <section style={style}>{children}</section>
    )
}
export default Section