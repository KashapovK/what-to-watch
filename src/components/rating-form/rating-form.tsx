type RatingFormProps = {
    onChange: (value: number) => void;
}

const ratingStar = [...Array(10).keys()].reverse();

function RatingForm({onChange}:RatingFormProps):JSX.Element {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      onChange(Number(e.target.value));
    }
  };

  return (
    <div className="rating">
      <div className="rating__stars">
        {ratingStar.map((rating) => (
          <>
            <input className="rating__input"
              id={`star-${rating}`}
              name="rating"
              value={`${rating}`}
              onChange={handleInputChange}
            />
            <label className="rating__input" htmlFor={`star-${rating}`}> Rating {rating} </label>
          </>
        ))}
      </div>
    </div>
  );
}

export default RatingForm;
