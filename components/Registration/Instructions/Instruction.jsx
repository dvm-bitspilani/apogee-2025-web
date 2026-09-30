import { sampleVisitor } from "../../../src/portfolio/demo.js";
import React, { useState, useRef, useEffect } from "react";
import styles from "./instructions.module.scss";
import regWrapper from "../../../src/assets/Register/regWrapper.webp";
import RegForm from "../Form/RegForm";
import BackButton from "../BackButton/BackButton";
import wheel from "../../../src/assets/Register/wheel.svg";
import Preloader from "../Preloader/Preloader";
import bullet from "../../../src/assets/Register/bullet.svg";
import regBackground from "../../../src/assets/Register/regBackground.webp";
import { Helmet } from "react-helmet-async";

export default function Instructions() {
  const [imagesLoaded] = useState(true);
  const [showPreloader] = useState(false);
  const [userState, setUserState] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const wheelRef = useRef(null);
  const mainContainerRef = useRef(null);


  function handleScroll(inp) {
    // const maxScrollTopValue = mainContainerRef.current.scrollTopMax;
    const maxScrollTopValue =
      mainContainerRef.current.scrollHeight -
      mainContainerRef.current.clientHeight;
    // const percentage = (mainContainerRef.current.scrollTop / maxScrollTopValue )*100;
    const percentage =
      (mainContainerRef.current.scrollTop / Math.max(1, maxScrollTopValue)) * 100;
    percentage > 100
      ? (wheelRef.current.style.top = "100%")
      : (wheelRef.current.style.top = `${percentage}%`);
    // console.log(percentage);
    // wheelRef.current.style.top = `${percentage}%`;
    // wheelElem.style.top = `${percentage}%`;
  }

  useEffect(() => {
    if (imagesLoaded) {
      const scrollContainer = mainContainerRef.current;
      scrollContainer.addEventListener("scroll", handleScroll);

      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, [imagesLoaded]);

  const handlewheelMouseDown = (e) => {
    e.preventDefault();

    document.addEventListener("mousemove", handlewheelDragMove);
    document.addEventListener("touchmove", handlewheelDragMove);

    document.addEventListener("mouseup", handlewheelDragEnd);
    document.addEventListener("touchend", handlewheelDragEnd);
  };

  const handlewheelDragMove = (e) => {
    const mainWrapperElement = mainContainerRef.current;
    const scrollBarContainer = document.querySelector(
      `.${styles.scrollBarContainer}`
    );

    const maxScrollTopValue =
      mainWrapperElement.scrollHeight - mainWrapperElement.clientHeight;

    const clientY = e.clientY || e.touches[0].clientY;

    const percentage =
      ((clientY - scrollBarContainer.offsetTop) /
        scrollBarContainer.clientHeight) *
      100;

    mainWrapperElement.scrollTop = (percentage / 100) * maxScrollTopValue;
  };

  const handlewheelDragEnd = (e) => {
    document.removeEventListener("mousemove", handlewheelDragMove);
    document.removeEventListener("mouseup", handlewheelDragEnd);
    document.removeEventListener("touchmove", handlewheelDragMove);
    document.removeEventListener("touchend", handlewheelDragEnd);
  };

  const handleTrackSnap = (e) => {
    const mainWrapperElement = mainContainerRef.current;
    const scrollBarContainer = document.querySelector(
      `.${styles.scrollBarContainer}`
    );
    const percentage =
      ((e.clientY - scrollBarContainer.offsetTop) /
        scrollBarContainer.clientHeight) *
      100;
    const maxScrollTopValue =
      mainWrapperElement.scrollHeight - mainWrapperElement.clientHeight;

    mainWrapperElement.scrollTo({
      // Smooth scroll to the percentage of the max scroll value
      top: (percentage / 100) * maxScrollTopValue,
      behavior: "smooth",
    });
  };

  const loginButton = () => { setUserState(true); setUserEmail(sampleVisitor.email); };

  return (
    <>
      <Helmet>
        <title>Registration | APOGEE 2025</title>
        <link rel="canonical" href="https://apogee2025.bits-apogee.org/registration" />
      </Helmet>
      {userState && userEmail ? (
        <RegForm email={userEmail} />
      ) : (
        <>
          {showPreloader && <Preloader />}
          <div
            className={styles.wrapper}
            ref={mainContainerRef}
            style={{
              background: `radial-gradient(40.9% 58.96% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.38) 100%), url(${regBackground})`,
              opacity: showPreloader ? 0 : 1,
              transition: "opacity 0.8s ease-in-out",
              backgroundSize: "cover",
            }}
          >
            <div
              className={styles.scrollBarContainer}
              onClick={handleTrackSnap}
            >
              <div className={styles.scrollBar}></div>
              <img
                draggable={false}
                onMouseDown={handlewheelMouseDown}
                onTouchStart={handlewheelMouseDown}
                id="wheel"
                src={wheel}
                alt="wheel"
                ref={wheelRef}
              />
            </div>
            <div
              className={styles.dummyWrapper}
              style={{
                background: `radial-gradient(40.9% 58.96% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.38) 100%), url(${regWrapper})`,
                boxShadow: "-12px -12px 15.34px 0px rgba(0, 0, 0, 0.32)",
              }}
            ></div>
            <div
              onScroll={handleScroll}
              className={styles.mainWrapper}
              style={{
                background: `radial-gradient(40.9% 58.96% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.38) 100%), url(${regWrapper})`,
                boxShadow: "12px 12px 15.34px 10px rgba(0, 0, 0, 0.42)",
              }}
            >
              <div className={styles.mobilebackContainer}>
                <BackButton />
              </div>
              <h2>REGISTRATION</h2>

              <div
                className={styles.instructionContainer}
                ref={mainContainerRef}
              >
                <div className={styles.heading}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.00138028 9.24916C0.0464493 7.5746 0.735987 6.10288 1.41878 4.62214C1.55399 4.3314 1.55851 3.90769 1.46161 3.59667C1.21824 2.8101 1.65991 2.32553 2.13539 1.87027C3.30493 0.74563 4.82602 0.418832 6.3426 0.121333C7.98311 -0.200958 9.56953 0.0987946 10.7323 1.26175C11.7238 2.25341 12.4968 3.49976 13.1953 4.73257C13.619 5.47858 13.7722 6.39812 13.9525 7.25906C14.268 8.76008 13.5221 9.95008 12.6252 11.0184C10.4506 13.6125 7.45578 14.0722 4.32123 14.0249C3.09761 14.0069 2.02723 13.4367 1.15064 12.6005C0.377701 11.8658 -0.0256633 10.5383 -0.000875372 9.25141L0.00138028 9.24916ZM7.33184 1.48938C6.35159 1.89055 5.29923 2.06184 4.60742 2.65459C2.69875 4.29083 1.6464 6.48151 1.32416 8.97194C1.0605 11.0071 2.37878 12.5938 4.40012 12.8079C6.72118 13.0535 8.87998 12.4563 10.7391 11.1468C12.2489 10.0831 13.0624 8.52569 12.65 6.54236C12.3007 4.85879 11.4219 3.46369 10.2613 2.26919C9.48614 1.47135 8.47886 0.98904 7.23947 1.0837C7.2913 1.30682 7.33184 1.49614 7.33184 1.48938Z"
                      fill="#3E2D10"
                    />
                    <path
                      d="M12.5973 7.07899C12.5973 10.1995 10.0677 12.7292 6.94714 12.7292C3.82662 12.7292 1.29694 10.1995 1.29694 7.07899C1.29694 3.95847 3.82662 1.42879 6.94714 1.42879C10.0677 1.42879 12.5973 3.95847 12.5973 7.07899Z"
                      fill="#3E2D10"
                    />
                    <path
                      d="M4.73902 9.54689L0.972219 7.20887L0.647495 10.586L2.33606 13.0539H7.79143L4.73902 9.54689Z"
                      fill="#3E2D10"
                    />
                    <path
                      d="M9.15527 0.714393L6.36264 0.909227L7.14198 2.85757L12.0778 3.89669L9.15527 0.714393Z"
                      fill="#3E2D10"
                    />
                    <path
                      d="M9.54494 8.57272L12.4675 5.6502L13.2468 8.57272L11.1686 11.755L9.54494 8.57272Z"
                      fill="#3E2D10"
                    />
                  </svg>
                  <h3>INSTRUCTIONS</h3>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.00138028 9.24916C0.0464493 7.5746 0.735987 6.10288 1.41878 4.62214C1.55399 4.3314 1.55851 3.90769 1.46161 3.59667C1.21824 2.8101 1.65991 2.32553 2.13539 1.87027C3.30493 0.74563 4.82602 0.418832 6.3426 0.121333C7.98311 -0.200958 9.56953 0.0987946 10.7323 1.26175C11.7238 2.25341 12.4968 3.49976 13.1953 4.73257C13.619 5.47858 13.7722 6.39812 13.9525 7.25906C14.268 8.76008 13.5221 9.95008 12.6252 11.0184C10.4506 13.6125 7.45578 14.0722 4.32123 14.0249C3.09761 14.0069 2.02723 13.4367 1.15064 12.6005C0.377701 11.8658 -0.0256633 10.5383 -0.000875372 9.25141L0.00138028 9.24916ZM7.33184 1.48938C6.35159 1.89055 5.29923 2.06184 4.60742 2.65459C2.69875 4.29083 1.6464 6.48151 1.32416 8.97194C1.0605 11.0071 2.37878 12.5938 4.40012 12.8079C6.72118 13.0535 8.87998 12.4563 10.7391 11.1468C12.2489 10.0831 13.0624 8.52569 12.65 6.54236C12.3007 4.85879 11.4219 3.46369 10.2613 2.26919C9.48614 1.47135 8.47886 0.98904 7.23947 1.0837C7.2913 1.30682 7.33184 1.49614 7.33184 1.48938Z"
                      fill="#3E2D10"
                    />
                    <path
                      d="M12.5973 7.07899C12.5973 10.1995 10.0677 12.7292 6.94714 12.7292C3.82662 12.7292 1.29694 10.1995 1.29694 7.07899C1.29694 3.95847 3.82662 1.42879 6.94714 1.42879C10.0677 1.42879 12.5973 3.95847 12.5973 7.07899Z"
                      fill="#3E2D10"
                    />
                    <path
                      d="M4.73902 9.54689L0.972219 7.20887L0.647495 10.586L2.33606 13.0539H7.79143L4.73902 9.54689Z"
                      fill="#3E2D10"
                    />
                    <path
                      d="M9.15527 0.714393L6.36264 0.909227L7.14198 2.85757L12.0778 3.89669L9.15527 0.714393Z"
                      fill="#3E2D10"
                    />
                    <path
                      d="M9.54494 8.57272L12.4675 5.6502L13.2468 8.57272L11.1686 11.755L9.54494 8.57272Z"
                      fill="#3E2D10"
                    />
                  </svg>
                </div>
                <div className={styles.content}>
                  <img src={bullet} alt="bullet" />
                  <p>
                    Explore the original registration design with a sample visitor.
                  </p>
                </div>

                <div className={styles.content}>
                  <img src={bullet} alt="bullet" />
                  <p>
                    Sample details are filled in. You can change them locally to try the form.
                  </p>
                </div>

                <div className={styles.content}>
                  <img src={bullet} alt="bullet" />
                  <p>
                    Choose sample interests, events and college details.
                  </p>
                </div>

                <div className={styles.content}>
                  <img src={bullet} alt="bullet" />
                  <p>
                    This is a historical portfolio demo. No registration or email is sent.
                  </p>
                </div>

                <div className={styles.content}>
                  <img src={bullet} alt="bullet" />
                  <p>
                    No payment is required or processed.
                  </p>
                </div>

                <div className={styles.content}>
                  <img src={bullet} alt="bullet" />
                  <p>
                    The demo resets when you reload or leave this page.
                  </p>
                </div>

                <button type="button" className={styles.glogin} onClick={loginButton}><p>CONTINUE AS SAMPLE VISITOR</p></button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
