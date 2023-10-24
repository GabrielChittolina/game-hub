import noImagePlaceholder from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string, w: number, h: number) => {
  if (!url) return noImagePlaceholder;

  const crop = `crop/${w}/${h}`;
  const regex = /media\//;
  return url.replace(regex, `media/${crop}/`);
};

export default getCroppedImageUrl;
