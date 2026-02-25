import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

import Playlist from './index';

const props = {
    pid: '2HbClpxGTPtLiRfYJV5Xg8',
    handler: () => {},
    active: false,
    // data: { image: 'x', name: 'Month YYYY' }
};

describe('Playlist item', () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ test: 100 }),
        })
    ) as jest.Mock;

    // `test` and `it` are the same(?)
    test('renders a playlist', async () => {
        render(<Playlist {...props} />);

        await waitFor(() => {
            // get playlist article node
            const item = screen.getByRole('article');
            expect(item).toBeInTheDocument();
        });
    });
});
