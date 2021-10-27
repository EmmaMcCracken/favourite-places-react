import { PlaceItem, PlaceItemProps } from "./components/PlaceItem";
function MainContent(): JSX.Element {
  const Glasgow: PlaceItemProps = {
    title: "Dear Green Place",
    name: "Glasgow",
    country: "Scotland",
    image:
      "https://images.unsplash.com/photo-1621519604512-85ea63c15ca2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1379&q=80",
    imageAlt:
      "a view of the University of Glasgow on a bright and cloudy day surrounded by trees",
    location:
      "https://www.google.com/maps/place/Glasgow,+UK/@55.864237,-4.251806,12z/data=!4m13!1m7!3m6!1s0x488815562056ceeb:0x71e683b805ef511e!2sGlasgow,+UK!3b1!8m2!3d55.864237!4d-4.251806!3m4!1s0x488815562056ceeb:0x71e683b805ef511e!8m2!3d55.864237!4d-4.251806",
    description: "I lived here for almost 18 years.",
  };
  const London: PlaceItemProps = {
    title: "The Big Smoke",
    name: "London",
    country: "England",
    image:
      "https://images.unsplash.com/photo-1510265236892-329bfd7de7a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    imageAlt:
      "cobbled street with flats on the left, potted plants in front of each door, and trees on the right, and a grey-blue sky",
    location: "https://goo.gl/maps/872psxnBnx51JXwR6",
    description:
      "Random mews in South Kensington, near where I went to university. Can you tell that I'm obsessed with educational establishments?",
  };
  const Biriwa: PlaceItemProps = {
    title: "Love and Maths by the sea",
    name: "Biriwa",
    country: "Ghana",
    image:
      "https://images.unsplash.com/photo-1562490654-3f78be490c66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    imageAlt:
      "horseshoe beach with a few dozen wooden boats, blue water, cloudy sky",
    location: "https://goo.gl/maps/mBUdvAnDqto3UnyT9",
    description:
      "Biriwa is home to amazing bread, fish and the African Institute for Mathematical Sciences (AIMS), Ghana.",
  };

  const Bermuda: PlaceItemProps = {
    title: "The Rock",
    name: "Bermuda",
    country: "Bermuda",
    image:
      "https://images.pexels.com/photos/7910131/pexels-photo-7910131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    imageAlt: "beach, clear blue water, and two large rocks",
    location: "https://goo.gl/maps/qJDvHpBQBLXamZ6q8",
    description:
      "Bermuda, an odd place, where water is scarce, and the acknowledged speed limit is 50kmph even though the legal speed limit is 35kmph.",
  };
  const placeObjects = [Glasgow, London, Biriwa, Bermuda];

  const placeComponents = placeObjects.map((placeObject) => {
    return (
      <PlaceItem
        key={placeObject.name}
        title={placeObject.title}
        name={placeObject.name}
        country={placeObject.country}
        image={placeObject.image}
        imageAlt={placeObject.imageAlt}
        location={placeObject.location}
        description={placeObject.description}
      />
    );
  });

  return <main>{placeComponents}</main>;
}
export default MainContent;
