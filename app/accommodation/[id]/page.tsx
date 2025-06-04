'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '../../components/Header';
import { useParams } from 'next/navigation';
import { Accommodation, Review } from '../../../types/index';
import { sampleAccommodations } from '../../data/sampleData';
import CategoryReviewModal from '../../components/CategoryReviewModal';
import Link from 'next/link';

const categoryKeywords = {
  cleanliness: ['깨끗', '청결', '위생', '청소'],
  accuracy: ['정확', '일치', '신뢰', '신뢰도'],
  checkIn: ['체크인', '입실', '도착', '키'],
  communication: ['의사소통', '대화', '연락', '호스트'],
  location: ['위치', '교통', '역', '거리'],
  value: ['가격', '가성비', '비용', '값', '만족']
};

export default function AccommodationDetailPage() {
  const params = useParams();
  const [accommodation, setAccommodation] = useState<Accommodation | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalCategory, setModalCategory] = useState<string | null>(null);

  useEffect(() => {
    const id = params.id as string;
    // 실제 API 호출 대신 샘플 데이터 사용
    const foundAccommodation = sampleAccommodations.find(acc => acc.id === id);
    if (foundAccommodation) {
      setAccommodation(foundAccommodation);
      // 리뷰 데이터 변환
      const convertedReviews: Review[] = foundAccommodation.reviews.map(review => ({
        ...review,
        isVerified: true,
        categoryRatings: {
          cleanliness: review.category === 'cleanliness' ? review.categoryScore : 0,
          accuracy: review.category === 'accuracy' ? review.categoryScore : 0,
          checkIn: review.category === 'checkIn' ? review.categoryScore : 0,
          communication: review.category === 'communication' ? review.categoryScore : 0,
          location: review.category === 'location' ? review.categoryScore : 0,
          value: review.category === 'value' ? review.categoryScore : 0
        }
      }));
      setReviews(convertedReviews);
    }
    setIsLoading(false);
  }, [params.id]);

  if (isLoading || !accommodation) {
    return <div className="flex justify-center items-center min-h-screen">로딩 중...</div>;
  }

  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <div className="pt-6">
          <h1 className="text-3xl font-semibold">{accommodation.title}</h1>
          <div className="flex items-center space-x-4 mt-2">
            <div className="flex items-center">
              <span className="text-sm">★ {accommodation.rating}</span>
              <span className="ml-2 text-sm text-blue-500">AI {accommodation.aiScore.toFixed(1)}</span>
            </div>
            <span className="text-gray-500">{accommodation.location}</span>
          </div>

          {/* 이미지 갤러리 */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-96">
              <Image
                src={accommodation.imageUrl}
                alt={accommodation.title}
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          {/* 상세 정보 */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="border-b pb-8">
                <h2 className="text-2xl font-semibold mb-4">숙소 설명</h2>
                <p className="text-gray-600">
                  {accommodation.description}
                </p>
              </div>

              {/* 상세 평점 */}
              <div className="py-8 border-b">
                <h2 className="text-2xl font-semibold mb-4">상세 평점</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => setModalCategory('cleanliness')}>
                    <span>청결도</span>
                    <div className="flex items-center">
                      <span>{accommodation.categoryRatings.cleanliness.rating}</span>
                      <span className="ml-2 text-blue-500">AI {accommodation.categoryRatings.cleanliness.aiRating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => setModalCategory('accuracy')}>
                    <span>정확도</span>
                    <div className="flex items-center">
                      <span>{accommodation.categoryRatings.accuracy.rating}</span>
                      <span className="ml-2 text-blue-500">AI {accommodation.categoryRatings.accuracy.aiRating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => setModalCategory('checkIn')}>
                    <span>체크인</span>
                    <div className="flex items-center">
                      <span>{accommodation.categoryRatings.checkIn.rating}</span>
                      <span className="ml-2 text-blue-500">AI {accommodation.categoryRatings.checkIn.aiRating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => setModalCategory('communication')}>
                    <span>의사소통</span>
                    <div className="flex items-center">
                      <span>{accommodation.categoryRatings.communication.rating}</span>
                      <span className="ml-2 text-blue-500">AI {accommodation.categoryRatings.communication.aiRating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => setModalCategory('location')}>
                    <span>위치</span>
                    <div className="flex items-center">
                      <span>{accommodation.categoryRatings.location.rating}</span>
                      <span className="ml-2 text-blue-500">AI {accommodation.categoryRatings.location.aiRating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => setModalCategory('value')}>
                    <span>가격 대비 만족도</span>
                    <div className="flex items-center">
                      <span>{accommodation.categoryRatings.value.rating}</span>
                      <span className="ml-2 text-blue-500">AI {accommodation.categoryRatings.value.aiRating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 리뷰 섹션 */}
              <div className="py-8">
                <h2 className="text-2xl font-semibold mb-4">리뷰</h2>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <span className="font-semibold">{review.userName}</span>
                          {review.isVerified && (
                            <span className="ml-2 text-blue-600 text-sm">✓ 인증된 게스트</span>
                          )}
                        </div>
                        <div className="flex items-center">
                          <span>★ {review.rating}</span>
                          {review.aiRating !== undefined && (
                            <span className="ml-2 text-blue-500">AI {review.aiRating.toFixed(1)}</span>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-2">{review.comment}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-2">
                        <div>청결도: {review.categoryRatings.cleanliness}</div>
                        <div>체크인: {review.categoryRatings.checkIn}</div>
                        <div>의사소통: {review.categoryRatings.communication}</div>
                        <div>위치: {review.categoryRatings.location}</div>
                        <div>가성비: {review.categoryRatings.value}</div>
                      </div>
                      <p className="text-gray-500 text-sm">{review.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 예약 섹션 */}
            <div className="md:col-span-1">
              <div className="sticky top-20 border rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-semibold">₩{accommodation.price.toLocaleString()}</span>
                  <span className="text-gray-500">/ 박</span>
                </div>
                <button className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors">
                  예약하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {modalCategory && (
        <CategoryReviewModal
          reviews={reviews}
          category={modalCategory}
          keywords={categoryKeywords[modalCategory as keyof typeof categoryKeywords]}
          onClose={() => setModalCategory(null)}
        />
      )}
    </div>
  );
} 