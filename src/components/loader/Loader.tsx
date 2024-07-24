import classes from "./Loader.module.scss";
import pokeballLoader from "../../assets/images/pokeball-loader.gif";

export const Loader = () => {
  return (
    <div className={classes["loader"]}>
      <img src={pokeballLoader} alt="" />
    </div>
  );
};
