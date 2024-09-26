import { ReactNode } from "react"
import style from "./modalComponent.module.css"


type TypeComponentWindow = {
    active: boolean,
    setActive: (isActive: boolean) => void,
    children: ReactNode,
}

export default function ModalComponent({active, setActive, children}: TypeComponentWindow) {

  return (
    <div className={style.modal} onClick={() => setActive(false)}>
      <div className={style.modalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
