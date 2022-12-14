import React, { useState } from "react";
import styles from "./Resetpassword.module.css";
import logo from "../Images/Engagebay_Logo.png";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useUserAuth } from "../../Context/userAuthContext";
import { useNavigate } from "react-router-dom";





const Resetpassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { resetPassword } = useUserAuth();
  const handleSubmit = async () => {
    setError("");
    try {
      await resetPassword(email);
      alert("password sent");
    } catch (err) {
      setError(err.message);
    }
  };

  
  const navigate = useNavigate()

  const handlesignin =()=>{
    navigate('/login')
  }
  const handlesignup =()=>{
    navigate('/signup')
  }
  const home = ()=>{
    navigate('/')
  }
  return (
    <div className={styles.main_Container}>
      <div className={styles.reset_Container}>
        <div className={styles.main_Content}>
          <div className={styles.logo}>
            <img onClick={home} src={logo} alt="logo" width={250} />
          </div>

          <p className={styles.main_content_p}>
            Reset Password
          </p>
          <br />
          <br />
          {error && (
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
          )}
          <VStack>
            <FormControl isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                type="email"
                size="lg"
                focusBorderColor="blue.00"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
          </VStack>
          <Button
            colorScheme="red"
            width="100%"
            size="lg"
            mt={2}
            onClick={handleSubmit}
          >
            Reset Password
          </Button>
          <div>
            <p className={styles.container_acc}>
              Already have an account ?{" "}
              <span onClick={handlesignin} style={{ cursor: "pointer" }}>Sign In</span>
            </p>
            <p className={styles.container_dont_acc}>
              {" "}
              Don't Have Any Account?{" "}
              <span onClick={handlesignup} style={{ cursor: "pointer" }}>Sign Up</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.img_Container}>
        <div className={styles.row_desc}>
          <div className={styles.desc_avatar}>
            <div
            className={styles.container_avatar_back}
              style={{
                
              }}
            >
              <div className={styles.container_img_back}
              >
                <img
                  src="https://cdn5.engagebay.com/img/testimonials/leonard.jpeg"
                  alt="avatar"
                  className={styles.container_avatar_style}
                />
              </div>
            </div>
          </div>
          <div className={styles.desc_desc}>
            <p className={styles.desc}>
              {" "}
              I was using ActiveCampaign but the costs were adding up quite
              quickly. I tried other platforms but the automation sequence
              offered by ActiveCampaign is not easy to find until I got
              Engagebay.
            </p>
            <p className={styles.writer}>
              - Leonardo W, Founder, Wolff Consultoria
            </p>
          </div>
        </div>
        <div className={styles.reset_img}></div>
      </div>
    </div>
  );
};

export default Resetpassword;
