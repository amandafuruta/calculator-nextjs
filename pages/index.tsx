import Link from "next/link"

import {HomeStyle} from '../styles/home'

export default function Home() {
  return (
    <HomeStyle>
        <div className='card'>
          <h1 className="title">Welcome to </h1> 
          <h1 className="title span">My Calculator</h1>
        </div>

        <Link href="/calculate"><button className="btn btnstart">Start</button></Link>
    </HomeStyle>
  )
}
