import Script from "next/script";

export const Ga = () => {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-QRT3DYLL8Y" />

      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-QRT3DYLL8Y');
        `}
      </Script>
    </>
  );
};
