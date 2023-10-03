import React, { useState } from 'react';
import './Style.css';
import './Utils.css';
import './Mobile.css';
import article from './Article.json';
import Error from './Error';

import { NavLink, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  const [query, setQuery] = useState('');

  //pagination variables

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const filteredArticles = article.filter((article) =>
    article.title.toLowerCase().includes(query.toLowerCase())
  );
  const records = filteredArticles.slice(firstIndex, lastIndex);
  const npage = Math.ceil(filteredArticles.length / recordsPerPage);
  const numbers = [...Array(npage).keys()].map((num) => num + 1);

  const navigate = useNavigate();

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const showContentSection =
    (query === '' && filteredArticles.length > 0) || records.length > 0;
  const showNotFound = query !== '' && filteredArticles.length === 0;

  return (
    <>
      <div>
        <nav className="navigation max-width-1 m-auto">
          <div className="nav-left">
            <a href="/">
              <span>
                <img src="img/logo.png" width="94px" alt="" />
              </span>
            </a>
            <ul>
              <li>
                <NavLink to="/" className="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/About">About</NavLink>
              </li>
              <li>
                <NavLink to="/Contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <form action="/" method="get">
            <div className="nav-right">
              <input
                id="searchInput"
                className="form-input"
                type="text"
                placeholder="Article Search"
                autoComplete="off"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="result-box"></div>
            </div>
          </form>
        </nav>
        <div className="max-width-1 m-auto">
          <hr />
        </div>

        {showNotFound ? (
          <Error />
        ) : (
          showContentSection && (
            <>
              
              <div className="home-articles max-width-1 m-auto font2">
                <h2>Featured Blogs</h2>
                <div id="featuredArticles">
                  {records.map((articles) => (
                    <div
                      className="home-article"
                      key={articles.id}
                      onClick={() => navigate(`/Blogpost/${articles.id}`)}
                    >
                      <div className="home-article-img">
                        <img src={articles.image} alt="article" />
                      </div>
                      <div className="home-article-content font1">
                        <h3>{articles.title}</h3>
                        <div>{articles.author}</div>
                        <span>{`${articles.date} | ${articles.duration}`}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <ul className="pagination">
                {numbers.map((number) => (
                  <li className="page-item" key={number}>
                    <NavLink
                      to="#"
                      className={`page-link${
                        currentPage === number ? ' active' : ''
                      }`}
                      onClick={() => handlePageClick(number)}
                    >
                      {number}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </>
          )
        )}
        <div className="footer">
          <p>Copyright &copy; iBlog.com</p>
          <a href="https://www.vecteezy.com/free-vector/typewriter">
            Vector Credits: Vecteezy
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
