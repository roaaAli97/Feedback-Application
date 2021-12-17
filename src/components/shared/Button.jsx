function Button({children,type,version,isDisabled}){
    console.log(`btn ${isDisabled}`)
    return(
        <button disabled={isDisabled} type={type} className={`btn btn-${version}`}>
          {children}
        </button>
    )
}
export default Button