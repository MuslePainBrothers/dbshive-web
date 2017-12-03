import React from 'react'
import UserBox from '../containers/UserBox'
import ItemBox from '../containers/ItemBox'


const Top = () => (
  <div>
    <div>
      <h1>Top</h1>
      admin page -> <a href='http://localhost:3000/admin'>admin</a>
      <UserBox />
      <ItemBox />
    </div>
  </div>
)

export default Top
