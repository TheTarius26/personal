import React from "react";

import Image from "next/image";
import Link from "next/link";

type Props = {
  title?: string;
  children?: React.ReactNode;
  href?: string;
}

const Card = ({ children, title, href = '' } : Props) => {
  return (
    <Link href={href} passHref>
      <div className={`
      w-64 h-80 max-w-sm rounded shadow-lg ${href ? 'cursor-pointer' : ''}
      `}>
        <Image
        src='/img/dummy.jpg'
        alt="Card image cap"
        width={300}
        height={200}
        className="object-cover rounded" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{children}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;