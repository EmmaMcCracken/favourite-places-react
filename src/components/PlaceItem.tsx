interface PlaceItemProps {
  title: string;
  name: string;
  country: string;
  image: string;
  imageAlt: string;
  location: string;
  description: string;
}

function PlaceItem(props: PlaceItemProps): JSX.Element {
  return (
    <div className="place">
      <img src={props.image} alt={props.imageAlt} />
      <h2>{props.title}</h2>
      <h3>
        {props.name}, {props.country} (<a href={props.location}>map link</a>)
      </h3>
      <p>{props.description}</p>
    </div>
  );
}

export { PlaceItem };
export type { PlaceItemProps };
