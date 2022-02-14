import Link from 'next/link';

// pages/404.js
export default function Custom404() {
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
      }}
    >
      404
      <br />
      <Link href='/'>
        <a>Back to home</a>
      </Link>
    </div>
  );
}
