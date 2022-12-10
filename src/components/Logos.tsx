import React from 'react';
import StandardLogo from './StandardLogo';
import { AiFillStar } from 'react-icons/ai';

class Logos extends React.Component {
    state: { currentLogo: number, stars: any } = {
        stars: "0",
        currentLogo: 0
    };

    // Define the interval property
    interval = null

    componentDidMount() {
        // Set an interval to call the renderAnotherClass function every 3 seconds
        // @ts-ignore
        this.interval = setInterval(() => this.renderAnotherClass(), 3000);

        fetch(`https://api.github.com/repos/FleetAdmiralJakob/Portfolio`)
            .then(response => response.json())
            .then(data => {
                const stars = data.stargazers_count;
                this.setState({ stars: stars.toString() });
            });
    }

    componentWillUnmount() {
        // Clear the interval when the component is unmounted
        // @ts-ignore
        clearInterval(this.interval);
    }

    renderAnotherClass() {
        // Use requestAnimationFrame to schedule the update of the currentClass in the state
        requestAnimationFrame(() => {
            this.setState(prevState => ({
                // @ts-ignore
                currentLogo: (prevState.currentLogo + 1) % 3
            }));
        });
    }

    render() {
        // Create an array of React logos to render
        const logos = [
            <StandardLogo />,
            <AiFillStar style={{ color: "yellow" }}/>
        ];

        // Get the current logo to render from the state
        const currentLogo = this.state.currentLogo % logos.length;

        if (currentLogo === 1) {
            return (
                <div>
                    <div>
                        { logos[currentLogo] } { this.state.stars }
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    {logos[currentLogo]}
                </div>
            )
        }
    }
}

export default Logos;