
export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial"
    }}>
      <h1 style={{fontSize: "3rem"}}>Javier Castro</h1>
      <p style={{fontSize: "1.2rem", marginTop: "10px"}}>
        Junior React Native Developer 🚀
      </p>

      <div style={{marginTop: "30px"}}>
        <a href="#" style={buttonStyle}>View Projects</a>
        <a href="#" style={{...buttonStyle, marginLeft: "15px"}}>Contact Me</a>
      </div>
    </div>
  )
}

const buttonStyle = {
  padding: "12px 24px",
  border: "1px solid #3b82f6",
  borderRadius: "10px",
  color: "white",
  textDecoration: "none"
}
