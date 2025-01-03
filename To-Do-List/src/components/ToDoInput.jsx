export default function ToDoInput(props) {
  const { inputValue, setInputValue, handleSaveEdit, editingIndex } = props;

  return (
    <div>
        <header>
            <input 
            type="text" 
            placeholder="Enter Todo..."
            value={inputValue}
            onChange={(e) => {
                setInputValue(e.target.value)
            }}/>
            <button onClick={handleSaveEdit}>
          {editingIndex !== null ? 'Save' : 'Add'}
            </button>
        </header>
    </div>
  )
}
