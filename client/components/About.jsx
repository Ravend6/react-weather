import React from 'react'
import {Link} from 'react-router'

export default class About extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1 className="text-center page-title">About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, deserunt nihil cumque accusamus aut, velit aspernatur dolorem aliquid sint asperiores commodi nemo totam numquam quaerat corrupti nobis sapiente. Animi, dignissimos.
        </p>
        <ol>
          <li>
            <Link to="/?location=Kiev">Kiev</Link>
          </li>
          <li>
            <Link to="/?location=Rio">Rio</Link>
          </li>
        </ol>
      </div>
    )
  }
}
