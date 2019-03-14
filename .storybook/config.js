import { configure, addDecorator } from '@storybook/react';

// Import css
import '../src/css/teamsnap-ui.scss'

// automatically import all files ending in *.stories.js
const req = require.context('../src/js/components', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}


configure(loadStories, module);
