import { Button } from '../src/components/Button/Button';
import { render } from '../src/testUtils/testUtils';

describe('Button', () => {
  it('should render the Button component with the default props', () => {
    const container = render(<Button>I am a button</Button>);

    expect(container).toMatchSnapshot();
  });
});
