import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import classes from "./iconsLayer.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { motion } from "framer-motion";

const IconsLayer = ({ clickedIcon }) => {
  return (
    <div className={classes.iconLayerWrapper}>
      <div className={`${classes.iconBox} ${classes.borderRed}`}>
        <CloseRoundedIcon
          onClick={() => clickedIcon("DISLIKE")}
          style={{
            fontSize: "30px",
            color: "#ff4458",
          }}
        />
      </div>
      <div className={`${classes.iconBox} ${classes.borderGreen}`}>
        <FavoriteIcon
          onClick={() => clickedIcon("LIKE")}
          style={{
            fontSize: "30px",
            color: "#7cfda3",
          }}
        />
      </div>
    </div>
  );
};

export default IconsLayer;
