'use client';

import React from 'react'
import Header from './components/Header'
import AccommodationCard from './components/AccommodationCard'
import { sampleAccommodations } from './data/sampleData'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* 히어로 섹션 */}
        <section className="pt-12 pb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            당신의 완벽한 휴식을 찾아보세요
          </h1>
          <p className="text-xl text-gray-600">
            AI가 추천하는 최고의 숙소에서 특별한 경험을 만나보세요
          </p>
        </section>

        {/* 필터 섹션 */}
        <section className="flex space-x-4 mb-8 overflow-x-auto pb-4">
          <button className="px-4 py-2 bg-black text-white rounded-full whitespace-nowrap">
            전체
          </button>
          <button className="px-4 py-2 bg-white text-gray-800 rounded-full whitespace-nowrap hover:bg-gray-100">
            아파트
          </button>
          <button className="px-4 py-2 bg-white text-gray-800 rounded-full whitespace-nowrap hover:bg-gray-100">
            원룸
          </button>
          <button className="px-4 py-2 bg-white text-gray-800 rounded-full whitespace-nowrap hover:bg-gray-100">
            펜션
          </button>
          <button className="px-4 py-2 bg-white text-gray-800 rounded-full whitespace-nowrap hover:bg-gray-100">
            호텔
          </button>
        </section>

        {/* 추천 숙소 섹션 */}
        <section className="pb-12">
          <h2 className="text-3xl font-semibold mb-6">추천 숙소</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleAccommodations.map((accommodation) => (
              <AccommodationCard
                key={accommodation.id}
                accommodation={accommodation}
              />
            ))}
          </div>
        </section>

        {/* AI 추천 섹션 */}
        <section className="py-12 border-t">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">AI가 추천하는 숙소</h2>
            <p className="text-lg mb-6">
              인공지능이 분석한 수많은 리뷰와 평점을 바탕으로<br />
              당신에게 가장 적합한 숙소를 추천해드립니다
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              AI 추천 받기
            </button>
          </div>
        </section>
      </div>
    </main>
  )
} 