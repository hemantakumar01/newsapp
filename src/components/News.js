import Spinner from "../Spinner";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

import React, { useEffect, useState } from "react";

const News = (props) => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(25);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.catagory}&apiKey=${props.apiKey}&page=${page}&pagesiz${props.apiKey}e=${props.pageSize}`;

    let rowApi = await fetch(url);
    let data = await rowApi.json();
    props.setProgress(50);

    setArticle(data.articles);
    setTotalResults(data.totalResults);
    setLoading(false);
    console.log(article);
    setPage((prev) => prev + 1);

    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.catagory}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    let rowApi = await fetch(url);
    let data = await rowApi.json();
    setArticle(article.concat(data.articles));
    setTotalResults(data.totalResults);
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <h1 className="text-center my-3 mt-5 pt-4">
        Top {props.catagory}-Headlines of the Day
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={article.length}
        next={fetchMoreData}
        hasMore={article !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {article.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
            {/* <div className="d-flex justify-content-between my-4">
              <button
                disabled={page <= 1}
                type="button"
                className="btn btn-dark"
                onClick={handlePrevious}

              >
                ← Previous
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={handleNext}
              >
                Next →
              </button>
            </div> */}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 4,
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  catagory: PropTypes.string,
};
export default News;
