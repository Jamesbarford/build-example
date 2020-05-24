import * as React from "react";
import * as ReactDOM from "react-dom";
import { FetchStatus, withMakeGetRequest } from "./useExampleGetRequest";

interface AppProps {
    fetchStatus: FetchStatus;
    exampleResponse: null | any;
    makeExampleRequest(): Promise<void>;
}

class App extends React.Component<AppProps> {
    public async componentDidMount(): Promise<void> {
        await this.props.makeExampleRequest();
    }

    public render(): JSX.Element {
        switch (this.props.fetchStatus) {
            case FetchStatus.SUCCESS:
                return <span>{this.props.exampleResponse.body}</span>;

            case FetchStatus.ERROR:
                return (
                    <span>
                        Failed to make example request: {JSON.stringify(this.props.exampleResponse)}
                    </span>
                );

            default:
                return <span>Loading...</span>;
        }
    }
}

const AppWithReq = withMakeGetRequest(App);

ReactDOM.render(<AppWithReq />, document.getElementById("root"));
