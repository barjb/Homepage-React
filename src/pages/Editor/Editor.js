import ReactMarkdown from 'react-markdown';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import { postPost, getRefresh } from '../../services/homepageservice';
import { Alert } from 'react-bootstrap';
import AdminHeader from '../../components/AdminHeader'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';


export default function Editor() {
    const [query, setQuery] = useState('');
    const [show, setShow] = useState(false);
    const [variant, setVariant] = useState();
    const [cookies, setCookie] = useCookies();
    let navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();
        const title = event.target.formTitle.value;
        let tags = event.target.formTags.value;
        const text = event.target.formText.value;

        tags = tags.split(',');
        tags = tags.map(e => e.trim())
        const obj = {
            'name': title,
            'tags': tags,
            'text': text
        }
        let config = { headers: { 'Authorization': `Bearer ${cookies.access_token}` } }
        postPost(obj, config).then(res => {
            setShow(true);
            if (res.status === 200) {
                setVariant('success');
            } else if (res.status === 422 || res.status === 401) {
                let config = { headers: { 'Authorization': `Bearer ${cookies.refresh_token}` } }
                getRefresh(config).then(res => {
                    if (res.status === 200) {
                        setCookie('access_token', res.data.access_token)

                    } else {
                        navigate("/login");
                    }
                });
            } else if (res.status === 400) {
                setVariant('danger');
            }

        })
    }

    return (
        <>
            <AdminHeader />
            <div className='editor'>
                <Container>
                    <Alert show={show} variant={variant} onClose={() => setShow(false)} dismissible>{variant === 'danger' ? 'Something went wrong' : variant === 'success' ? 'new post added' : ''}</Alert>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formTags">
                            <Form.Label>Tags</Form.Label>
                            <Form.Control type="text" placeholder="Enter tags" />
                            <Form.Text className="text-muted">
                                Separate multiple tags with ','
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formText">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={13} onChange={(e) => setQuery(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
            <div className='result'>
                <Container>
                    <ReactMarkdown children={query}></ReactMarkdown>
                </Container>
            </div>
        </>
    )
}


