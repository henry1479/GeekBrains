
// component realize the form for sending message 
// contain 2 inputs and button with handler of events
// 
// 
function Form(props) {

  return (
     <form action="#" className="message-form">
         <label htmlFor="author">enter your name</label>
         <input type="text" name="author"  className="message-form__author-text" />
         <label htmlFor="message">write your message</label>
         <input type="text" name="message"  className="message-form__message-text" />
        <button type="button" className="message-form__btn" onClick={props.handleChange} >Send</button>
     </form>
  )
}


export default Form