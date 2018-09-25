import {Client} from 'bugsnag-react-native';

import App from './src/App';
import Config from './src/config';

const bugsnag = new Client(Config.bugsnagKey);
export {bugsnag};

App();
