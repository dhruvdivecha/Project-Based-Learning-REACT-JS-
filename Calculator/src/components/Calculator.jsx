import { useState } from "react"

const Calculator = () => {

    const [inputValue, setInputValue] = useState ('')
    const [isDarkMode, setIsDarkMode] = useState(false);

    const clear = () => {
            setInputValue('')
    }

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    const display = (value) => {
        setInputValue(inputValue + value)
    }

    const calculate = () => {
        setInputValue(eval(inputValue))
    }

    const formStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
        backgroundColor: isDarkMode ? "#333" : "#f5f5f5",
        maxWidth: "300px",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        color: isDarkMode ? "white" : "black",
      };

      const wrapperStyle = {
        backgroundColor: isDarkMode ? "#000" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
        minHeight: "100vh",
        transition: "background-color 0.3s, color 0.3s",
      };
      
      
      const inputStyle = {
        gridColumn: "span 4",
        height: "50px",
        fontSize: "20px",
        textAlign: "right",
        padding: "10px",
        backgroundColor: isDarkMode ? "#555" : "white",
        color: isDarkMode ? "white" : "#333",
        borderRadius: "5px",
        border: "1px solid #ccc",
        marginBottom: "10px",
      };
      
      const buttonStyle = {
        backgroundColor: isDarkMode ? "#555" : "#e0e0e0",
        color: isDarkMode ? "white" : "#333",
        fontSize: "18px",
        padding: "15px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        textAlign: "center",
        transition: "background-color 0.3s",
      };
      
      const operatorStyle = {
        backgroundColor: isDarkMode ? "#777" : "#b0b0b0",
        color: isDarkMode ? "white" : "black",
      };
      
      
  return (
    <div style={wrapperStyle}>
        <button
            style={{
            ...buttonStyle,
            margin: "20px auto",
            display: "block",
            width: "150px",
            }}
            onClick={toggleDarkMode}
        >
            Toggle {isDarkMode ? "Light" : "Dark"} Mode
        </button>

        <form style={formStyle}>

        <input type="text" value={inputValue} style={inputStyle} readOnly />

        <span style={buttonStyle} onClick={() => display("7")}>
            7
        </span>
        <span style={buttonStyle} onClick={() => display("8")}>
            8
        </span>
        <span style={buttonStyle} onClick={() => display("9")}>
            9
        </span>
        <span style={{ ...buttonStyle, ...operatorStyle }} onClick={clear}>
            AC
        </span>

        <span style={buttonStyle} onClick={() => display("4")}>
            4
        </span>
        <span style={buttonStyle} onClick={() => display("5")}>
            5
        </span>
        <span style={buttonStyle} onClick={() => display("6")}>
            6
        </span>
        <span style={{ ...buttonStyle, ...operatorStyle }} onClick={() => display("-")}>
            -
        </span>

        <span style={buttonStyle} onClick={() => display("1")}>
            1
        </span>
        <span style={buttonStyle} onClick={() => display("2")}>
            2
        </span>
        <span style={buttonStyle} onClick={() => display("3")}>
            3
        </span>
        <span style={{ ...buttonStyle, ...operatorStyle }} onClick={() => display("+")}>
            +
        </span>

        <span style={buttonStyle} onClick={() => display(".")}>
            .
        </span>
        <span style={buttonStyle} onClick={() => display("0")}>
            0
        </span>
        <span style={buttonStyle} onClick={() => display("00")}>
            00
        </span>
        <span style={{ ...buttonStyle, ...operatorStyle }} onClick={() => display("/")}>
            /
        </span>

        <span
            style={{
            ...buttonStyle,
            ...operatorStyle,
            gridColumn: "span 4",
            }}
            onClick={calculate}
        >
            =
        </span>
        </form>
    </div>
  )
}

export default Calculator