import * as React from "react";
import { HttpReqMethod, MakeXMLRequest } from "./MakeXMLRequest";

export const enum FetchStatus {
    INITIAL,
    LOADING,
    ERROR,
    SUCCESS
}

function useExampleGetRequest() {
    const [fetchStatus, setFetchStatus] = React.useState<FetchStatus>(FetchStatus.INITIAL);
    const [exampleResponse, setExampleResponse] = React.useState(null);

    async function makeExampleRequest() {
        try {
            setFetchStatus(FetchStatus.LOADING);

            const req = MakeXMLRequest.setupRequest({
                httpReqMethod: HttpReqMethod.GET,
                url: ""
            });
            const response = await req.makeRequest();

            setExampleResponse(response);
            setFetchStatus(FetchStatus.SUCCESS);
        } catch (e) {
            setExampleResponse(e);
            setFetchStatus(FetchStatus.ERROR);
        }
    }

    return { fetchStatus, makeExampleRequest, exampleResponse };
}

export function withMakeGetRequest(Component: React.ComponentType) {
    return function (props: any): JSX.Element {
        const { fetchStatus, makeExampleRequest, exampleResponse } = useExampleGetRequest();

        return (
            <Component
                fetchStatus={fetchStatus}
                exampleResponse={exampleResponse}
                makeExampleRequest={makeExampleRequest}
                {...props}
            />
        );
    };
}
