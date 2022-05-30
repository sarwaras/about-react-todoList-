import React from "react"

const data1 = ["Vue", "React", "Angular"]
const data2 = ["Vue", "React", "Angular"]

export default class TEAST extends Component {
  render() {
    return (
      <div id='test'>
        <ul>
          {data1.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}
