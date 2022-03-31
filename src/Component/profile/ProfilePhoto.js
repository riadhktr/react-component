import React from "react";
import image from './Picture.jpg';
const MyPicture = () => {

    /* create an object myStyle styling information */
    const myStyle = {
    width:"150px",
    height:"150px",
    marginTop:"20px" ,
    marginLeft: "40px",
    border: "3px solid black",
    borderRadius: "100px"
      };
    return <img style={myStyle} src={image} alt="ProfilePic" />;
};
export default MyPicture;