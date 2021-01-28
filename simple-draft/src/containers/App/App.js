import React from 'react'; 
import Layout from '../../hoc/Layout/Layout';
import { withAITracking } from '@microsoft/applicationinsights-react-js';
import * as insights from '../../applicationInsights/ApplicationInsights';


export function App() {
  insights.trackTrace();

  return (
    <div >
      <Layout/>
    </div>
  );
}

export default withAITracking(insights.reactPlugin, App);
