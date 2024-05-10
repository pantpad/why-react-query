type ActionButtonsType = {
  setId: React.Dispatch<React.SetStateAction<number>>;
};

export default function ActionButtons({ setId }: ActionButtonsType) {
  function handleNext() {
    setId((prev) => {
      if (prev === 700) return prev;
      return ++prev;
    });
  }
  function handlePrev() {
    setId((prev) => {
      if (prev === 1) return prev;
      return --prev;
    });
  }

  return (
    <div className="actions">
      <button onClick={handlePrev}>prev</button>
      <button onClick={handleNext}>next</button>
    </div>
  );
}
