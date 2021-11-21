import React from "react";
import Notification from "../Notification/Notification";
import Section from "../Section/Section";
import Statistics from "../Statistics/Statistics";

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    hendleIncrement = event => {
        const nameBTN = event.currentTarget.innerText.toLowerCase();    
        this.setState(preState => {
            return { [nameBTN]: preState[nameBTN] + 1 }
        })
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return (total ? Math.round((good / total) * 100) : 0);
    };
    
    render() {
        const { good, neutral, bad } = this.state;    
        return (            
            <div>
                <Section title="Please leave feedback">
                    <div>
                        <button onClick={this.hendleIncrement}>Good</button>
                        <button onClick={this.hendleIncrement}>Neutral</button>
                        <button onClick={this.hendleIncrement}>Bad</button>
                    </div>                
                </Section>
                <Section title="Statistics">                
                {this.countTotalFeedback() ?
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()} />
                        :
                        <Notification title='There is no feedback' />
                }
                </Section>
            </div>
        )        
    }
}

export default Feedback;