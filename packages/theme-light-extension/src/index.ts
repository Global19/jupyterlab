import {
  JupyterLabPlugin
} from '@jupyterlab/application';

// All themes need to import the theme assets index.css.
import '@jupyterlab/theme-assets/style/index.css';

import '../style/index.css';


/**
 * Initialization data for the light theme extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyter.themes.light',
  autoStart: true,
  activate: (app) => {
    // No-op.
  }
};

export default extension;
