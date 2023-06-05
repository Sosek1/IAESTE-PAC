import classes from "./ProgressBar.module.css";

const ProgressBar = ({
  currentPhotoIndex,
  currentProfileIndex,
  profileData,
}) => {
  return (
    <div className={classes.progresBar}>
      {profileData[currentProfileIndex].pictures.map((item, index) => (
        <div
          className={`${classes.littleBar} ${
            currentPhotoIndex === index ? classes.littleBarActive : ""
          }`}
          style={{
            width: `${(
              90 / profileData[currentProfileIndex].pictures.length
            ).toString()}%`,
          }}
          key={index}
        ></div>
      ))}
    </div>
  );
};

export default ProgressBar;
