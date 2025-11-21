import React from "react";

function Home() {
return ( 
<div className="container py-5 mt-5">
<header className="text-center mb-5"> <h1 className="display-4 fw-bold">Weather Mate</h1> <p className="lead">Check the weather anywhere in the world</p> </header>

  {/* Search */}
  <div className="row justify-content-center mb-5">
    <div className="col-md-6">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city name..."
        />
        <button className="btn btn-primary">Search</button>
      </div>
    </div>
  </div>

  {/* Weather Card */}
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card text-center shadow p-3 mb-5 bg-body rounded">
        <div className="card-body">
          <h3 className="card-title">New York, USA</h3>
          <p className="display-1 fs-3">25°C</p>
          <p className="card-text">Sunny</p>
          <div className="d-flex justify-content-around mt-4">
            <div>
              <h6>Humidity</h6>
              <p>60%</p>
            </div>
            <div>
              <h6>Wind</h6>
              <p>10 km/h</p>
            </div>
            <div>
              <h6>Feels Like</h6>
              <p>27°C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

);
}
export default Home;
