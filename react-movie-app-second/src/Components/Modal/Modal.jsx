import  cl from'./modal.module.css'
function Modal({active,setActive,children}) {
    let pushClasses = [cl.modal]
    if (active) {
        pushClasses.push(cl.active)
    }
    return(
        <div className={pushClasses.join(' ')  }onClick={()=>setActive(false)}>
        <div className={cl.modalCont} onClick={e=>e.stopPropagation()}>


{children}
</div>

</div>
    )
}
export default Modal