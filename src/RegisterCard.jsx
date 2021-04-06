import React from 'react'
import { Formik } from 'formik'
import { 
   View, 
   Text, 
   TextInput, 
   StyleSheet, 
   Button, 
   Alert
} from 'react-native'
import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  username: yup 
    .string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Username is required'),
  fullname: yup 
    .string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Full name is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),

})

export const RegisterCard = ({navigation}) => {
  const goToAuth = () => {
    navigation.navigate('Auth')
    Alert.alert('Congratulations, you created an account!')
  } 

  return (
    <View style={styles.container}>
      <View style={styles.auth}>
        <Text style={styles.title}>Registration</Text>

        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ 
             email: '', 
             password: '', 
             username: '' ,
             fullname: '',
             confirmPassword: ''
           }}
          onSubmit={values => console.log(values)}
        >
        {({ handleChange,
            handleBlur,
            values,
            isValid,
            errors
          }) => (
          <>
          <View style={styles.validation}>
            <Text>UserName</Text>
            {errors.username &&
              <Text style={{ fontSize: 10, marginLeft: 100,color: 'red', marginBottom: 10}}>{errors.username}</Text>
              }
          </View>
          <TextInput 
              style={styles.input} 
              name="username"
              placeholder="UserName"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            /> 
            
            <View style={styles.validation}>
            <Text>E-mail</Text>
            {errors.email &&
              <Text style={{ fontSize: 10, marginLeft: 120,color: 'red', marginBottom: 10}}>{errors.email}</Text>
              }
          </View>
            <TextInput 
                style={styles.input} 
                name="email"
                placeholder="Email Address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />

            <View style={styles.validation}>
            <Text>Full Name</Text>
            {errors.fullname &&
              <Text style={{ fontSize: 10, marginLeft: 120,color: 'red', marginBottom: 10}}>{errors.fullname}</Text>
              }
          </View>
            <TextInput 
                style={styles.input} 
                name="fullname"
                placeholder="fullname"
                onChangeText={handleChange('fullname')}
                onBlur={handleBlur('fullname')}
                value={values.fullname}
              />

             <View style={styles.validation}>
                <Text>Password</Text>
                {errors.password &&
                  <Text style={{ fontSize: 10, marginLeft: 70,color: 'red', marginBottom: 10}}>{errors.password}</Text>
                  }
              </View>
              <TextInput 
                name="password"
                placeholder="Password"
                style={styles.input}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />

            <View style={styles.validation}>
                <Text>Confirm password</Text>
                {errors.confirmPassword &&
                  <Text style={{ fontSize: 10, color: 'red', marginBottom: 10, marginLeft: 15}}>{errors.confirmPassword}</Text>
                  }
              </View>
              <TextInput 
                name="confirmPassword"
                placeholder="Confirm Password"
                style={styles.input}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry
              />

            <View style={{width: '100%'}}>
                <View style={{marginRight:10, marginTop: 10}} >
                    <Button title="Registration" disabled={!isValid} color="purple"  onPress={goToAuth}></Button>
                </View>
            </View>
          </>
        )}
      </Formik>
    </View>
   </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  auth: {
    height: 575,
    width: '80%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: 3,
    paddingLeft: 10,
    borderColor: '#eee',
    borderRadius: 10
  },
  input: {
    width: '95%',
    padding: 7,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: 'black',
    borderRadius: 3,
    marginBottom: 10
  },
  buttons: {
   width: '97%',
  },
  email: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    marginBottom: 15
  },
  validation: {
    flexDirection: 'row'
  }
})