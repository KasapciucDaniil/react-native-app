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
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})

export const AuthCard = ({navigation}) => {
  const goToRegister = () => {
    navigation.navigate('Register')
  } 

  const goToVideo = () => {
    navigation.navigate('Video')
    Alert.alert('You are signed in!')
  } 

  return (
    <View style={styles.container}>
      <View style={styles.auth}>
        <Text style={styles.title}>Login</Text>

        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ email: '', password: '' }}
          onSubmit={values => console.log(values)}
        >
        {({ handleChange,
            handleBlur,
            values,
            isValid,
            errors
          }) => (
          <>
            <Text>Email</Text>
            <TextInput 
                style={styles.input} 
                name="email"
                placeholder="Email Address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              {errors.email &&
              <Text style={{ fontSize: 10, color: 'red', marginBottom: 10}}>{errors.email}</Text>
              }

                <Text>Password</Text> 
                <TextInput 
                name="password"
                placeholder="Password"
                style={styles.input}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
                {errors.password &&
                <Text style={{ fontSize: 10, color: 'red',  marginBottom: 25 }}>{errors.password}</Text>
                }

            <View style={{width: '100%'}}>
                <View style={{marginRight:10}} >
                    <Button title="Sign In" disabled={!isValid} onPress={goToVideo}></Button>
                </View>
                <View style={{marginRight:10, marginTop: 10}} >
                    <Button title="Registration" color="green" onPress={goToRegister}></Button>
                </View>
            </View>
          </>
        )}
      </Formik>
    </View>
   </View> 
  )
}

AuthCard.navigationOptions = {
  headerTitle: 'Sign In'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  auth: {
    height: 375,
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
  }
})