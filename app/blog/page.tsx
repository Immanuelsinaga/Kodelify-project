import type { Metadata } from 'next'
import { NewPost } from "@/section/NewPost";
import { Header } from '@/section/Header';
import { Footer } from '@/section/Footer';

export const metadata: Metadata = {
  title: 'Blog kodelify',
}
 

export default function Blog(){
  return(
    <>
    <Header />
    <NewPost />
    <Footer />
    </>
  );
}