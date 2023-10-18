import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, error, loading } = useGenres();

  return (
    <ul>
      {loading && <li>Loading...</li>}
      {error && <li>{error}</li>}
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
