import React from 'react';

export default function Card({
  uuid,
  title,
  description,
  tags,
  image,
  price,
}: {
  id: number;
  uuid: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  price: number;
}) {
  return (
    <div key={uuid} className="mb-10 flex flex-col gap-3 p-4 border rounded-xl bg-gray-600">
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-4xl">{title}</h2>
        <img src={image} alt="" className="rounded-xl" />
        <p>{description}</p>
        <div className="flex gap-x-4 ml-4 flex-wrap">
          {tags.map((tag, i) => (
            <p key={i}>{tag}</p>
          ))}
        </div>
      </div>
      <p>{price}</p>
    </div>
  );
}
