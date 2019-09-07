import React from 'react';
import { debounce } from 'lodash';

const getScroll = () => ({
  scrollX: typeof window !== 'undefined' ? window.scrollX : 0,
  scrollY: typeof window !== 'undefined' ? window.scrollY : 0,
});

const ScrollContext = React.createContext(getScroll());

class ScrollProvider extends React.PureComponent {
  state = getScroll();

  eventListener = debounce(
    () => {
      const value = getScroll();
      this.setState(value);
    },
    300,
    true
  );
  componentDidMount() {
    window.addEventListener('scroll', this.eventListener);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.eventListener);
  }

  render() {
    return (
      <ScrollContext.Provider value={this.state}>
        {this.props.children}
      </ScrollContext.Provider>
    );
  }
}

const withScroll = Component => props => (
  <ScrollContext.Consumer>
    {({ scrollX, scrollY }) => (
      <Component {...props} scrollX={scrollX} scrollY={scrollY} />
    )}
  </ScrollContext.Consumer>
);

export { ScrollProvider, withScroll };
