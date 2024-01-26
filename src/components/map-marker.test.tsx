import {MapMarker} from '.';
import {render} from '@testing-library/react-native';

describe('test map marker component', () => {
  it('test map marker component with props', () => {
    render(<MapMarker latitude={1} longitude={1} />);
  });
});
