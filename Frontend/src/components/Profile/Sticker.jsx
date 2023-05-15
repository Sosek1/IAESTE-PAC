import classes from "./Sticker.module.css";

const Sticker = ({ stickerText, activeSticker }) => {
  return (
    <div
      className={`${classes.sticker} ${
        stickerText === "LIKE" ? classes.like : classes.nope
      } ${activeSticker ? classes.activeSticker : ""}
    `}
    >
      <p>{stickerText}</p>
    </div>
  );
};

export default Sticker;
