import { useEffect, useState, useMemo } from "react";
import Header from './components/Header'
import List from './components/List'
import TagsBar from './components/Tags'
import Footer from "./components/Footer";
import { getTags, getPosts } from './services/homepageservice';
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();
  console.log('search', search)
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function Connects() {
  const [serviceData, setServiceData] = useState();
  const [listData, setListData] = useState();
  let query = useQuery();
  let tag = query.get('tag');
  console.log("tag app.js", tag)
  useEffect(() => {
    getPosts(tag).then((res) => { setListData(res.data); });
    getTags().then((res) => { setServiceData(res.data); console.log(res.data); });
  }, [tag]);

  return (
    <>
      <Header></Header>
      <List list={listData}></List>
      <TagsBar tags={serviceData}></TagsBar>
      <Footer></Footer>
    </>
  );
}