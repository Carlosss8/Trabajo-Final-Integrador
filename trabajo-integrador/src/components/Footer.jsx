import "../styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <h3 className="footer-logo">Carlos Rodriguez</h3>

                <p className="footer-text">
                    © {new Date().getFullYear()} Todos los derechos reservados
                </p>

                <div className="footer-links">
                    {/*<a href="#">Inicio</a>
                    <a href="#">Nosotros</a>
                    <a href="#">Contacto</a> */}
                </div>
            </div>
        </footer>
    );
};

export { Footer };
