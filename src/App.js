// create your App component here


import React from "react"

export default class App extends React.Component{

    state = {
        peopleInSpace: []
    }

    // componentDidMount() {
    //     fetch("http://api.open-notify.org/astros.json")
    //       .then((response) => response.json())
    //       .then(({data}) => {
    //         this.setState({
    //             peopleInSpace: {data}.name,
    //         });
    //       });
    //   }


      componentDidMount() {
            fetch('http://api.open-notify.org/astros.json')
              .then(response => response.json())
              .then(({people}) => this.setState({ peopleInSpace: people }))
        
          }
      

    render(){
        return (
                  <div>
                     {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
                  </div>
                )
    }
}
    










// create your App component here
// import React, { Component } from 'react'

// class App extends Component {

//   state = {
//       peopleInSpace: []
//   }

//   render() {
//     return (
//       <div>
//         {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
//       </div>
//     )
//   }

//   componentDidMount() {
//     fetch('http://api.open-notify.org/astros.json')
//       .then(response => response.json())
//       .then(({people}) => this.setState({ peopleInSpace: people }))

//   }

// }

// export default App
