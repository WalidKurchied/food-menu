export const fixPriceWithCurrency = (currency = 'EUR', locale = 'en-IE') => {
    const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    });

    return formatter.format;
};
