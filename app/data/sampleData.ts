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
    reviews: [
      {
        id: '1',
        userId: 'user1',
        userName: '김철수',
        date: '2024-03-15',
        rating: 5.0,
        aiRating: 4.2,
        category: 'cleanliness',
        categoryScore: 5.0,
        comment: '꽤나 깨끗하고 지낼만 했던 숙소입니다!.',
        isVerified: true,
        categoryRatings: {
          cleanliness: 4.2,
          accuracy: 0,
          checkIn: 0,
          communication: 0,
          location: 0,
          value: 0
        }
      },
      {
        id: '2-checkIn',
        userId: 'user2',
        userName: '이영희',
        date: '2024-03-18',
        rating: 4.8,
        aiRating: 4.5,
        comment: '체크인이 정말 편리했고, 위치도 나쁘지 않습니다. 다만 가격이 조금 비싸다고 느꼈어요.',
        isVerified: true,
        category: 'checkIn',
        categoryScore: 5.0,
        categoryRatings: {
          cleanliness: 0,
          accuracy: 0,
          checkIn: 5.0,
          communication: 0,
          location: 4.0,
          value: 2.5
        }
      },
      {
        id: '2-location',
        userId: 'user2',
        userName: '이영희',
        date: '2024-03-18',
        rating: 4.8,
        aiRating: 4.5,
        comment: '체크인이 정말 편리했고, 위치도 나쁘지 않습니다. 다만 가격이 조금 비싸다고 느꼈어요.',
        isVerified: true,
        category: 'location',
        categoryScore: 4.0,
        categoryRatings: {
          cleanliness: 0,
          accuracy: 0,
          checkIn: 5.0,
          communication: 0,
          location: 4.0,
          value: 2.5
        }
        },
        {
          id: '3-location',
          userId: 'user2',
          userName: '이영희',
          date: '2024-03-18',
          rating: 4.8,
          aiRating: 4.5,
          comment: '체크인이 정말 편리했고, 위치도 나쁘지 않습니다. 다만 가격이 조금 비싸다고 느꼈어요.',
          isVerified: true,
          category: 'value',
          categoryScore: 2.5,
          categoryRatings: {
            cleanliness: 0,
            accuracy: 0,
            checkIn: 5.0,
            communication: 0,
            location: 4.0,
            value: 2.5
          }
      },
      {
        id: '6',
        userId: 'user6',
        userName: '이준호',
        date: '2024-03-27',
        rating: 4.6,
        aiRating: 4.3,
        comment: '호스트가 친절하고 의사소통이 빨라서 좋았어요. 위치도 만족!',
        isVerified: true,
        category: 'communication',
        categoryScore: 4.7,
        categories: [
          {
            name: 'communication',
            score: 4.7,
            aiScore: 4.5,
            keywords: ['친절', '빠름']
          },
          {
            name: 'location',
            score: 4.5,
            aiScore: 4.2,
            keywords: ['위치', '만족']
          }
        ],
        categoryRatings: {
          cleanliness: 0,
          accuracy: 0,
          checkIn: 0,
          communication: 4.7,
          location: 4.5,
          value: 0
        }
      },
      {
        id: '7',
        userId: 'user7',
        userName: '박서준',
        date: '2024-03-28',
        rating: 4.9,
        aiRating: 4.7,
        comment: '체크인 안내가 자세해서 편하게 입실했습니다. 청결도도 최고!',
        isVerified: true,
        category: 'checkIn',
        categoryScore: 5.0,
        categories: [
          {
            name: 'checkIn',
            score: 5.0,
            aiScore: 4.8,
            keywords: ['체크인', '안내', '편함']
          },
          {
            name: 'cleanliness',
            score: 5.0,
            aiScore: 4.7,
            keywords: ['청결', '최고']
          }
        ],
        categoryRatings: {
          cleanliness: 5.0,
          accuracy: 0,
          checkIn: 5.0,
          communication: 0,
          location: 0,
          value: 0
        }
      },
      {
        id: '8',
        userId: 'user8',
        userName: '정유진',
        date: '2024-03-29',
        rating: 4.3,
        aiRating: 4.0,
        comment: '가성비가 좋아서 출장 때 자주 이용할 것 같아요.',
        isVerified: true,
        category: 'value',
        categoryScore: 4.5,
        categories: [
          {
            name: 'value',
            score: 4.5,
            aiScore: 4.3,
            keywords: ['가성비', '출장']
          }
        ],
        categoryRatings: {
          cleanliness: 0,
          accuracy: 0,
          checkIn: 0,
          communication: 0,
          location: 0,
          value: 4.5
        }
      },
      {
        id: '9',
        userId: 'user9',
        userName: '오세훈',
        date: '2024-03-30',
        rating: 4.7,
        aiRating: 4.4,
        comment: '시설이 새것 같고, 주변에 맛집도 많아요!',
        isVerified: true,
        category: 'cleanliness',
        categoryScore: 4.8,
        categories: [
          {
            name: 'cleanliness',
            score: 4.8,
            aiScore: 4.5,
            keywords: ['시설', '새것']
          },
          {
            name: 'location',
            score: 4.6,
            aiScore: 4.3,
            keywords: ['맛집', '주변']
          }
        ],
        categoryRatings: {
          cleanliness: 4.8,
          accuracy: 0,
          checkIn: 0,
          communication: 0,
          location: 4.6,
          value: 0
        }
      },
      {
        id: '10',
        userId: 'user10',
        userName: '김하늘',
        date: '2024-04-01',
        rating: 4.1,
        aiRating: 3.9,
        comment: '방이 생각보다 좁았지만, 위치는 최고입니다.',
        isVerified: true,
        category: 'location',
        categoryScore: 5.0,
        categories: [
          {
            name: 'location',
            score: 5.0,
            aiScore: 4.8,
            keywords: ['위치', '최고']
          },
          {
            name: 'value',
            score: 3.5,
            aiScore: 3.0,
            keywords: ['좁음']
          }
        ],
        categoryRatings: {
          cleanliness: 0,
          accuracy: 0,
          checkIn: 0,
          communication: 0,
          location: 5.0,
          value: 3.5
        }
      },
      {
        id: '11',
        userId: 'user11',
        userName: '이수민',
        date: '2024-04-02',
        rating: 4.5,
        aiRating: 4.2,
        comment: '청결도와 위치 모두 만족! 다음에도 또 이용하고 싶어요.',
        isVerified: true,
        category: 'cleanliness',
        categoryScore: 4.7,
        categories: [
          {
            name: 'cleanliness',
            score: 4.7,
            aiScore: 4.3,
            keywords: ['청결', '만족']
          },
          {
            name: 'location',
            score: 4.6,
            aiScore: 4.2,
            keywords: ['위치', '만족']
          }
        ],
        categoryRatings: {
          cleanliness: 4.7,
          accuracy: 0,
          checkIn: 0,
          communication: 0,
          location: 4.6,
          value: 0
        }
      },
      {
        id: '12',
        userId: 'user12',
        userName: '박지훈',
        date: '2024-04-03',
        rating: 4.0,
        aiRating: 3.8,
        comment: '체크인 과정이 조금 복잡했지만, 호스트가 잘 안내해주셨어요.',
        isVerified: true,
        category: 'checkIn',
        categoryScore: 3.5,
        categories: [
          {
            name: 'checkIn',
            score: 3.5,
            aiScore: 3.2,
            keywords: ['체크인', '복잡']
          },
          {
            name: 'communication',
            score: 4.5,
            aiScore: 4.0,
            keywords: ['안내', '호스트']
          }
        ],
        categoryRatings: {
          cleanliness: 0,
          accuracy: 0,
          checkIn: 3.5,
          communication: 4.5,
          location: 0,
          value: 0
        }
      },
      {
        id: '13',
        userId: 'user13',
        userName: '정민수',
        date: '2024-04-04',
        rating: 4.3,
        aiRating: 4.0,
        comment: '가성비와 청결 모두 만족! 추천합니다.',
        isVerified: true,
        category: 'value',
        categoryScore: 4.5,
        categories: [
          {
            name: 'value',
            score: 4.5,
            aiScore: 4.2,
            keywords: ['가성비', '만족']
          },
          {
            name: 'cleanliness',
            score: 4.3,
            aiScore: 4.0,
            keywords: ['청결', '추천']
          }
        ],
        categoryRatings: {
          cleanliness: 4.3,
          accuracy: 0,
          checkIn: 0,
          communication: 0,
          location: 0,
          value: 4.5
        }
      },
      {
        id: '14',
        userId: 'user14',
        userName: '이하늘',
        date: '2024-04-05',
        rating: 4.8,
        aiRating: 4.6,
        comment: '호스트가 정말 친절하고, 숙소도 쾌적했습니다.',
        isVerified: true,
        category: 'communication',
        categoryScore: 4.9,
        categories: [
          {
            name: 'communication',
            score: 4.9,
            aiScore: 4.7,
            keywords: ['친절', '호스트']
          },
          {
            name: 'cleanliness',
            score: 4.8,
            aiScore: 4.5,
            keywords: ['쾌적', '숙소']
          }
        ],
        categoryRatings: {
          cleanliness: 4.8,
          accuracy: 0,
          checkIn: 0,
          communication: 4.9,
          location: 0,
          value: 0
        }
      },
      {
        id: '15',
        userId: 'user15',
        userName: '김지수',
        date: '2024-04-06',
        rating: 4.2,
        aiRating: 4.0,
        comment: '위치가 좋아서 서울 시내 이동이 편리했어요.',
        isVerified: true,
        category: 'location',
        categoryScore: 4.6,
        categories: [
          {
            name: 'location',
            score: 4.6,
            aiScore: 4.3,
            keywords: ['위치', '이동', '편리']
          }
        ],
        categoryRatings: {
          cleanliness: 0,
          accuracy: 0,
          checkIn: 0,
          communication: 0,
          location: 4.6,
          value: 0
        }
      },
      {
        id: '16',
        userId: 'user16',
        userName: '박하늘',
        date: '2024-04-07',
        rating: 4.4,
        aiRating: 4.1,
        comment: '청결도와 체크인 모두 만족! 다음에도 또 이용할게요.',
        isVerified: true,
        category: 'cleanliness',
        categoryScore: 4.5,
        categories: [
          {
            name: 'cleanliness',
            score: 4.5,
            aiScore: 4.2,
            keywords: ['청결', '만족']
          },
          {
            name: 'checkIn',
            score: 4.4,
            aiScore: 4.0,
            keywords: ['체크인', '만족']
          }
        ],
        categoryRatings: {
          cleanliness: 4.5,
          accuracy: 0,
          checkIn: 4.4,
          communication: 0,
          location: 0,
          value: 0
        }
      },
      {
        id: '17',
        userId: 'user17',
        userName: '이민호',
        date: '2024-04-08',
        rating: 4.7,
        aiRating: 4.5,
        comment: '가성비 최고! 위치도 좋아요.',
        isVerified: true,
        category: 'value',
        categoryScore: 4.8,
        categories: [
          {
            name: 'value',
            score: 4.8,
            aiScore: 4.6,
            keywords: ['가성비', '최고']
          },
          {
            name: 'location',
            score: 4.7,
            aiScore: 4.5,
            keywords: ['위치', '좋아요']
          }
        ],
        categoryRatings: {
          cleanliness: 0,
          accuracy: 0,
          checkIn: 0,
          communication: 0,
          location: 4.7,
          value: 4.8
        }
      },
      {
        id: '18',
        userId: 'user18',
        userName: '최유진',
        date: '2024-04-09',
        rating: 4.3,
        aiRating: 4.0,
        comment: '체크인도 빠르고, 숙소가 조용해서 좋았어요.',
        isVerified: true,
        category: 'checkIn',
        categoryScore: 4.6,
        categories: [
          {
            name: 'checkIn',
            score: 4.6,
            aiScore: 4.3,
            keywords: ['체크인', '빠름']
          },
          {
            name: 'cleanliness',
            score: 4.2,
            aiScore: 4.0,
            keywords: ['조용', '숙소']
          }
        ],
        categoryRatings: {
          cleanliness: 4.2,
          accuracy: 0,
          checkIn: 4.6,
          communication: 0,
          location: 0,
          value: 0
        }
      },
      {
        id: '19',
        userId: 'user19',
        userName: '김민재',
        date: '2024-04-10',
        rating: 4.5,
        aiRating: 4.2,
        comment: '호스트가 친절해서 문의에 바로 답변해주셨어요.',
        isVerified: true,
        category: 'communication',
        categoryScore: 4.8,
        categories: [
          {
            name: 'communication',
            score: 4.8,
            aiScore: 4.5,
            keywords: ['친절', '답변', '호스트']
          }
        ],
        categoryRatings: {
          cleanliness: 0,
          accuracy: 0,
          checkIn: 0,
          communication: 4.8,
          location: 0,
          value: 0
        }
      },
      {
        id: '20',
        userId: 'user20',
        userName: '박지민',
        date: '2024-04-11',
        rating: 4.6,
        aiRating: 4.3,
        comment: '청결도와 위치 모두 만족! 재방문 의사 있습니다.',
        isVerified: true,
        category: 'cleanliness',
        categoryScore: 4.7,
        categories: [
          {
            name: 'cleanliness',
            score: 4.7,
            aiScore: 4.4,
            keywords: ['청결', '만족']
          },
          {
            name: 'location',
            score: 4.6,
            aiScore: 4.3,
            keywords: ['위치', '재방문']
          }
        ],
        categoryRatings: {
          cleanliness: 4.7,
          accuracy: 0,
          checkIn: 0,
          communication: 0,
          location: 4.6,
          value: 0
        }
      }
    ])
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
