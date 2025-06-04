export interface CategoryRating {
  rating: number
  aiRating: number
}

export interface CategoryRatings {
  cleanliness: CategoryRating
  accuracy: CategoryRating
  checkIn: CategoryRating
  communication: CategoryRating
  location: CategoryRating
  value: CategoryRating
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  category: string;
  categoryScore: number;
  isVerified: boolean;
  categoryRatings: {
    cleanliness: number;
    accuracy: number;
    checkIn: number;
    communication: number;
    location: number;
    value: number;
  };
}

export interface Accommodation {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  rating: number;
  aiScore: number;
  imageUrl: string;
  isSuperhost: boolean;
  reviewCount: number;
  amenities: string[];
  reviews: Review[];
  categoryRatings: {
    cleanliness: { rating: number; aiRating: number };
    accuracy: { rating: number; aiRating: number };
    communication: { rating: number; aiRating: number };
    location: { rating: number; aiRating: number };
    checkIn: { rating: number; aiRating: number };
    value: { rating: number; aiRating: number };
  };
} 