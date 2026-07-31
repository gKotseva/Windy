export const LocationToggle = ({ isOn, onToggle }) => {
  return (
    <div className="flex flex-col items-center gap-1 justify-center">
      <button
        onClick={onToggle}
        className="relative flex h-7 w-20 items-center rounded-input border border-outline px-2"
      >
        <span
          className={`absolute size-5 rounded-full transition-all duration-300 ${
            isOn ? "translate-x-11 bg-green-300" : "translate-x-0 bg-red-600"
          }`}
        />
      </button>

      <p className="text-small text-neutral uppercase">Location access</p>
    </div>
  );
};
