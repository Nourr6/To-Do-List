function Form(props) {

    return (
    <>
    <div className="form">
        <input placeholder="Add your next task" id="inputField" className="inputField" type="text"></input>
        <button className="addButton" onClick={props.onClick}>+</button>
    </div>
    </>
    )
  }
  
  export default Form