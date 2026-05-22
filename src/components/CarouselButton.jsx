function CarouselButton({ direction, label, onClick }) {
  return (
    <button
      className={`carrossel-btn ${direction}`}
      type="button"
      aria-label={label}
      onClick={onClick}
    >
      {direction === 'anterior' ? '<' : '>'}
    </button>
  );
}

export default CarouselButton;
