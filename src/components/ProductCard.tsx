import Image from 'next/image';
import Colors from './Colors';

interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: number;
  colors: string[];
}

export default function ProductCard({ imageUrl, name, price, colors }: ProductCardProps) {
  return (
    <div className="bg-white shadow-md rounded-md">
      <div className="relative w-full h-64 mb-4">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" className="rounded-md" />
      </div>
     <div className='p-2'>
     <Colors colors={colors} />
      <h2 className="text-lg font-bold mb-2 mt-2">{name}</h2>
      <p className="text-gray-600 mb-2">{price} ден</p>
     </div>
    </div>
  );
}
