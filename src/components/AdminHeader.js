import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export default function AdminHeader() {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                </Container>
            </Navbar>
            <hr className="my-4" />
        </>
    );
}