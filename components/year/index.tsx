type YearTypes = {
  year: number;
};

export const Year = ({ year }: YearTypes) => {
  return (
    <div className="mt-20">
      <h3>{year}</h3>
    </div>
  );
};
