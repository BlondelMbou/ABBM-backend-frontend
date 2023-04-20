import { Modal, useMantineTheme } from "@mantine/core";
import React, { useState } from "react";
import axios from "axios";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    worksAt: "",
    country: "",
    livesin: "",
    profilePicture: "null",
    coverPicture: "null",
  });
  const [file, setfile] = useState(null);
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setUser({ ...user, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new form data object and append the user data and profile picture
    const body = new body();
    body.append("firstname", user.firstname);
    body.append("lastname", user.lastname);
    body.append("worksAt", user.worksAt);
    body.append("livesin", user.email);
    body.append("country", user.country);
    body.append("profilePicture", file);
    body.append("coverPicture", file);
    console.log('suicess')
    // ${user.id
    axios
      .put(`/users/${user.id}`, body)
      console.log('suicess')
      .then((response) => {
        setMessage("User updated successfully!");
      })
      .catch((error) => {
        console.log(error);
        setMessage("Failed to update user.");
      });
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm" onSubmit={handleSubmit}>
        <h3>Your info</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            name="FirstName"
            placeholder="First Name"
            value={user.name}
            onChange={handleInputChange}
          />

          <input
            type="text"
            className="infoInput"
            name="LastName"
            placeholder="Last Name"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="worksAT"
            placeholder="Works at"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="livesIN"
            placeholder="LIves in"
            value={user.name}
            onChange={handleInputChange}
          />

          <input
            type="text"
            className="infoInput"
            name="Country"
            placeholder="Country"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="RelationShip Status"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          Profile Image
          <input type="file" name="profileImg" onChange={handleInputChange} />
          Cover Image
          <input type="file" name="coverImg" onChange={handleInputChange} />
        </div>

        <button className="button infoButton" onClick={ProfileModal}>Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
