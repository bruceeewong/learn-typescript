interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtworksData {
  artworks: { title: string }[];
}

interface ArtistData {
  artists: { name: string }[];
}

// Intersection Types: All in one

type ArtworkResponse = ArtworksData & ErrorHandling;
type ArtistResponse = ArtistData & ErrorHandling;

const handleArtistsResponse = (response: ArtistResponse) => {
  if (response.error) {
    console.error(response.error.message);
    return;
  }
  console.log(response.artists);
};
