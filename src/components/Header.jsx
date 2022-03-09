function Header(props) {
    return <header style={{ backgroundColor:"#000"}}>
       
        <h2 style={{ color: props.textColor, backgroundColor: "#000" }}>
            {props.text}
        </h2>
    </header>
}
Header.defaultProps={text:"FEEDBACK APP",textColor:"#D82148"}


export default Header