import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function TagsBar({ tags }) {

    let listItems;
    if (tags === undefined)
        listItems = null;
    else {
        listItems = tags.map((item) => {
            let str = `/?tag=${item}`;
            return <li className='mx-2 my-1 tag' key={item}><Link to={str}>{item}</Link></li>
        });
    }

    return (
        <Container>
            < ul className='d-flex justify-content-center flex-wrap align-items-center pt-3 taglist'>
                {listItems}
            </ul >
        </Container>
    );
}

export default TagsBar;