import { Accommodation } from '../../types/index';

export const sampleAccommodations: Accommodation[] = [
  {
    id: '1',
    title: '서울 시청 근처 아파트',
    location: '서울시 중구',
    price: 120000,
    rating: 4.7,
    reviewCount: 128,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'],
    aiScore: 4.3,
    isSuperhost: true,
    amenities: ['무선인터넷', '주방', '세탁기', '에어컨'],
    description: '서울 시청에서 도보 5분 거리의 아파트입니다.',
    categoryRatings: {
      cleanliness: { rating: 4.5, aiRating: 4.2 },
      accuracy: { rating: 4.3, aiRating: 4.1 },
      checkIn: { rating: 4.3, aiRating: 4.0 },
      communication: { rating: 4.1, aiRating: 3.9 },
      location: { rating: 4.4, aiRating: 4.1 },
      value: { rating: 4.0, aiRating: 3.7 }
    },
    "reviews": [
    {
      "id": "1",
      "userId": "user1",
      "userName": "김철수",
      "date": "2024-03-15",
      "rating": 5.0,
      "aiRating": 4.2,
      "category": "cleanliness",
      "categoryScore": 5.0,
      "comment": "꽤나 깨끗하고 지낼만 했던 숙소입니다!.",
      "isVerified": true,
      "categoryRatings": {
        "cleanliness": 4.2,
        "accuracy": 0,
        "checkIn": 0,
        "communication": 0,
        "location": 0,
        "value": 0
      }
    },
    {
      "id": "2-checkIn",
      "userId": "user2",
      "userName": "이영희",
      "date": "2024-03-18",
      "rating": 5.0,
      "aiRating": 4.0,
      "comment": "체크인이 정말 편리했고, 위치도 나쁘지 않습니다. 다만 가격이 조금 비싸다고 느꼈어요.",
      "isVerified": true,
      "category": "checkIn",
      "categoryScore": 5.0,
      "categoryRatings": {
        "cleanliness": 0,
        "accuracy": 0,
        "checkIn": 5.0,
        "communication": 0,
        "location": 4.0,
        "value": 2.5
      }
    },
    {
      "id": "2-cleanliness",
      "userId": "user2",
      "userName": "이영자",
      "date": "2024-03-18",
      "rating": 4.8,
      "aiRating": 4.5,
      "comment": "청소 상태가 정말 깔끔했어요!",
      "isVerified": true,
      "category": "cleanliness",
      "categoryScore": 5.0,
      "categoryRatings": {
        "cleanliness": 5.0,
        "accuracy": 0,
        "checkIn": 0,
        "communication": 0,
        "location": 0,
        "value": 0
      }
    },
    {
      "id": "2-accuracy",
      "userId": "user2",
      "userName": "이영수",
      "date": "2024-03-18",
      "rating": 4.7,
      "aiRating": 4.4,
      "comment": "사진과 똑같았고, 설명도 정확했어요.",
      "isVerified": true,
      "category": "accuracy",
      "categoryScore": 4.8,
      "categoryRatings": {
        "cleanliness": 0,
        "accuracy": 4.8,
        "checkIn": 0,
        "communication": 0,
        "location": 0,
        "value": 0
      }
    },
    {
      "id": "2-communication",
      "userId": "user2",
      "userName": "양현종",
      "date": "2024-03-18",
      "rating": 4.9,
      "aiRating": 4.6,
      "comment": "호스트와의 소통이 빨라서 좋았어요.",
      "isVerified": true,
      "category": "communication",
      "categoryScore": 5.0,
      "categoryRatings": {
        "cleanliness": 0,
        "accuracy": 0,
        "checkIn": 0,
        "communication": 5.0,
        "location": 0,
        "value": 0
      }
    },
    {
      "id": "2-value",
      "userId": "user2",
      "userName": "박주형",
      "date": "2024-03-18",
      "rating": 4.7,
      "aiRating": 4.5,
      "comment": "가격 대비 만족도가 높았어요.",
      "isVerified": true,
      "category": "value",
      "categoryScore": 4.5,
      "categoryRatings": {
        "cleanliness": 0,
        "accuracy": 0,
        "checkIn": 0,
        "communication": 0,
        "location": 0,
        "value": 4.5
      }
    },
    {
      "id": "2-location2",
      "userId": "user2",
      "userName": "호날두",
      "date": "2024-03-18",
      "rating": 4.9,
      "aiRating": 4.6,
      "comment": "역과 가까워서 교통이 편리했어요.",
      "isVerified": true,
      "category": "location",
      "categoryScore": 5.0,
      "categoryRatings": {
        "cleanliness": 0,
        "accuracy": 0,
        "checkIn": 0,
        "communication": 0,
        "location": 5.0,
        "value": 0
      }
    },
    {
      "id": "2-location",
      "userId": "user2",
      "userName": "이영희",
      "date": "2024-03-18",
      "rating": 4.8,
      "aiRating": 4.0,
      "comment": "체크인이 정말 편리했고, 위치도 나쁘지 않습니다. 다만 가격이 조금 비싸다고 느꼈어요.",
      "isVerified": true,
      "category": "location",
      "categoryScore": 4.0,
      "categoryRatings": {
        "cleanliness": 0,
        "accuracy": 0,
        "checkIn": 5.0,
        "communication": 0,
        "location": 4.0,
        "value": 2.5
      }
    },
    {
      "id": "3-location",
      "userId": "user2",
      "userName": "이영희",
      "date": "2024-03-18",
      "rating": 4.8,
      "aiRating": 2.5,
      "comment": "체크인이 정말 편리했고, 위치도 나쁘지 않습니다. 다만 가격이 조금 비싸다고 느꼈어요.",
      "isVerified": true,
      "category": "value",
      "categoryScore": 2.5,
      "categoryRatings": {
        "cleanliness": 0,
        "accuracy": 0,
        "checkIn": 5.0,
        "communication": 0,
        "location": 4.0,
        "value": 2.5
      }
    }
  ]
},
  {
    id: '2',
    title: '강남 스타일 원룸',
    location: '서울시 강남구',
    price: 150000,
    rating: 4.83,
    reviewCount: 89,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
    images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688'],
    aiScore: 4.15,
    isSuperhost: false,
    amenities: ['무선인터넷', '주방'],
    description: '강남역 3번 출구에서 도보 3분 거리의 원룸입니다.',
    categoryRatings: {
      cleanliness: { rating: 4.5, aiRating: 4.2 },
      accuracy: { rating: 4.3, aiRating: 4.1 },
      checkIn: { rating: 4.3, aiRating: 4.0 },
      communication: { rating: 4.1, aiRating: 3.9 },
      location: { rating: 4.4, aiRating: 4.1 },
      value: { rating: 4.0, aiRating: 3.7 }
    },
    reviews: [
      {
        id: '2',
        userId: 'user2',
        userName: '이영희',
        date: '2024-03-14',
        rating: 4.8,
        aiRating: 4.5,
        category: 'location',
        categoryScore: 4.5,
        comment: '위치가 정말 좋았어요.',
        isVerified: true,
        categoryRatings: {
          cleanliness: 0,
          accuracy: 0,
          checkIn: 0,
          communication: 0,
          location: 4.5,
          value: 0
        }
      }
    ]
  },
  {
    id: '3',
    title: '홍대 근처 로프트',
    location: '서울시 마포구',
    price: 100000,
    rating: 4.6,
    reviewCount: 156,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750'],
    aiScore: 3.7,
    isSuperhost: true,
    amenities: ['무선인터넷', '주방', '세탁기', '에어컨', '옥상'],
    description: '홍대입구역에서 도보 5분 거리의 로프트입니다.',
    categoryRatings: {
      cleanliness: { rating: 4.5, aiRating: 4.2 },
      accuracy: { rating: 4.3, aiRating: 4.1 },
      checkIn: { rating: 4.3, aiRating: 4.0 },
      communication: { rating: 4.1, aiRating: 3.9 },
      location: { rating: 4.4, aiRating: 4.1 },
      value: { rating: 4.0, aiRating: 3.7 }
    },
    reviews: [
      {
        id: '3',
        userId: 'user3',
        userName: '박지민',
        date: '2024-03-13',
        rating: 4.6,
        aiRating: 4.2,
        category: 'value',
        categoryScore: 4.2,
        comment: '분위기가 좋았습니다.',
        isVerified: true,
        categoryRatings: {
          cleanliness: 0,
          accuracy: 0,
          checkIn: 0,
          communication: 0,
          location: 0,
          value: 4.2
        }
      }
    ]
  },
  {
    id: '4',
    title: '이태원 전망 좋은 펜션',
    location: '서울시 용산구',
    price: 200000,
    rating: 4.2,
    reviewCount: 203,
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
    images: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914'],
    aiScore: 4.43,
    isSuperhost: true,
    amenities: ['무선인터넷', '주방', '세탁기', '에어컨', '수영장', '바베큐'],
    description: '이태원에서 도보 10분 거리의 펜션입니다.',
    categoryRatings: {
      cleanliness: { rating: 4.5, aiRating: 4.2 },
      accuracy: { rating: 4.3, aiRating: 4.1 },
      checkIn: { rating: 4.3, aiRating: 4.0 },
      communication: { rating: 4.1, aiRating: 3.9 },
      location: { rating: 4.4, aiRating: 4.1 },
      value: { rating: 4.0, aiRating: 3.7 }
    },
    reviews: [
      {
        id: '4',
        userId: 'user4',
        userName: '최수진',
        date: '2024-03-12',
        rating: 4.2,
        aiRating: 4.0,
        category: 'location',
        categoryScore: 4.0,
        comment: '전망이 정말 좋았어요.',
        isVerified: true,
        categoryRatings: {
          cleanliness: 0,
          accuracy: 0,
          checkIn: 0,
          communication: 0,
          location: 4.0,
          value: 0
        }
      }
    ]
  }
]; 
