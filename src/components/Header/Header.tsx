import { FC } from "react";
import { Helmet } from "react-helmet-async";
import couple from "../../assets/couple.svg";

const Header: FC = () => {
  return (
    <Helmet>
      <link rel="icon" type="image/svg+xml" href={couple} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Hari weds Sreelakshmi" />
      <meta
        property="og:description"
        content="Join us to celebrate our wedding"
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/bg_image.jpg" />
      <meta property="og:url" content="https://www.colbyfayock.com" />
      <title>Hari weds Sreelakshmi</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@200..900&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
  );
};

export default Header;
