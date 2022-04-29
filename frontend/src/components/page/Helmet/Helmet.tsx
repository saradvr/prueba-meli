import { Helmet as OriginalHelmet } from "react-helmet-async";
import { HelmetProps } from "./Helmet-types";
import "./Helmet.scss";

export const Helmet = ({ title, description, h1, image, url }: HelmetProps) => {
  return (
    <>
      <OriginalHelmet prioritizeSeoTags>
        <title>{title}</title>
        <link rel="canonical" href="/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
      </OriginalHelmet>
      {h1 && <h1 className="helmet h1">{h1}</h1>}
    </>
  );
};
