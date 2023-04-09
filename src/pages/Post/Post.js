import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap"
import Header from '../../components/Header'
import TagsBar from '../../components/Tags'
import Footer from "../../components/Footer";

import { getPost, getTags } from "../../services/homepageservice";
import ReactMarkdown from 'react-markdown';
export default function Post() {
    const { id } = useParams();
    const [serviceData, setServiceData] = useState();
    const [postData, setPostData] = useState();
    useEffect(() => {
        getPost(id).then((res) => { setPostData(res.data) });
        getTags().then((res) => { setServiceData(res.data); });
    }, [id]);
    return (
        <>
            <Header></Header>
            <Container>
                <Data data={postData}></Data>
            </Container>
            <TagsBar tags={serviceData}></TagsBar>
            <Footer></Footer>
        </>
    )
}

function Data({ data }) {
    let title = '';
    let created_at = '';
    let article = '';
    if (data) {
        title = data.title
        created_at = data.created_at;
        article = data.text;
    }
    let time = new Date(created_at);
    return (
        <Container>
            <h1>{title}</h1>
            <p>{time.toDateString().substring(3)}
            </p>
            <ReactMarkdown children={article}></ReactMarkdown>
        </Container >
    )
}