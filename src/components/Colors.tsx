import Color from '@/components/Color';

interface ColorsProps {
  colors: string[];
}

export default function Colors({ colors }: ColorsProps) {
  return (
    <div className="flex space-x-1">
      {colors.map((color, index) => (
        <Color key={index} color={color} />
      ))}
    </div>
  );
}
