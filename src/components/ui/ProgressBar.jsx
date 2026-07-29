export const ProgressBar = ({ value }) => {
  return (
    <div className="h-2 w-full rounded-input bg-neutral">
      <div
        className="h-full rounded-input bg-primary transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};
