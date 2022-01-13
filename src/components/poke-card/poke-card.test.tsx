import PokeCard from '.';
import { render } from '@testing-library/react';
import { APIResponseInterface } from 'types';

const renderComponent = (data: APIResponseInterface, idx: string) => {
  return render(<PokeCard data={data} idx={idx} />);
};

describe('Search Pokemon Component', () => {
  it('checks if search pokemon component renders perfectly', () => {
    const { container } = renderComponent(
      {
        name: 'Pokemon',
        url: 'pokemon-url',
        index: '001',
      },
      '001'
    );
    expect(container).toMatchSnapshot();
  });
});
