export const formatDate = (time: string | number | Date, format?: string) => {
    // generate a formatted date of string using non browser APIs
    const date = new Date(time);
    const options: Intl.DateTimeFormatOptions =
        format === 'short'
            ? {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
              }
            : {
                  weekday: 'short',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
              };

    return date.toLocaleDateString(undefined, options);
};
