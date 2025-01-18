import Star from "../Icons/Star";
import EmptyStar from "../Icons/EmptyStar";

export default function RaitingStar({ value }) {
  const raitingStarsCases = () => {
    switch (value) {
      case 5:
        return (
          <>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </>
        );
      case 4:
        return (
          <>
            <Star />
            <Star />
            <Star />
            <Star />
            <EmptyStar />
          </>
        );
      case 3:
        return (
          <>
            <Star />
            <Star />
            <Star />
            <EmptyStar />
            <EmptyStar />
          </>
        );
      case 2:
        return (
          <>
            <Star />
            <Star />
            <EmptyStar />
            <EmptyStar />
            <EmptyStar />
          </>
        );
      case 1:
        return (
          <>
            <EmptyStar />
            <EmptyStar />
            <EmptyStar />
            <EmptyStar />
            <EmptyStar />
          </>
        );

      default:
        return (
          <>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </>
        );
    }
  };

  return <div>{raitingStarsCases()}</div>;
}
