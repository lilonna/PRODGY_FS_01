// App.js
import React from "react";
import { SearchProvider } from '../../../context/SearchContext';
import Navbar from "../../components/navbar/navbar";
import Ustore from "../ustore/ustore";


function Home() {
  return (
    <SearchProvider>
    <div>

     <Navbar/>
      {/* Header Section */}
      <header className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-4">Welcome to My Website</h1>
          <p className="lead">
              All IN ONE.
          </p>
          <a href="#" className="btn btn-primary btn-lg">
            Learn More
          </a>
        </div>
      </header>
      <Ustore/>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <h5 className="card-title">Feature One</h5>
                  <p className="card-text">
                     All IN ONE.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <h5 className="card-title">Feature Two</h5>
                  <p className="card-text">
                      All IN ONE.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <h5 className="card-title">Feature Three</h5>
                  <p className="card-text">
                    All IN ONE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-4">
  <div className="container text-center">
    <p className="mb-0">
       <img
        src="data:image/jpeg;base64,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"
        alt="Logo"
        style={{ width: '30px', height: '30px', marginRight: '10px' }}
      /> 
      &copy; 2024 Lilo. All Rights Reserved.
    </p>
  </div>
</footer>

    </div>
    </SearchProvider>
  );
}

export default Home;



