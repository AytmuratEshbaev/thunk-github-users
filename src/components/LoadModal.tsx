import {
    ChangeEventHandler,
    FC,
    MouseEventHandler,
    useEffect,
    useState,
    Dispatch,
    SetStateAction
} from "react";

type Props = {
    open: boolean,
    changingLoadModal: MouseEventHandler<HTMLButtonElement>,
    inputValue: ChangeEventHandler<HTMLInputElement>,
    loading: MouseEventHandler<HTMLInputElement>
}

const LoadModal:FC<Props> = (props) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    useEffect(() => {
        setOpenModal(props.open)
    })
    return(
        <div className='box' style={{height: openModal ? '100%' : '0'}}>
            <div className='modal'>
                <h3 className='modal__title'>Load products using a configuration number</h3>
                <form>
                    <button onClick={props.changingLoadModal}>x</button>
                    <input type="text" className='modal__text' placeholder='Configuration number' onInput={props.inputValue}/>
                    <input type="button" className='modal__submit' value='Submit' onClick={props.loading}/>
                </form>
            </div>
        </div>
    )
}

export default LoadModal;