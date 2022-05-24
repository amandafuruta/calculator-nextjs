import Link from "next/link"

import {HomeStyle} from '../styles/home'

export default function Home() {
  return (
    <HomeStyle>
        <div className='card'>
          <h1>Welcome to <span>My Calculator</span></h1>
        </div>

        <Link href="/calculate"><button className="btn">Start</button></Link>
    </HomeStyle>
  )
}
