import React from "react";
import './App.css';

import svg from './images/sphynx-cat.svg';
import svg2 from './images/american-wirehair-cat.svg';
import svg3 from './images/cornish-rex-cat.svg';



class Test extends React.Component {

    render(){

        const { children } = this.props;

        return (
            <div>
                {children(svg)}
            </div>
        )
    }

}



class App extends React.Component {

    state = {
        X: 0,
        Y: 0,
        mouseMoving: false,




    }

    mouseMoving = (event) => {
        this.setState({
            X: event.pageX,
            Y: event.pageY,
            mouseMoving: true
        })
    }

    componentDidMount() {
        console.log('замаунтился')
        window.addEventListener('mousemove', this.mouseMoving)
    }

    componentWillUnmount() {
        console.log('анмаунтнулся')
        window.removeEventListener('mousemove', this.mouseMoving);
    }

    randomize(max) {
        return Math.floor(Math.random()*(max + 1))
    }


    render() {
    return (
        <>
            <section className='main'>
                <div className='image-wrapper'>


                    <Test>
                        {(svg)=>{
                            return (
                                <ul>
                                    <li>
                                        <img className='image' src={svg} alt='this is cat'
                                             style={{
                                                 left: `${this.state.mouseMoving === false ? this.randomize(100) : 0}%`,
                                                 top: `${this.state.mouseMoving === false ? this.randomize(100) : 0}%`,
                                                 transitionDuration: `0.2s`,
                                                 position: 'absolute',
                                                 transform: `translate(${this.state.X}px, ${this.state.Y}px)`,
                                             }}
                                        />
                                    </li>
                                </ul>
                            )
                        }}
                    </Test>

                    <img className='image' src={svg} alt='this is cat'
                         style={{
                             left: `${this.state.mouseMoving === false ? this.randomize(100) : 0}%`,
                             top: `${this.state.mouseMoving === false ? this.randomize(100) : 0}%`,
                             transitionDuration: `0.2s`,
                             position: 'absolute',
                             transform: `translate(${this.state.X}px, ${this.state.Y}px)`,
                         }}
                    />
                    <img className='image' src={svg2} alt='this is cat'
                         style={{
                             left: `${this.state.mouseMoving === false ? this.randomize(100) : 0}%`,
                             top: `${this.state.mouseMoving === false ? this.randomize(100) : 0}%`,
                             position: 'absolute',
                             transitionDuration: '2.2s',
                             transform: `translate(${this.state.X}px, ${this.state.Y}px)`,
                         }}
                    />
                    <img className='image' src={svg3} alt='this is cat'
                         style={{
                             left: `${this.state.mouseMoving === false ? this.randomize(100) : 0}%`,
                             top: `${this.state.mouseMoving === false ? this.randomize(100) : 0}%`,
                             position: 'absolute',
                             transitionDuration: '1.2s',
                             transform: `translate(${this.state.X}px, ${this.state.Y}px)`,
                         }}
                    />
                </div>
            </section>
        </>
    )
  }

}

export default App;

