import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading: () => {
        return <div style={{marginTop: '200px', fontSize: '30px', textAlign: 'center'}}>加载中...</div>
    },
  });

  export default () => <LoadableComponent />