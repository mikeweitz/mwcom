import { useState, useLayoutEffect } from 'react';

// Define an object for different device types, each associated with a media
// query string that describes the screen size ranges for those devices
const devices = {
    isMobile: '(max-width: 766px)',
    isTablet: '(min-width: 767px) and (max-width: 1024px)',
    isDesktop: '(min-width: 1025px)',
};

// Create an array by mapping over the values of the `devices` object,
// to generate a `MediaQueryList` object for each media query string.
// These objects are used to check if the document matches the media query
const mediaQueryLists = Object.values(devices).map((query) => {
    return typeof window !== 'undefined' && window.matchMedia(query);
});

// Function to get an array of boolean values by mapping over `mediaQueryLists`,
// where each boolean indicates whether the respective media query
// currently matches the document state
const getValues = (): boolean[] => {
    return mediaQueryLists.map((list: MediaQueryList) => list.matches);
};

// Define the return type of the hook.
// The keys represent device types, and the values indicate the match status for each device type
type MatchMediaResult = Record<string, boolean>;

const useMatchMedia = (): MatchMediaResult => {
    const [values, setValues] = useState<boolean[]>(getValues);

    useLayoutEffect(() => {
        // Define the handler function that updates the state when the status of a media query changes
        const handleChange = () => {
            setValues(getValues());
        };

        // Attach an event listener for the `change` event to each `MediaQueryList`
        // in `mediaQueryLists`, so that `handleChange` is called whenever the match
        // status of a media query changes
        mediaQueryLists.forEach((list) =>
            list.addEventListener('change', handleChange)
        );

        // Return a cleanup function that removes the event listeners
        // from each `MediaQueryList` when the component unmounts,
        // ensuring there are no duplicate listeners
        return () =>
            mediaQueryLists.forEach((list) =>
                list.removeEventListener('change', handleChange)
            );
    }, []);

    // Create an object by reducing over the keys of devices,
    // mapping each device type to its corresponding boolean value
    // from the values array, which represents the match status
    const deviceIndicators: MatchMediaResult = Object.keys(devices).reduce(
        (acc, screen, index) => ({
            ...acc,
            [screen]: values[index],
        }),
        {}
    );

    // Return the object containing device indicators,
    // which provide a boolean value for each device type indicating
    // whether the current screen size matches the corresponding media query
    return deviceIndicators;
};

export default useMatchMedia;
