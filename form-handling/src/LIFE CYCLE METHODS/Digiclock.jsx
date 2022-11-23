import React from "react"

class Digiclock extends React.Component {



    constructor(props) {

        super(props)
        this.state = {
            ct: new Date().toLocaleTimeString()
        }

    }

    componentDidMount() {

        setInterval(() => {

            this.setState({ ct: new Date().toLocaleTimeString() })
        }, [1000])
    }

    render() {

        return (

            <>
            <h1>DIGITAL CLOCK</h1>
            <div className="container">
    
            <h1 className="clock">{this.state.ct}</h1>
            </div>
                

                
            </>

        )

    }
}
export default Digiclock