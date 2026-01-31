import { render } from '@testing-library/react';
import Header from '@mw/components/header';
import { ScrollProvider } from '@mw/components/scrollContext';

it('renders page header unchanged', () => {
    const { container } = render(
        <ScrollProvider>
            <Header />
        </ScrollProvider>
    );
    expect(container).toMatchSnapshot();
});
