import PlaceItem from "./components/PlaceItem";
// title: string;
//   name: string;
//   country: string;
//   image: string;
//   imageAlt: string;
//   location: string;
//   description: string;
function MainContent(): JSX.Element {
  return (
    <main>
      <PlaceItem
        title="Dear Green Place"
        name={"Glasgow"}
        country="Scotland"
        image="https://www.arup.com/-/media/arup/images/projects/u/university-of-glasgow-net-zero-carbon-strategy/university-of-glasgow-main-building-288-2.jpg?"
        imageAlt="a view of the University of Glasgow on a bright and cloudy day surrounded by trees"
        location="https://www.google.com/maps/place/Glasgow,+UK/@55.864237,-4.251806,12z/data=!4m13!1m7!3m6!1s0x488815562056ceeb:0x71e683b805ef511e!2sGlasgow,+UK!3b1!8m2!3d55.864237!4d-4.251806!3m4!1s0x488815562056ceeb:0x71e683b805ef511e!8m2!3d55.864237!4d-4.251806"
        description="I lived here for almost 18 years."
      />
    </main>
  );
}
export default MainContent;
