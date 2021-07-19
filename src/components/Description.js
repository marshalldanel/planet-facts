import React from 'react';

export default function Description({ name, info }) {
  console.log('info :>> ', info);
  return (
    <>
      <h2>{name}</h2>
      <p>{info.content}</p>
      <h4>{info.source}</h4>
    </>
  );
}
