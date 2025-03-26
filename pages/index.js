// PATH: PAGE --> PLACES (Homepage) : Route for Homepage - all places
//
// IMPORTS
import styled from "styled-components";
import Card from "../components/Card";
import useSWR from "swr";
import { StyledLink } from "../components/StyledLink";

// STYLES: CSS
const ListContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
`;
const FixedLink = styled(StyledLink)`
  position: fixed;
  bottom: 50px;
  right: 50px;
`;

// FUNCTION: Home > Homepage
function Home() {
  const { data, isLoading, error, mutate } = useSWR("/api/places", {
    fallbackData: [],
  });

  return (
    <>
      <ListContainer>
        {data.map((place) => {
          return (
            <li key={place._id}>
              <Card
                name={place.name}
                image={place.image}
                location={place.location}
                id={place._id}
              />
            </li>
          );
        })}
      </ListContainer>
      <FixedLink href="/create">+ place</FixedLink>
    </>
  );
}

// EXPORTS
export default Home;
