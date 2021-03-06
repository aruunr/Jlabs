import React from 'react';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {view: 'points', completed: false};
    }

    clickHandler(event) {
        if (this.state.view === 'points') {
            this.setState({view: 'answer', flipping: true});
        } else if (this.state.view === 'answer') {
            this.setState({view: 'question'});
        } else {
            this.setState({view: 'points', completed: true, flipping: true});
        }
    }

    getLabelBack() {
        return {__html: this.state.view === 'question' ? this.props.question.question : this.props.question.answer};
    }

    transitionEndHandler(event) {
        if (event.propertyName === 'width') {
            this.setState({flipping: false});
        }
    }

    render() {
        let style = {
                width: this.props.width + 'px',
                height: this.props.height + 'px',
                transform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)',
                WebkitTransform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)'
            },
            front = this.state.completed ? <h5>-</h5> : <span className='points'>{this.props.question.points}</span>,
            className = 'flipper';

        if (this.state.view !== 'points') {
            className = className + ' flipped';
        }
        if (this.state.flipping) {
            className = className + ' flipping';
        }
        return (
            <div style={style} className={className} onClick={this.clickHandler.bind(this)} onTransitionEnd={this.transitionEndHandler.bind(this)}>
                <div className='card'>
                    <div className='front'>
                        {front}
                    </div>
                    <div className='back'>
                        <span dangerouslySetInnerHTML={this.getLabelBack()}/>
                       
                    </div>
                </div>
            </div>
        );
    }

};

export default Card;