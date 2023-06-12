import classes from "./Sticker.module.css";

const Sticker = ({ stickerText }) => {
  return (
    <div
      className={`${classes.sticker} ${
        stickerText === "LIKE" ? classes.like : classes.nope
      }`}
    >
      <p>{stickerText}</p>
    </div>
  );
};

export default Sticker;
