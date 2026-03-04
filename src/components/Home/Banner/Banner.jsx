import React from 'react'
import heroImg from "@/assets/hero.png"
import Image from 'next/image'
import Link from 'next/link'
import { myFont } from '@/app/layout'
const Banner = () => {
  return (
    <div className={`${myFont.className} flex items-center justify-between`}>
        <div className='space-y-4'>
            <h1 className='text-5xl font-bold leading-15'>আপনার শিশুকে দিন  <br /> <span className='text-primary'>একটি উজ্জ্বল ভবিষ্যৎ</span></h1>
            <p className='text-lg'>আপনার সন্তানের শৈশবকে আনন্দময় করে তুলুন আমাদের আকর্ষণীয় খেলনার সম্ভার থেকে বেছে নিয়ে। প্রতিটি খেলনা শিশুদের কল্পনাশক্তি, সৃজনশীলতা এবং শেখার আগ্রহ বাড়াতে সাহায্য করবে।</p>
            <div className='flex gap-4'>
                <Link href={"/all-products"} className='btn btn-primary'>Shop Now</Link>
                
            </div>
        </div>
        <Image src={heroImg} alt="Hero" width={600} height={400} />
   </div>
  )
}

export default Banner