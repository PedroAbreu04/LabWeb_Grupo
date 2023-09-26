function NotAuthenticated() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',

                width: '100%',
                height: '100%'
            }}
        >
            <h1> NotFound </h1>

            <a
                style={{
                    textDecoration: 'none',
                    color: 'white',
                    marginTop: '10px'
                }}
                href="/login"
            >
                Voltar para Login
            </a>

        </div>
    );
}

export default NotAuthenticated; 