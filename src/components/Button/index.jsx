function Button(params) {
    return (
        <button
            className={`button ${params.class}`}
        >{params.text}</button>
    )
}

export default Button;