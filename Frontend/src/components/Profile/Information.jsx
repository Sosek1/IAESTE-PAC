import mark from "../../assets/inne/verifiedMark.webp";
import classes from "./Information.module.css";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const Information = ({
  currentPhotoIndex,
  currentProfileIndex,
  profileData,
  isHidden,
}) => {
  return (
    <div
      className={`${
        isHidden ? classes.hiddenInformation : classes.information
      }`}
    >
      <div className={classes.nameAgeWrapper}>
        <h2>{profileData[currentProfileIndex].name}</h2>
        <img src={mark} />
      </div>

      {currentPhotoIndex === 0 && (
        <div className={classes.onlineDistance}>
          <div className={classes.onlineDistanceWrapper}>
            <div className={classes.dot}></div>
            <p>Teraz online</p>
          </div>
          <div className={classes.onlineDistanceWrapper}>
            <FmdGoodOutlinedIcon
              style={{
                fontSize: "20px",
                color: "#656e7b",
                marginRight: "5px",
              }}
            />
            <p>{profileData[currentProfileIndex].distance}</p>
          </div>
        </div>
      )}
      {currentPhotoIndex === 1 && (
        <p>{profileData[currentProfileIndex].description}</p>
      )}
      {currentPhotoIndex > 1 && (
        <ul className={classes.interestsWrapper}>
          {profileData[currentProfileIndex].interests.map((interest, index) => (
            <li className={classes.interest} key={index}>
              {interest}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Information;
