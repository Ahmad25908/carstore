// import { Image as IImage } from 'sanity'
// import {client} from '../sanity/lib/client'
// import Image from 'next/image'
// export const getProductData=async()=>{
//     const res=await client.fetch(`*[_types==product]{
//   price,
//     _id,
//     title,
//     image,
//     category->{
//      name,
//       _id
//     },description
// }`)
//     return res
// }
// interface IProduct{
//     title:string,
//     slug:string,
//     _id:string,
//     description:string,
//     price:number,
//     image:IImage,
//     category:{name:string,_id:string}
// }
// export default async function Home() {
//     const data:IProduct[]=await getProductData()
//     console.log(data)
//  return(
//   <>
//   <div className="flext flex justify-center text-bold text-blue-500 text-2xl"> MY Electronic Website</div>
//     <div>
//         {data.map((item)=>(
//             <div key={item._id}>
//                 <div>{item.title}</div>
//                 <div>{item.description}</div>
//                 <div>{item.price}</div>
//                 <div>{item.category.name}</div> 
//            <div><Image src={urlFor(item.image).url()} alt={item.title} width={100} height={100} /></div>
//                 </div>    
//         ))}
//     </div>
//   </>
//  )
// }


// 'use client';

// import { Image as IImage } from 'sanity';
// import { client } from '../sanity/lib/client';
// import Image from 'next/image';
// import { urlFor } from '../sanity/lib/image';
// import { useEffect, useState } from 'react';
// import Link from 'next/link';

// // Define TypeScript interface for product data structure
// interface IProduct {
//   title: string;
//   slug: string;
//   _id: string;
//   description: string;
//   price: string;
//   image: IImage;
//   category: { name: string; _id: string };
//   rating: number; // Add rating to interface
// }

// // Component function
// export default function Home() {
//   const [data, setData] = useState<IProduct[]>([]);

//   // Fetch product data on component mount
//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await client.fetch(`*[_type == "product"]{
//         price,
//         _id,
//         title,
//         image,
//         category->{
//           name,
//           _id
//         },
//         description,
//         rating
//       }`);
//       setData(res);
//     };
//     fetchData();
//   }, []);

//   // Render star ratings
//   const renderStars = (rating: number) => {
//     const stars = [];
//     for (let i = 0; i < 5; i++) {
//       stars.push(
//         <span key={i} className={`text-yellow-400 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}>
//           &#9733;
//         </span>
//       );
//     }
//     return stars;
//   };

//   return (
//     <>
//       <div className="flex justify-center font-bold text-blue-500 text-2xl mb-8">
//         MY Electronic Website
//       </div>

//       {/* Responsive grid layout for product cards */}
//       <div className="grid gap-8 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {data.map((item) => (
//           <Link href={`/product/${item.slug}`} key={item._id} passHref>
//             <div
//               className="bg-white shadow-xl rounded-lg overflow-hidden p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out min-h-[480px] max-w-[350px] mx-auto"
//               style={{ height: '480px' }} // Set fixed card height for consistency
//             >
//               {/* Product title */}
//               <div className="text-xl font-semibold mb-4 text-center text-gray-800">{item.title}</div>

//               {/* Product image */}
//               <div className="flex justify-center mb-4">
//                 <Image
//                   src={urlFor(item.image).url()}
//                   alt={item.title}
//                   width={350}
//                   height={350}
//                   className="rounded-lg object-cover shadow-lg"
//                 />
//               </div>

//               {/* Product description */}
//               <div className="text-gray-700 text-sm mb-4 text-center overflow-hidden h-16">{item.description}</div>

//               {/* Product rating */}
//               <div className="mb-2 flex justify-center">{renderStars(item.rating)}</div>

//               {/* Product price */}
//               <div className="text-green-600 font-bold text-xl mb-4">${item.price}</div>

//               {/* Product category */}
//               <div className="text-gray-500 text-sm mb-4">{item.category.name}</div>

//               {/* Action buttons */}
//               <div className="flex space-x-4 mt-auto w-full">
//                 <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
//                   <span>Buy Now</span>
//                 </button>
//                 <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
//                   <span>Add to Cart</span>
//                 </button>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </>
//   );
// }


import React from 'react';
import HomePage from "@/components/pages/HomePage";
import CarSlider from '@/components/CarSlider';
import Navbar from '@/components/Navbar';

function Page() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-900">
      {/* Navbar Section */}
      <Navbar />

      {/* Background color section between Navbar and CarSlider */}
      <div className="bg-gray-900 py-4">
        {/* The background color between Navbar and CarSlider */}
      </div>

      {/* CarSlider Section */}
      <CarSlider/>

      <main>
        {/* HomePage Component */}
        <HomePage />
      </main>
    </div>
  );
}

export default Page;
