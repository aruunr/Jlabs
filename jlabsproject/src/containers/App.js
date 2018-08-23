import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../components/Card';
import {questions} from '../questions';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            questions: []
        };
    }

    handleResize(event) {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        });
    }


    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
        let rows = 0;
        questions.forEach(category => {
            if (category.questions.length > rows) {
                rows = category.questions.length;
            }
        });
        this.setState({questions: questions, rows: rows, cols: questions.length});
    }


    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        let headerHeight = this.state.windowWidth > 640 ? 60 : 32,
            cardWidth = this.state.windowWidth / this.state.cols,
            cardHeight = (this.state.windowHeight - headerHeight) / this.state.rows,
            cards = [],
            title = [];

        this.state.questions.forEach((category, categoryIndex) => {
            let left = categoryIndex * cardWidth;
            category.questions.forEach((question, questionIndex) => {
                cards.push(<Card left={left} top={questionIndex * cardHeight + headerHeight} height={cardHeight} width={cardWidth} question={question} key={categoryIndex + '-' + questionIndex}/>);
            })
        });
        

        questions.forEach((c, i) => title.push(<span className='header' style={{width : cardWidth}} key={i}>{c.category}</span>));
        
        return (
            <div>
                <div className='headers'>
                    {title}
                </div>
                {cards}
            </div>
        );
    }

};

export default App;