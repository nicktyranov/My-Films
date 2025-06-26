export interface MovieInterface {
  short: {
    name: string;
    image: string;
    description: string;
    aggregateRating: {
      ratingValue: string;
    };
    '@type': string;
    datePublished: string;
    genre: string[];
    duration: string,
    review: {
      dateCreated: string;
      name: string;
      reviewBody: string;
    };
  };
  imdbId: string;
}
  
