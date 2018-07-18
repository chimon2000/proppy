import { ProppyFactory } from './types';
import { create } from './create';

export function didUpdate(fn): ProppyFactory {
  return create({
    didUpdate: function() {
      fn(this.props, this.providers);
    },
  });
}
