// import React, { useState } from 'react';

// // save user data
// import { firestore } from 'firebase/app';
// import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Container } from '@mui/material';

// const UserForm = () => {
//     const [businessName, setBusinessName] = useState('');
//     const [businessType, setBusinessType] = useState('');
//     const [email, setEmail] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [ghanaCard, setGhanaCard] = useState('');
//     const [registrationNumber, setRegistrationNumber] = useState('');
//     const [tinNumber, setTinNumber] = useState('');
//     const [website, setWebsite] = useState('');
    

//     const handleBusinessNameChange = (event) => {
//         setBusinessName(event.target.value);
//     };
    
//     const handleBusinessTypeChange = (event) => {
//         setBusinessType(event.target.value);
//     };

//     const handleEmailChange = (event) => {
//         setEmail(event.target.value);
//     };

//     const handlePhoneNumberChange = (event) => {
//         setPhoneNumber(event.target.value);
//     };

//     const handleGhanaCardChange = (event) => {
//         setGhanaCard(event.target.value);
//     };

//     const handleRegistrationNumberChange = (event) => {
//     setRegistrationNumber(event.target.value);
//     };

//     const handleTinNumberChange = (event) => {
//     setTinNumber(event.target.value);
//     };

//     const handleWebsiteChange = (event) => {
//     setWebsite(event.target.value);
//     };
    
//     // const handleSubmit = (event) => {
//     //     event.preventDefault();
//     // };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
      
//         try {
//           // Save the compliance data to Firestore
//           await firestore().collection('ComplianceData').add({
//             uid: firestore().doc(`users/${user.uid}`),
//             businessName,
//             businessType,
//             email,
//             phoneNumber,
//             ghanaCard,
//             registrationNumber,
//             tinNumber,
//             website,
//           });
      
//           // Redirect to the dashboard or another page
//           // You can use your preferred routing method here
//           history.push('/dashboard');
//         } catch (error) {
//           console.error(error);
//         }
//       };

//     return (
//     <Container maxWidth="sm">
//         <h2>Sign Up Process (1/3)</h2>
//         <form onSubmit={handleSubmit}>
//             <TextField
//                 label="Business Name"
//                 value={businessName}
//                 onChange={handleBusinessNameChange}
//                 required
//                 fullWidth
//                 margin="normal"
//                 />
                
//             <FormControl required fullWidth margin="normal">
//                 <InputLabel>Type of Business</InputLabel>
//                 <Select value={businessType} onChange={handleBusinessTypeChange}>
//                     <MenuItem value="Agriculture">Agriculture</MenuItem>
//                     <MenuItem value="Automobile">Automobile</MenuItem>
//                     <MenuItem value="Healthcare">Banking & Finance</MenuItem>
//                     <MenuItem value="Healthcare">Commerce/Trading</MenuItem>
//                     <MenuItem value="Healthcare">Construction</MenuItem>
//                     <MenuItem value="Healthcare">Education</MenuItem>
//                     <MenuItem value="Healthcare">Entertainment</MenuItem>
//                     <MenuItem value="Healthcare">Estate/Housing</MenuItem>
//                     <MenuItem value="Healthcare">Finance</MenuItem>
//                     <MenuItem value="Healthcare">Food Industry</MenuItem>
//                     <MenuItem value="Healthcare">Health Care</MenuItem>
//                     <MenuItem value="Healthcare">Hospitality</MenuItem>
//                     <MenuItem value="Healthcare">Insurance</MenuItem>
//                     <MenuItem value="Healthcare">Manufacturing</MenuItem>
//                     <MenuItem value="Healthcare">Media</MenuItem>
//                     <MenuItem value="Healthcare">Mining/Quarry</MenuItem>
//                     <MenuItem value="Healthcare">Oil & Gas</MenuItem>
//                     <MenuItem value="Healthcare">Refinery of Minerals</MenuItem>
//                     <MenuItem value="Healthcare">Sand Winning</MenuItem>
//                     <MenuItem value="Healthcare">Security Industry</MenuItem>
//                     <MenuItem value="Healthcare">Securities/Brokers</MenuItem>
//                     <MenuItem value="Healthcare">Shipping & Port</MenuItem>
//                     <MenuItem value="Healthcare">Technology</MenuItem>
//                     <MenuItem value="Healthcare">Telecom/ICT</MenuItem>
//                     <MenuItem value="Travel">Travel</MenuItem>
//                     <MenuItem value="Healthcare">Transport/Aerospace</MenuItem>                      
//                     <MenuItem value="Healthcare">Utilities</MenuItem>       
//                     <MenuItem value="Healthcare">Other</MenuItem>
//                 </Select>
//             </FormControl>
//                 <TextField
//                     label="Email"
//                     value={email}
//                     onChange={handleEmailChange}
//                     required
//                     fullWidth
//                     margin="normal"
//                 />    
//                 <TextField
//                     label="Phone Number"
//                     value={phoneNumber}
//                     onChange={handlePhoneNumberChange}
//                     required
//                     fullWidth
//                     margin="normal"
//                 />
                
//                 <TextField
//                     label="Ghana Card"
//                     value={ghanaCard}
//                     onChange={handleGhanaCardChange}
//                     required
//                     fullWidth
//                     margin="normal"
//                 />

//                 <TextField
//                     label="Registration No."
//                     value={registrationNumber}
//                     onChange={handleRegistrationNumberChange}
//                     fullWidth   
//                     margin="normal"
//                 />

//                 <TextField
//                     label="Tin No."
//                     value={tinNumber}
//                     onChange={handleTinNumberChange}
//                     fullWidth       
//                     margin="normal"
//                 />
                
//                 <TextField
//                     label="Website"
//                     value={website}
//                     onChange={handleWebsiteChange}
//                     fullWidth
//                     margin="normal"
//                 />

//                 <Button type="submit" variant="contained" color="primary" fullWidth size="large" margin="">
//                     Submit
//                 </Button>
//         </form>
//     </Container>
//   );
// };

// export default UserForm;



// import { useHistory } from 'react-router-dom';


// import React, { useState } from 'react';
// import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Container } from '@mui/material';
// import { firestore } from 'firebase/app'; // Import Firebase Firestore

// const UserForm = ({ history }) => {
  
//   const [businessName, setBusinessName] = useState('');
//   const [businessType, setBusinessType] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [ghanaCard, setGhanaCard] = useState('');
//   const [registrationNumber, setRegistrationNumber] = useState('');
//   const [tinNumber, setTinNumber] = useState('');
//   const [website, setWebsite] = useState('');

//   const handleBusinessNameChange = (event) => {
//     setBusinessName(event.target.value);
//   };

//   const handleBusinessTypeChange = (event) => {
//     setBusinessType(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePhoneNumberChange = (event) => {
//     setPhoneNumber(event.target.value);
//   };

//   const handleGhanaCardChange = (event) => {
//     setGhanaCard(event.target.value);
//   };

//   const handleRegistrationNumberChange = (event) => {
//     setRegistrationNumber(event.target.value);
//   };

//   const handleTinNumberChange = (event) => {
//     setTinNumber(event.target.value);
//   };

//   const handleWebsiteChange = (event) => {
//     setWebsite(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Save the compliance data to Firestore
//       await firestore().collection('ComplianceData').add({
//         uid: firestore().doc(`users/${user.uid}`),
//         businessName,
//         businessType,
//         email,
//         phoneNumber,
//         ghanaCard,
//         registrationNumber,
//         tinNumber,
//         website,
//       });

//       // Redirect to the dashboard or another page
//       // You can use your preferred routing method here
//       history.push('/dashboard');

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <h2>Sign Up Process (1/3)</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Form fields */}
//         <Button type="submit" variant="contained" color="primary" fullWidth size="large" margin="">
//           Submit
//         </Button>
//       </form>
//     </Container>
//   );
// };

// const { history } = props;
// export default UserForm;



// import React, { useState } from 'react';
// import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Container } from '@mui/material';
// import { useHistory } from 'react-router-dom'; // Import useHistory hook

// import { firestore } from 'firebase/app'; // Import Firebase Firestore

// const UserForm = () => {
//   const history = useHistory(); // Get the history object

//   const [businessName, setBusinessName] = useState('');
//   const [businessType, setBusinessType] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [ghanaCard, setGhanaCard] = useState('');
//   const [registrationNumber, setRegistrationNumber] = useState('');
//   const [tinNumber, setTinNumber] = useState('');
//   const [website, setWebsite] = useState('');

//   const handleBusinessNameChange = (event) => {
//     setBusinessName(event.target.value);
//   };

//   const handleBusinessTypeChange = (event) => {
//     setBusinessType(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePhoneNumberChange = (event) => {
//     setPhoneNumber(event.target.value);
//   };

//   const handleGhanaCardChange = (event) => {
//     setGhanaCard(event.target.value);
//   };

//   const handleRegistrationNumberChange = (event) => {
//     setRegistrationNumber(event.target.value);
//   };

//   const handleTinNumberChange = (event) => {
//     setTinNumber(event.target.value);
//   };

//   const handleWebsiteChange = (event) => {
//     setWebsite(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Save the compliance data to Firestore
//       await firestore().collection('ComplianceData').add({
//         uid: firestore().doc(`users/${user.uid}`),
//         businessName,
//         businessType,
//         email,
//         phoneNumber,
//         ghanaCard,
//         registrationNumber,
//         tinNumber,
//         website,
//       });

//       // Redirect to the dashboard or another page
//       // You can use your preferred routing method here
//       history.push('/dashboard');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <h2>Sign Up Process (1/3)</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Rest of the form */}
//       </form>
//     </Container>
//   );
// };

// export default UserForm;




// import React, { useState } from 'react';
// import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Container } from '@mui/material';

// import { useNavigate } from 'react-router-dom';
// import { firestore } from 'firebase/app';

// import { useAuthContext } from '../../auth/useAuthContext'; // Import useAuthContext hook or the relevant authentication functions


// const UserForm = () => {
//   const navigate = useNavigate(); // Get the navigate function

//   const [businessName, setBusinessName] = useState('');
//   const [businessType, setBusinessType] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [ghanaCard, setGhanaCard] = useState('');
//   const [registrationNumber, setRegistrationNumber] = useState('');
//   const [tinNumber, setTinNumber] = useState('');
//   const [website, setWebsite] = useState('');

//   const handleBusinessNameChange = (event) => {
//     setBusinessName(event.target.value);
//   };

//   const handleBusinessTypeChange = (event) => {
//     setBusinessType(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePhoneNumberChange = (event) => {
//     setPhoneNumber(event.target.value);
//   };

//   const handleGhanaCardChange = (event) => {
//     setGhanaCard(event.target.value);
//   };

//   const handleRegistrationNumberChange = (event) => {
//     setRegistrationNumber(event.target.value);
//   };

//   const handleTinNumberChange = (event) => {
//     setTinNumber(event.target.value);
//   };

//   const handleWebsiteChange = (event) => {
//     setWebsite(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Save the compliance data to Firestore
//       await firestore().collection('ComplianceData').add({
//         uid: firestore().doc(`users/${user.uid}`),
//         businessName,
//         businessType,
//         email,
//         phoneNumber,
//         ghanaCard,
//         registrationNumber,
//         tinNumber,
//         website,
//       });

//       // Redirect to the dashboard or another page
//       // You can use the navigate function here
//       navigate('/dashboard');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <h2>Sign Up Process (1/3)</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Rest of the form */}
//       </form>
//     </Container>
//   );
// };

// export default UserForm;






// import {
//     TextField,
//     Button,
//     FormControl,
//     InputLabel,
//     Select,
//     MenuItem,
//     Container,
//   } from '@mui/material';

// import { getFirestore, doc } from 'firebase/firestore';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';



// const UserForm = () => {
//     const [userId, setUserId] = useState(null);
//     const auth = getAuth();
  
//     useEffect(() => {
//       const unsubscribe = onAuthStateChanged(auth, (user) => {
//         if (user) {
//           // User is signed in
//           setUserId(user.uid);
//         } else {
//           // User is signed out
//           setUserId(null);
//         }
//       });
  
//       return () => unsubscribe();
//     }, [auth]);

//   const [businessName, setBusinessName] = useState('');
//   const [businessType, setBusinessType] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [ghanaCard, setGhanaCard] = useState('');
//   const [registrationNumber, setRegistrationNumber] = useState('');
//   const [tinNumber, setTinNumber] = useState('');
//   const [website, setWebsite] = useState('');

//   const navigate = useNavigate();

//   const handleBusinessNameChange = (event) => {
//     setBusinessName(event.target.value);
//   };

//   const handleBusinessTypeChange = (event) => {
//     setBusinessType(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePhoneNumberChange = (event) => {
//     setPhoneNumber(event.target.value);
//   };

//   const handleGhanaCardChange = (event) => {
//     setGhanaCard(event.target.value);
//   };

//   const handleRegistrationNumberChange = (event) => {
//     setRegistrationNumber(event.target.value);
//   };

//   const handleTinNumberChange = (event) => {
//     setTinNumber(event.target.value);
//   };

//   const handleWebsiteChange = (event) => {
//     setWebsite(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Save the compliance data to Firestore
//       const firestore = getFirestore();
//       await firestore().collection('ComplianceData').add({
//         uid: userId,
//         businessName,
//         businessType,
//         email,
//         phoneNumber,
//         ghanaCard,
//         registrationNumber,
//         tinNumber,
//         website,
//       });

//       // Redirect to the dashboard or another page
//       // You can use the navigate function here
//       navigate('/dashboard');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <h2>Sign Up Process (1/3)</h2>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Business Name"
//           value={businessName}
//           onChange={handleBusinessNameChange}
//           required
//           fullWidth
//           margin="normal"
//         />


//         <FormControl required fullWidth margin="normal">
//                  <InputLabel>Type of Business</InputLabel>
//                  <Select value={businessType} onChange={handleBusinessTypeChange}>
//                      <MenuItem value="Agriculture">Agriculture</MenuItem>
//                      <MenuItem value="Automobile">Automobile</MenuItem>
//                      <MenuItem value="Healthcare">Banking & Finance</MenuItem>
//                      <MenuItem value="Healthcare">Commerce/Trading</MenuItem>
//                      <MenuItem value="Healthcare">Construction</MenuItem>
//                      <MenuItem value="Healthcare">Education</MenuItem>
//                      <MenuItem value="Healthcare">Entertainment</MenuItem>
//                      <MenuItem value="Healthcare">Estate/Housing</MenuItem>
//                      <MenuItem value="Healthcare">Finance</MenuItem>
//                      <MenuItem value="Healthcare">Food Industry</MenuItem>
//                      <MenuItem value="Healthcare">Health Care</MenuItem>
//                      <MenuItem value="Healthcare">Hospitality</MenuItem>
//                      <MenuItem value="Healthcare">Insurance</MenuItem>
//                      <MenuItem value="Healthcare">Manufacturing</MenuItem>
//                      <MenuItem value="Healthcare">Media</MenuItem>
//                      <MenuItem value="Healthcare">Mining/Quarry</MenuItem>
//                      <MenuItem value="Healthcare">Oil & Gas</MenuItem>
//                      <MenuItem value="Healthcare">Refinery of Minerals</MenuItem>
//                      <MenuItem value="Healthcare">Sand Winning</MenuItem>
//                      <MenuItem value="Healthcare">Security Industry</MenuItem>
//                      <MenuItem value="Healthcare">Securities/Brokers</MenuItem>
//                      <MenuItem value="Healthcare">Shipping & Port</MenuItem>
//                      <MenuItem value="Healthcare">Technology</MenuItem>
//                      <MenuItem value="Healthcare">Telecom/ICT</MenuItem>
//                      <MenuItem value="Travel">Travel</MenuItem>
//                      <MenuItem value="Healthcare">Transport/Aerospace</MenuItem>                      
//                      <MenuItem value="Healthcare">Utilities</MenuItem>       
//                      <MenuItem value="Healthcare">Other</MenuItem>
//                  </Select>
//              </FormControl>
//                  <TextField
//                     label="Email"
//                     value={email}
//                     onChange={handleEmailChange}
//                     required
//                     fullWidth
//                     margin="normal"
//                 />    
//                 <TextField
//                     label="Phone Number"
//                     value={phoneNumber}
//                     onChange={handlePhoneNumberChange}
//                     required
//                     fullWidth
//                     margin="normal"
//                 />
                
//                 <TextField
//                     label="Ghana Card"
//                     value={ghanaCard}
//                     onChange={handleGhanaCardChange}
//                     required
//                     fullWidth
//                     margin="normal"
//                 />

//                 <TextField
//                     label="Registration No."
//                     value={registrationNumber}
//                     onChange={handleRegistrationNumberChange}
//                     fullWidth   
//                     margin="normal"
//                 />

//                 <TextField
//                     label="Tin No."
//                     value={tinNumber}
//                     onChange={handleTinNumberChange}
//                     fullWidth       
//                     margin="normal"
//                 />
                
//                 <TextField
//                     label="Website"
//                     value={website}
//                     onChange={handleWebsiteChange}
//                     fullWidth
//                     margin="normal"
//                 />
// {/* 
//                 <Button type="submit" variant="contained" color="primary" fullWidth size="large" margin="">
//                     Submit
//                 </Button> */}

//         {/* <FormControl required fullWidth margin="normal">
//           <InputLabel>Type of Business</InputLabel>
//           <Select value={businessType} onChange={handleBusinessTypeChange}>
            
//           </Select>
//         </FormControl> */}

        
        
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           fullWidth
//           size="large"
//           margin=""
//         >
//           Submit
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default UserForm;






import {
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Container,
  } from '@mui/material';
  
  import { useState, useEffect } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
  import { getFirestore, collection, addDoc } from 'firebase/firestore';
  
  const UserForm = () => {
    const [userId, setUserId] = useState(null);
    const auth = getAuth();
  
    // useEffect(() => {
    //   const unsubscribe = onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       // User is signed in
    //       setUserId(user.uid);
    //     } else {
    //       // User is signed out
    //       setUserId(null);
    //     }
    //   });
  
    //   return () => unsubscribe();
    // }, [auth]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user && !userId) {
            // User is signed in and userId is null (user was previously signed out)
            setUserId(user.uid);
          }
        });
    
        return () => unsubscribe();
      }, [auth, userId]);
  
    const [businessName, setBusinessName] = useState('');
    const [businessType, setBusinessType] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [ghanaCard, setGhanaCard] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [tinNumber, setTinNumber] = useState('');
    const [website, setWebsite] = useState('');
  
    const navigate = useNavigate();
  
    const handleBusinessNameChange = (event) => {
      setBusinessName(event.target.value);
    };
  
    const handleBusinessTypeChange = (event) => {
      setBusinessType(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePhoneNumberChange = (event) => {
      setPhoneNumber(event.target.value);
    };
  
    const handleGhanaCardChange = (event) => {
      setGhanaCard(event.target.value);
    };
  
    const handleRegistrationNumberChange = (event) => {
      setRegistrationNumber(event.target.value);
    };
  
    const handleTinNumberChange = (event) => {
      setTinNumber(event.target.value);
    };
  
    const handleWebsiteChange = (event) => {
      setWebsite(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        // Save the compliance data to Firestore
        const firestore = getFirestore();
        await addDoc(collection(firestore, 'ComplianceData'), {
          uid: userId,
          businessName,
          businessType,
          email,
          phoneNumber,
          ghanaCard,
          registrationNumber,
          tinNumber,
          website,
        });
  
        // Redirect to the dashboard or another page
        navigate('/dashboard');
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <Container maxWidth="sm">
        <h2>Sign Up Process (1/3)</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Business Name"
            value={businessName}
            onChange={handleBusinessNameChange}
            required
            fullWidth
            margin="normal"
          />
  
          <FormControl required fullWidth margin="normal">
            <InputLabel>Type of Business</InputLabel>
            <Select value={businessType} onChange={handleBusinessTypeChange}>
                        <MenuItem value="Agriculture">Agriculture</MenuItem>
                     <MenuItem value="Automobile">Automobile</MenuItem>
                     <MenuItem value="Healthcare">Banking & Finance</MenuItem>
                     <MenuItem value="Healthcare">Commerce/Trading</MenuItem>
                     <MenuItem value="Healthcare">Construction</MenuItem>
                     <MenuItem value="Healthcare">Education</MenuItem>
                     <MenuItem value="Healthcare">Entertainment</MenuItem>
                     <MenuItem value="Healthcare">Estate/Housing</MenuItem>
                     <MenuItem value="Healthcare">Finance</MenuItem>
                     <MenuItem value="Healthcare">Food Industry</MenuItem>
                     <MenuItem value="Healthcare">Health Care</MenuItem>
                     <MenuItem value="Healthcare">Hospitality</MenuItem>
                     <MenuItem value="Healthcare">Insurance</MenuItem>
                     <MenuItem value="Healthcare">Manufacturing</MenuItem>
                     <MenuItem value="Healthcare">Media</MenuItem>
                     <MenuItem value="Healthcare">Mining/Quarry</MenuItem>
                     <MenuItem value="Healthcare">Oil & Gas</MenuItem>
                     <MenuItem value="Healthcare">Refinery of Minerals</MenuItem>
                     <MenuItem value="Healthcare">Sand Winning</MenuItem>
                     <MenuItem value="Healthcare">Security Industry</MenuItem>
                     <MenuItem value="Healthcare">Securities/Brokers</MenuItem>
                     <MenuItem value="Healthcare">Shipping & Port</MenuItem>
                     <MenuItem value="Healthcare">Technology</MenuItem>
                     <MenuItem value="Healthcare">Telecom/ICT</MenuItem>
                     <MenuItem value="Travel">Travel</MenuItem>
                     <MenuItem value="Healthcare">Transport/Aerospace</MenuItem>                      
                     <MenuItem value="Healthcare">Utilities</MenuItem>       
                     <MenuItem value="Healthcare">Other</MenuItem>
            </Select>
          </FormControl>
  
          <TextField
            label="Email"
            value={email}
            onChange={handleEmailChange}
            required
            fullWidth
            margin="normal"
          />
  
                <TextField
                    label="Phone Number"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    required
                    fullWidth
                    margin="normal"
                />
                
                <TextField
                    label="Ghana Card"
                    value={ghanaCard}
                    onChange={handleGhanaCardChange}
                    required
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Registration No."
                    value={registrationNumber}
                    onChange={handleRegistrationNumberChange}
                    fullWidth   
                    margin="normal"
                />

                <TextField
                    label="Tin No."
                    value={tinNumber}
                    onChange={handleTinNumberChange}
                    fullWidth       
                    margin="normal"
                />
                
                <TextField
                    label="Website"
                    value={website}
                    onChange={handleWebsiteChange}
                    fullWidth
                    margin="normal"
                />
  
          <Button type="submit" variant="contained" color="primary" fullWidth size="large" margin="">
            Submit
          </Button>
        </form>
      </Container>
    );
  };
  
  export default UserForm;
  
