const getCroppedImageUrl = (url: string, w: number, h: number) => {
  const crop = `crop/${w}/${h}`;
  const regex = /media\//;
  return url.replace(regex, `media/${crop}/`);
};

export default getCroppedImageUrl;
