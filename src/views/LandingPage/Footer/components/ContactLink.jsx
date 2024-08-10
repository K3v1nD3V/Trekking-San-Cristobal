function ContactLink(params) {
    return (
        <>
            <a className="contactLink" href={params.link}>
                <div className="contactLink_icon">
                    {params.children}
                </div>
            </a>
        </>
    )
}

export { ContactLink };