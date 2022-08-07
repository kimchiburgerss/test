import { useState }from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
function Todo(title){
    const [ showmodal, setshowmodal] = useState(false);
    function deleteHandler(){
      setshowmodal(true);
    }
    function closeModalHandler(){
      setshowmodal(false);
    }

    return (
          <div className='card'>
            <h2>{title.text}</h2>
            <div className='actions'>
              <span>A span</span>
              <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            { showmodal && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
            { showmodal && <Backdrop onCancel={closeModalHandler}/>}
            
          </div>
      );
}
export default Todo;
