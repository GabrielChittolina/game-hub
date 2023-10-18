import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error, loading } = useGenres();

  return (
    <ul>
      {loading && <li>Loading...</li>}
      {error && <li>{error}</li>}
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
