interface IModalProps extends React.PropsWithChildren {}

const Modal : React.FC<IModalProps> = ({children}) : JSX.Element => {
    return (
        <div className="fixed inset-x-0 inset-y-0 w-screen h-screen bg-ModalBG flex justify-center items-center z-20 overflow-hidden">
            {children}
        </div>
    )
}

export default Modal;