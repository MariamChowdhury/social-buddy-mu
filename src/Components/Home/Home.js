import React, { useEffect, useState } from 'react';
import Friends from '../Friends/Friends';

const Home = () => {
  const [friend,setFriend]=useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=30')
    .then(res => res.json())
    .then(data => setFriend(data.results))
  },[])
  console.log(friend)
  return (
    <div>
      <h1> Total friends: {friend.length}
      </h1>
      {
        friend.map(friendDetails=> <Friends friendDetails={friendDetails}></Friends>)
      }
    </div>
  );
};

export default Home;