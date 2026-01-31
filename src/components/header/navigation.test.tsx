import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Navigation from './navigation';
import { copy } from '@mw/data/copy';

const navItem = { url: 'http://www.google.com', text: 'test' };

describe('Nav', () => {
    it('renders links', () => {
        render(<Navigation {...copy.header} />);

        // get array of links
        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(Object.entries(copy.header).length);
        links.forEach((link) => expect(link).toBeInTheDocument());
    });
});
