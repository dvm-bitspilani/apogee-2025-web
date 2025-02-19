import React, { useState, useEffect, useRef } from "react";
import styles from "./form.module.scss";
import regWrapper from "../../../src/assets/Register/regWrapper.png";
import regButton from "../../../src/assets/Register/regButton.png";
import RegistrationModal from "../RegistrationModal/RegistrationModal";
import BackButton from "../BackButton/BackButton";
import wheel from "../../../src/assets/Register/wheel.svg";
import regBackground from "../../../src/assets/Register/regBackground.png";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import axios from "axios";
import statesData from "./states.json";
import citiesData from "./states.json";
import { useCookies } from "react-cookie";

export default function RegForm({ email }) {
  const [interestOptions, setInterestOptions] = useState([""]);
  const [eventsOptions, setEventsOptions] = useState([""]);
  const [collegeOptions, setCollegeOptions] = useState([""]);
  const [stateOptions, setStateOptions] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cityOptions, setCityOptions] = useState([]);
  const [waitingResponse, setWaitingResponse] = useState(false);

  const [access_token, setAccess_token] = useState("");

  const [cookies, setCookie] = useCookies(["Access_Token", "user-auth"]);

  const wheelRef = useRef(null);
  const mainContainerRef = useRef(null);

  const [notification, setNotification] = useState({
    isOpen: false,
    message: "",
    type: "Success",
  });

  const initialValues = {
    name: "",
    email_id: email,
    phone: "",
    gender: "",
    interests: [],
    events: [],
    college_id: "",
    year: "",
    city: "",
    state: "",
    referral_code: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("*Name is required"),
    // email_id: Yup.string()
    //   .email("*Please enter a valid email")
    //   .required("*Please enter your email"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "*Phone number must be exactly 10 digits")
      .required("*Phone number is required"),
    gender: Yup.string().required("*Gender is required"),
    college_id: Yup.string().required("*College is required"),
    year: Yup.string().required("*Please select your year of study"),
    state: Yup.string().required("*State is required"),
    city: Yup.string().required("*City is required"),
  });

  function handleNumericInput(event) {
    // check for phone number input
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/[^0-9]/g, "");
    event.target.value = inputValue;
  }

  // const interestOptions = {
  //   data: [
  //     { id: 1, name: "Sports" },
  //     { id: 2, name: "Music" },
  //     { id: 3, name: "Art" },
  //     { id: 4, name: "Technology" },
  //     { id: 5, name: "Literature" },
  //   ],
  // };

  // const eventsOptions = {
  //   data: [
  //     { id: "workshop", name: "Workshop" },
  //     { id: "seminar", name: "Seminar" },
  //     { id: "concert", name: "Concert" },
  //     { id: "competition", name: "Competition" },
  //     { id: "webinar", name: "Webinar" },
  //   ],
  // };

  // const collegeOptions = {
  //   data: [
  //     { id: "college1", name: "College 1" },
  //     { id: "college2", name: "College 2" },
  //   ],
  // };

  // useEffect(() => {
  //   axios
  //   .get("https://bits-oasis.org/2024/main/registrations/get_college/")
  //   .then((response) => {
  //     setInterestOptions(response.data);
  //   })
  //   .catch((error) => console.error("Error fetching events:", error));
  // }, []);

  useEffect(() => {
    axios
      .get("https://merge.bits-apogee.org/2025/main/registrations/categories/")
      .then((response) => {
        // console.log("categories:",response.data.data);
        setInterestOptions(response.data.data);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://merge.bits-apogee.org/2025/main/registrations/events_details/"
      )
      .then((response) => {
        // console.log(response.data);
        setEventsOptions(response.data);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  useEffect(() => {
    axios
      .get("https://merge.bits-apogee.org/2025/main/registrations/get_college/")
      .then((response) => {
        // console.log(response.data);
        setCollegeOptions(response.data);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const genderOptions = [
    { value: "M", label: "MALE", label1: "Male" },
    { value: "F", label: "FEMALE", label1: "Female" },
    { value: "O", label: "OTHER", label1: "Other" },
  ];

  const yearOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ];

  useEffect(() => {
    const allStates = statesData.map((state) => ({
      value: state.name,
      label: state.name,
    }));
    setStateOptions(allStates);
  }, []);

  useEffect(() => {
    const selectedStateCities =
      citiesData
        .find((state) => state.name === selectedState)
        ?.cities.map((city) => ({
          value: city.name,
          label: city.name,
        })) || [];
    setCityOptions(selectedStateCities);
  }, [selectedState]);

  function handleScroll(inp) {
    // const maxScrollTopValue = mainContainerRef.current.scrollTopMax;
    const maxScrollTopValue =
      mainContainerRef.current.scrollHeight -
      mainContainerRef.current.clientHeight;
    // const percentage = (mainContainerRef.current.scrollTop / maxScrollTopValue )*100;
    const percentage =
      (mainContainerRef.current.scrollTop / maxScrollTopValue) * 100;
    percentage > 100
      ? (wheelRef.current.style.top = "100%")
      : (wheelRef.current.style.top = `${percentage}%`);
    // console.log(percentage);
    // wheelRef.current.style.top = `${percentage}%`;
    // wheelElem.style.top = `${percentage}%`;
  }

  useEffect(() => {
    mainContainerRef.current.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const calculateFontSize = () => {
    if (window.innerWidth > 2100) {
      return 41;
    } else if (window.innerWidth < 500) {
      return 20;
    } else if (window.innerWidth < 885) {
      return 24;
    } else {
      return 28;
    }
  };
  const fontsize = calculateFontSize();

  const calculateIndicatorSize = () => {
    if (window.innerWidth > 2100) {
      return 41;
    } else if (window.innerWidth < 600) {
      return 22;
    } else {
      return 28;
    }
  };
  const indicatorSize = calculateIndicatorSize();

  const findReferralplaceholder = () => {
    if (window.innerWidth < 600) {
      return "Enter code (optional)";
    } else {
      return "Enter referral code (optional)";
    }
  };
  const refferalplaceholder = findReferralplaceholder();

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      border: "none",
      borderBottom: "2px solid #483312",
      borderRadius: "0",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#483312",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#DDBE8A", // Transparent background for options menu
      maxHeight: "200px", // Optional: Limit the menu height
      overflow: "hidden", // Hide overflow
      scrollbarWidth: "none", // For Firefox: Disable scrollbar
      "::-webkit-scrollbar": {
        display: "none", // For Chrome, Safari, and Edge: Disable scrollbar
      },
      border: "3px solid #483312",
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "200px", // Restrict menu list height
      // overflow: "hidden", // Prevent scrollable overflow
      scrollbarWidth: "none", // For Firefox: Disable scrollbar
      "::-webkit-scrollbar": {
        display: "none", // For Chrome, Safari, and Edge: Disable scrollbar
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#473618" : "#DDBE8A", // Optional: Light blue background on hover
      color: state.isFocused ? "#DDBC80" : "#2B1B03", // Text color
      textAlign: "center",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: state.isFocused ? "#473618" : "#DDBE8A",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#734800", // Placeholder text color
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#734800", // Selected value text color
      fontWeight: "700",
      fontSize: fontsize,
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      width: "0",
      transform: "translateX(-30px)",
      "& svg": {
        width: indicatorSize,
        height: indicatorSize,
      },
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "#3E2D10",
      height: "20px",
      padding: "5px",
      "&:hover": {
        color: "#3E2D10",
      },
      cursor: "pointer",
    }),
  };

  const customStyles1 = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      border: "none",
      borderBottom: "2px solid #483312",
      borderRadius: "0",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#483312",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#DDBE8A", // Transparent background for options menu
      maxHeight: "200px", // Optional: Limit the menu height
      overflow: "hidden", // Hide overflow
      scrollbarWidth: "none", // For Firefox: Disable scrollbar
      "::-webkit-scrollbar": {
        display: "none", // For Chrome, Safari, and Edge: Disable scrollbar
      },
      border: "3px solid #483312",
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "200px", // Restrict menu list height
      // overflow: "hidden", // Prevent scrollable overflow
      scrollbarWidth: "none", // For Firefox: Disable scrollbar
      "::-webkit-scrollbar": {
        display: "none", // For Chrome, Safari, and Edge: Disable scrollbar
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#473618" : "#DDBE8A", // Optional: Light blue background on hover
      color: state.isFocused ? "#DDBC80" : "#2B1B03", // Text color
      textAlign: "center",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: state.isFocused ? "#473618" : "#DDBE8A",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#734800", // Placeholder text color
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "transparent", // Transparent background for selected options
      border: "2px solid #483312", // Optional: Add border around the selected tag
      borderRadius: "5px",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#734800", // Text color for selected options
      fontSize: fontsize,
      fontWeight: "700",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "#2B1B03", // Color for the remove icon
      "&:hover": {
        backgroundColor: "transparent", // No hover effect for remove icon
        color: "#483312", // Hover color for the remove icon
      },
      cursor: "pointer",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#734800", // Selected value text color
      fontWeight: "700",
      fontSize: fontsize,
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "#3E2D10",
      height: "20px",
      padding: "5px",
      "&:hover": {
        color: "#3E2D10",
      },
      cursor: "pointer",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      width: "0",
      transform: "translateX(-30px)",
      "& svg": {
        width: indicatorSize,
        height: indicatorSize,
      },
    }),
    clearIndicator: (provided) => ({
      ...provided,
      color: "#483312",
      "&:hover": {
        color: "#2B1B03",
      },
      cursor: "pointer",
      display: "none",
    }),
  };

  return (
    <div
      className={styles.wrapper}
      ref={mainContainerRef}
      style={{
        background: `radial-gradient(40.9% 58.96% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.38) 100%), url(${regBackground})`,
        backgroundSize: "cover",
      }}
    >
      <div className={styles.scrollBarContainer} onClick={handleTrackSnap}>
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
        className={styles.mainWrapper}
        style={{
          background: `url(${regWrapper})`,
          boxShadow: "12px 12px 15.34px 10px rgba(0, 0, 0, 0.42)",
        }}
      >
        <div className={styles.overflowWrapper}></div>

        <div className={styles.mobilebackContainer}>
          <BackButton />
        </div>
        <h2>REGISTRATION</h2>

        <div className={styles.formContainer}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              const reqData = {
                ...values,
                access_token: cookies["Access_token"],
              };
              // console.log("Form data", reqData);
              setWaitingResponse(true);
              axios
                .post(
                  "https://merge.bits-apogee.org/2025/main/registrations/register/",
                  reqData
                )
                .then((response) => {
                  setWaitingResponse(false);
                  // console.log("Response", response);
                  if (response.data.message === "User has been registered") {
                    // alert("Registration successful!");
                    // console.log(response.data.tokens.access);
                    setAccess_token(response.data.tokens.access);
                    setNotification({
                      isOpen: true,
                      message: "Registration Successful.",
                      type: "Success",
                    });
                    // window.location.href =
                    //   "https://merge.bits-apogee.org/2025/main/registrations/";
                  } else {
                    setNotification({
                      isOpen: true,
                      message: response.data.message || response.data.error,
                      type: "error",
                    });
                  }
                })
                .catch((error) => {
                  setWaitingResponse(false);
                  console.error("Error registering:", error);
                  setNotification({
                    isOpen: true,
                    message:
                      error.response.data.message ||
                      error.response.data.error ||
                      "Registration Failed.",
                    type: "error",
                  });
                })
                .finally(() => {
                  setSubmitting(false);
                  setWaitingResponse(false);
                });
            }}
          >
            {({ values, setFieldValue, isSubmitting }) => (
              <Form className={styles.form}>
                <div className={styles.input}>
                  <label htmlFor="name">Name</label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className={styles.inputField}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.input}>
                  <label htmlFor="email_id">Email ID</label>
                  <Field
                    type="email"
                    id="email_id"
                    name="email_id"
                    placeholder="Your Email"
                    // value={email_id}
                    disabled
                    className={styles.disabledInput}
                  />
                  {/* <ErrorMessage
                    name="email_id"
                    component="div"
                    className={styles.errorMessage}
                  /> */}
                </div>

                <div className={styles.input}>
                  <label htmlFor="phone">Phone Number</label>
                  <Field
                    type="text"
                    id="phone"
                    name="phone"
                    maxLength="10"
                    placeholder="Your Phone No."
                    onInput={(e) => handleNumericInput(e)}
                    className={styles.inputField}
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.input}>
                  <label htmlFor="gender">Gender</label>
                  <div className={styles.checkboxContainer}>
                    {genderOptions.map((option) => (
                      <div key={option.value} className={styles.checkboxItem}>
                        <div
                          className={`${styles.customCheckbox} ${
                            values.gender === option.value ? styles.checked : ""
                          }`}
                          onClick={() => {
                            setFieldValue("gender", option.value);
                          }}
                        ></div>
                        <label
                          className={styles.checkboxLabel}
                          htmlFor={`gender-${option.value}`}
                          onClick={() => {
                            setFieldValue("gender", option.value);
                          }}
                        >
                          {window.innerWidth > 1200
                            ? option.label
                            : option.label1}
                        </label>
                      </div>
                    ))}
                  </div>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.input}>
                  <label htmlFor="interests">Interests</label>
                  <Select
                    id="interests"
                    name="interests"
                    options={(Array.isArray(interestOptions)
                      ? interestOptions
                      : []
                    ).map((item) => ({
                      value: item.id,
                      label: item.name,
                    }))}
                    isMulti
                    value={(values.interests || []).map((interestId) => {
                      const interest = interestOptions.find(
                        (item) => item.id === interestId
                      );
                      return interest
                        ? { value: interest.id, label: interest.name }
                        : null;
                    })}
                    onChange={(selectedOptions) => {
                      const selectedIds = selectedOptions
                        ? selectedOptions.map((option) => option.value)
                        : [];
                      setFieldValue("interests", selectedIds);
                    }}
                    styles={customStyles1}
                    placeholder="Choose Interests"
                  />
                  <ErrorMessage
                    name="interests"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.input}>
                  <label htmlFor="events">Events</label>
                  <Select
                    id="events"
                    name="events"
                    options={(Array.isArray(eventsOptions)
                      ? eventsOptions
                      : []
                    ).map((item) => ({
                      value: item.id,
                      label: item.name,
                    }))}
                    isMulti
                    value={(values.events || []).map((eventId) => {
                      const event = eventsOptions.find(
                        (item) => item.id === eventId
                      );
                      return event
                        ? { value: event.id, label: event.name }
                        : null;
                    })}
                    onChange={(selectedOptions) => {
                      const selectedIds = selectedOptions
                        ? selectedOptions.map((option) => option.value)
                        : [];
                      setFieldValue("events", selectedIds);
                    }}
                    styles={customStyles1}
                    placeholder="Choose Events"
                  />
                  <ErrorMessage
                    name="events"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.input}>
                  <label htmlFor="college_id">College</label>
                  <Select
                    id="college_id"
                    name="college_id"
                    options={(Array.isArray(collegeOptions.data)
                      ? collegeOptions.data
                      : []
                    ).map((item) => ({
                      value: item.id,
                      label: item.name,
                    }))}
                    value={(Array.isArray(collegeOptions)
                      ? collegeOptions
                      : []
                    ).find((option) => option.value === values.college)}
                    onChange={(selectedOption) => {
                      setFieldValue(
                        "college_id",
                        selectedOption ? selectedOption.value : ""
                      );
                    }}
                    className={styles.collegeWrapper}
                    styles={customStyles}
                    placeholder="Choose Your College"
                  />
                  <ErrorMessage
                    name="college_id"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.input}>
                  <label htmlFor="year">Year of study</label>
                  <div className={styles.checkboxContainer}>
                    {yearOptions.map((option) => (
                      <div key={option.value} className={styles.checkboxItem}>
                        <div
                          className={`${styles.customCheckbox} ${
                            values.year === option.value ? styles.checked : ""
                          }`}
                          onClick={() => {
                            setFieldValue("year", option.value);
                          }}
                        ></div>
                        <label
                          className={styles.checkboxLabel}
                          htmlFor={`year-${option.value}`}
                          onClick={() => {
                            setFieldValue("year", option.value);
                          }}
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                  <ErrorMessage
                    name="year"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.input}>
                  <label htmlFor="state">State</label>
                  <Select
                    id="state"
                    name="state"
                    options={stateOptions}
                    value={stateOptions.find(
                      (option) => option.value === values.state
                    )}
                    onChange={(selectedOption) => {
                      setFieldValue(
                        "state",
                        selectedOption ? selectedOption.value : ""
                      );
                      setFieldValue("city", ""); // Clear the city when the state changes
                      setSelectedState(
                        selectedOption ? selectedOption.value : ""
                      );
                    }}
                    className={styles.stateWrapper}
                    styles={customStyles}
                    placeholder="Your State"
                  />
                  <ErrorMessage
                    name="state"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.input}>
                  <label htmlFor="city">City</label>
                  <Select
                    id="city"
                    name="city"
                    options={cityOptions}
                    value={cityOptions.find(
                      (option) => option.value === values.city
                    )}
                    onChange={(selectedOption) => {
                      setFieldValue(
                        "city",
                        selectedOption ? selectedOption.value : ""
                      );
                    }}
                    isDisabled={!selectedState} // Disable city selection if no state is selected
                    className={styles.cityWrapper}
                    styles={customStyles}
                    placeholder={
                      selectedState ? "Your City" : "Select a State first"
                    }
                  />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.input}>
                  <label htmlFor="referral_code">Referral Code</label>
                  <Field
                    type="text"
                    id="referral_code"
                    name="referral_code"
                    placeholder={refferalplaceholder}
                    className={styles.inputField}
                  />
                </div>

                <button
                  className={styles.regButton}
                  style={{ background: `url(${regButton})` }}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {waitingResponse ? (
                    <div className={styles.loadingWheel} />
                  ) : (
                    "Register"
                  )}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <RegistrationModal
        message={notification.message}
        isOpen={notification.isOpen}
        onClose={() => setNotification({ ...notification, isOpen: false })}
        type={notification.type}
        handleClick={() => {
          window.location.href = `https://merge.bits-apogee.org/2025/main/registrations?token=${access_token}`;
        }}
      />
    </div>
  );
}
