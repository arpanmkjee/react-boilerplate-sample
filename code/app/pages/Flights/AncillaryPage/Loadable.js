/**
 * Asynchronously loads the component 
 */

import React from 'react';
import loadable from 'utils/loadable';
import LoadingIndicator from 'styled-elements/LoadingIndicator';

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator />,
});
