'use client';

import { useParams } from 'next/navigation';

import { useGetFeed } from '@/apis/feed';
import { Header } from '@/components/Header';

import FeedItem from '../../components/FeedItem';

export default function FeedDetailPage() {
  const { id } = useParams();

  const { data: feedData } = useGetFeed(Number(id));
  if (!feedData) return;

  return (
    <div>
      <Header>
        <Header.FeedHeader>피드</Header.FeedHeader>
      </Header>
      <FeedItem id={feedData.id} contents={feedData.contents} images={feedData.images} />
    </div>
  );
}
