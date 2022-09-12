import React from 'react';
import Link from '../src/components/Link';

function Title({ children, as }) {
  const Tag = as;
  return (
    <React.Fragment>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
          font-family: sans-serif;
        }
      `}</style>
    </React.Fragment>
  );
}

export default function HomePage() {
  return (
    <div>
      <Title as="h2"> Welcome to Next.js!!! </Title>
      <Link href="/faq">Ir para a página do FAQ</Link>
    </div>
  );
}
