export interface Accommodation {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  rating: number;
  aiScore?: number;
  images: string[];
  reviews: Review[];
  amenities: string[];
  reviewCount: number;
  imageUrl: string;
  isSuperhost: boolean;
  categoryRatings: {
    cleanliness: { rating: number; aiRating: number };
    accuracy: { rating: number; aiRating: number };
    checkIn: { rating: number; aiRating: number };
    communication: { rating: number; aiRating: number };
    location: { rating: number; aiRating: number };
    value: { rating: number; aiRating: number };
    };
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  aiRating?: number;
  comment: string;
  date: string;
  isVerified: boolean;
  category: string;
  categoryScore: number;
  categoryRatings: {
    cleanliness: number;
    accuracy: number;
    location: number;
    checkIn: number;
    value: number;
    communication: number;
  };
} 