import { Explain } from "@/section/Explain";
import type { Metadata } from 'next'
import { NewPost } from "@/section/NewPost";

export const metadata: Metadata = {
  title: 'Blog kodelify',
}
 

export default function Blog(){
  return(
    <>
    <NewPost />
    </>
  );
}