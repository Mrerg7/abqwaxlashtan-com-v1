export const SITE = {
  url: 'https://abqwaxlashtan.com',
  name: 'ABQ Wax Lash Tan',
  domain: 'ABQWaxLashTan.com',
  seller: 'Desert Rich',
  email: 'sales@desertrich.com',
  price: '43000',
  priceDisplay: '$43,000',
  priceCurrency: 'USD',
  priceValidUntil: '2027-12-31',
  datePublished: '2026-09-08',
  googleSiteVerification: 'Hviq3kxWPkbZyYpHgU0oOgKJrqdxTXiWyAjo9TZqzIw',
  ogImage:
    'https://imagedelivery.net/-sPAUAWeA405NiWJ0SNIQA/ff42759f-0014-4f32-6f0b-8d589f17c000/public',
  ogImageAlt: 'ABQWaxLashTan.com — Albuquerque wax, lash and tan domain for sale',
  escrow: 'https://www.escrow.com',
  streamId: '3bc3a954bc605a544462d01af9cb8bdf',
  streamHost: 'customer-wa9cpywo3l4jte5c.cloudflarestream.com',
  market: 'Albuquerque, New Mexico',
  keywords:
    'ABQ waxing, Albuquerque waxing, Brazilian wax Albuquerque, lash extensions Albuquerque, spray tan Albuquerque, ABQWaxLashTan, Albuquerque domain for sale',
} as const;

export const ACQUISITION_MAILTO = (subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const qs = params.toString();
  return `mailto:${SITE.email}${qs ? `?${qs}` : ''}`;
};
