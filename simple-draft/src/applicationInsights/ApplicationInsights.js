import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory({ basename: '' });
export let reactPlugin = new ReactPlugin();
var appInsights = new ApplicationInsights({
    config: {
        instrumentationKey: '2ee316ce-c09a-4e8b-bbd9-f69507d3b85a',
        extensions: [reactPlugin],
        extensionConfig: {
          [reactPlugin.identifier]: { history: browserHistory }
        }
    }
});

appInsights.loadAppInsights();

export function trackTrace() {
    appInsights.trackTrace({ message: 'app start'});
}

export function trackEvent() {
    appInsights.trackEvent({ name: 'button click' });
}

