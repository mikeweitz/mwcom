import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Navigation from './navigation';

const navItem = { url: 'http://www.google.com', text: 'test' };

const NavProps = {
    email: { address: 'x', domain: 'y.com' },
    github: navItem,
    linkedin: navItem,
    playlists: navItem,
};

describe('Nav', () => {
    it('renders links', () => {
        render(<Navigation {...NavProps} />);

        // get array of links
        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(Object.entries(NavProps).length);
        links.forEach((link) => expect(link).toBeInTheDocument());
    });
});
