import * as React from 'react';
import { ProppyFactory } from 'proppy';

import { ProppyContext } from './ProppyContext';
import { ProppySubscription } from './ProppySubscription';

export function attach(P: ProppyFactory) {
  return function (Component) {
    return function (props) {
      return (
        <ProppyContext.Consumer>
          {providers => (
            <ProppySubscription
              parentProps={props}
              providers={providers || {}}
              proppyFactory={P}
            >
              {proppyProps => <Component {...proppyProps} />}
            </ProppySubscription>
          )}
        </ProppyContext.Consumer>
      );
    };
  };
}
