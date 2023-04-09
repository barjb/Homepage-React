import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import AdminHeader from '../../components/AdminHeader'

import { postLogin } from '../../services/homepageservice';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function BasicExample() {
    const [cookies, setCookie] = useCookies();
    let navigate = useNavigate()
    function handleSubmit(event) {
        event.preventDefault();
        const login = event.target.formEmail.value;
        let password = event.target.formPassword.value;
        let obj = {
            'login': login,
            'password': password
        };
        postLogin(obj).then(res => {
            if (res.status === 200) {
                setCookie("access_token", res.data.access_token);
                setCookie("refresh_token", res.data.refresh_token)
                navigate('/editor');
            }
        });
    }
    return (
        <>
            <AdminHeader />
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    );
}
export default BasicExample;