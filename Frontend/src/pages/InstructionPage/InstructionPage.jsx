import classes from "./InstructionPage.module.css";
import logo from "../../assets/tinder-logo-red.png";
import DoneIcon from '@mui/icons-material/Done';
import { colors } from "@mui/material";

const InstructionPage = () => {
  return(
    <main>
      <section>
        <header>
            <img src = {logo}/>
            <h2>Welcome to IAESTinder.</h2>
            <h4>Please follow these House Rules.</h4>
        </header>
        <ul>
          <li>
              <div>
                <DoneIcon style={{fontSize:"26px", color:"red", marginRight:"10px"}}/>
                <h3>Be yourself.</h3>
              </div>
              <span>Make sure your photos, age and bio are true to who you are.</span>
          </li>
          <li>
              <div>
                <DoneIcon style={{fontSize:"26px", color:"red", marginRight:"10px"}}/>
                <h3>Stay safe.</h3>
              </div>
              <span>Dont't be too quick to give out personal information. Date Safely.</span>
          </li>
          <li>
              <div>
                <DoneIcon style={{fontSize:"26px", color:"red", marginRight:"10px"}}/>
                <h3>Play it cool.</h3>
              </div>
              <span>Respect others and treat them as you would like to be treated.</span>
          </li>
          <li>
              <div>
                <DoneIcon style={{fontSize:"26px", color:"red", marginRight:"10px"}}/>
                <h3>Be proactive.</h3>
              </div>
              <span>Always report bad behavior.</span>
          </li>
        </ul>
      </section>
      <button>I Agree</button>
    </main>
  ); <p>Instruction</p>
};

export default InstructionPage;
