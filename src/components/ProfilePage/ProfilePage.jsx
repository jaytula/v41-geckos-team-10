import { useState } from "react";
import ProfileImageUpload from "./Profile Form Inputs/ProfileImageUpload/ProfileImageUpload";
import ProfileLocationSelect from "./Profile Form Inputs/ProfileLocationSelect/ProfileLocationSelect";
import ProfileResumeUpload from "./Profile Form Inputs/ProfileResumeUpload/ProfileResumeUpload";
import ProfileTextInput from "./Profile Form Inputs/ProfileTextInput/ProfileTextInput";
import ProfilePageButton from "./ProfilePageButton";
import "./ProfilePage.css";
import { useSelector } from "react-redux";
import IsLoggedIn from "../IsLoggedIn";

//https://www.freecodecamp.org/news/pass-data-between-components-in-react/
const ProfilePage = () => {
  const user = useSelector((state) => state.user.value);
  const wAG = useSelector((state) => state.profile.value.weeklyAppGoal);

  const [firstName, setFirstName] = useState("Pat");
  const [lastName, setLastName] = useState("d'User");
  const [email, setEmail] = useState("pat@gmail.com");
  const [weeklyAppGoal, setWeeklyAppGoal] = useState(wAG);


  if (user.isLoggedIn) {
    return (
      <div className="profile-page">
        <div className="profile-page--div">
          <div className="profile-page__profile">
            <div className="profile-page_name">
              <p>{`Name: ${firstName} ${lastName}` }</p>
            </div>
            <div className="profile-page_email">
              <p>{`Email Address: ${email}` }</p>
            </div>
            <div className="profile-page_email">
              <p>{`Current Weekly Application Goal: ${weeklyAppGoal}` }</p>
            </div>
          </div>
          <form className="profile-page__form">
            <div className="profile-page__name-inputs">
              <ProfileTextInput name="first-name" />
              <ProfileTextInput name="last-name" />
            </div>
            <ProfileTextInput name="email" type="email" />
            <ProfileTextInput 
              name="weekly-goal" 
            />
            <ProfileLocationSelect />
            <ProfileImageUpload />
            <ProfileTextInput name="change-password" type="password" />
            <ProfileResumeUpload />
            <div className="profile-page__button-group">
              <ProfilePageButton buttonText="Cancel" />
              <ProfilePageButton buttonText="Save" />
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return <IsLoggedIn />;
  }
};

export default ProfilePage;
