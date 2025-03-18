interface ColorProps {
    color: string;
  }
  
  export default function Color({ color }: ColorProps) {
    return <span className="w-4 h-4 rounded-full border" style={{ backgroundColor: color }}></span>;
  }
  