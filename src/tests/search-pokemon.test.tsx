import SearchPokemon from 'components/search-pokemon';
import { render } from '@testing-library/react';

const renderComponent = () => {
  return render(<SearchPokemon />);
};

describe('Search Pokemon Component', () => {
  it('checks if search pokemon component renders perfectly', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});