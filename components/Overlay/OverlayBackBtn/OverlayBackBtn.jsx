import styles from "./backBtn.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { reverseAnimation } from "../../../store/experienceAnimationsSlice/experienceAnimationsSlice";
import { useCallback } from "react";
import { useNavigate } from "react-router";

export default function OverlayBackBtn({ isDiffRoute = false, ...props }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const animationStage = useSelector(
    (state) => state.experienceAnimations.animationStage
  );

  const handleClick = useCallback(() => {
    if (isDiffRoute) {
      navigate("/");
    } else {
      dispatch(reverseAnimation(animationStage));
    }
  }, [dispatch, navigate, animationStage, isDiffRoute]);

  return (
    <button className={styles.backBtn} onClick={handleClick} {...props}>
      <img
        src="/images/backBtnLanding.png"
        alt="back button"
        draggable={false}
      />
    </button>
  );
}
