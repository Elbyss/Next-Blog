export default function GoogleTagNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
        height='0'
        width='0'
        className='hidden invisible'
      ></iframe>
    </noscript>
  );
}