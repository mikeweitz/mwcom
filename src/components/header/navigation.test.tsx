import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Navigation from './navigation';
import { copy } from '@mw/data/copy';

const { email, title, ...navitems } = copy.header;
// const navItem = { url: 'http://www.google.com', text: 'test' };

describe('Nav', () => {
    it('renders links', () => {
        render(<Navigation showMenu={false} {...navitems} />);

        // get array of links
        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(Object.entries(navitems).length);
        links.forEach((link) => expect(link).toBeInTheDocument());
    });
});
