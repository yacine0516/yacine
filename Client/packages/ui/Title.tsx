import { animated, useSpring } from "@react-spring/web";
import "./style.css";
export const Title = () => {
  const props = useSpring({
    to: { x: 0, y: 0 },
    from: { y: -1000 },
    delay: 250,
  });
  return (
    <animated.h2 className="Big_title" style={props}>
      Installation , Maintenance , Entretien et Réparation tous types
      d'équipements de cuisine Professionnel.
    </animated.h2>
  );
};
