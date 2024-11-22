import React, { useEffect, useState, useContext } from 'react';
import './dasboard.css';
import { UserContext } from '../../../context/userContext';
import SideNav from '../../components/SideNav/SideNav';
import TopNav from '../../components/Topnav/TopNav';
function Dashboard() {
  const { user } = useContext(UserContext);
  console.log(user);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/products/get', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((products) => {
        setData(products);
      });
  }, []);

  const totalCost = data.reduce((acc, item) => acc + item.price * item.amount, 0);
  const totalAmount = data.reduce((acc, item) => acc + item.amount, 0);
  const outOfStock = data.reduce((acc, item) => (item.amount < 40 ? acc + 1 : acc), 0);

  return (
    <div>
       <TopNav />
       <SideNav />
      {!!user && <h1>Hi {user.name}!</h1>}
      {/* Uncomment TopNav and SideNav if needed */}
     
      
      <div className="whole-dash-wrapper">
        <div className="dash-card row">
          {/* Total Items Card */}
          <div className="items cards card col-9 col-md-7 col-lg-3">
            <div className="dash-info">
             
            </div>
          </div>

        
          <div className="items cards card col-9 col-md-7 col-lg-4">
            <div className="dash-info">
              <div>
                <h1>{totalCost} <span className="card-amt">Birr</span></h1>
                <p className="card-amt">Total Cost</p>
              </div>
            
            </div>
          </div>

         
          <div className="items cards card col-9 col-md-7 col-lg-3">
            <div className="dash-info">
              <div>
                <h1>{outOfStock} <span className="card-amt">Items</span></h1>
             
              </div>
             
            </div>
          </div>
        </div>

        <hr />

 
      </div>
    </div>
  );
}

export default Dashboard;

