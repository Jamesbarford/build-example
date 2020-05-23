import * as React from "react";
import * as ReactDOM from "react-dom";


class App extends React.Component {
    public componentDidMount(): void {
        fetch("http://localhost:5000", {
            headers: {
                Accept: "application/json"
            }
        }).then(t => {
            try {
                console.log(t.json())
            } catch (e) {
                console.warn(JSON.stringify(e));
            }
        });
    }

    public render(): JSX.Element {
        return (
            <div>hello</div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));