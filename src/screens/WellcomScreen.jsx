import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import ScreenWrapper from '../components/screenWrapper';
import { colors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '../firebase/config';

// Somewhere in your code

/*GoogleSignin.configure({
  webClientId: '578717810437-3neh029tmccgq6j3c6q9ivnnl0l4hofr.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  
});*/


export default function WelcomScreen() {
    const navigation = useNavigation();

    /*const signIn = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const {idToken} = await GoogleSignin.signIn();
        const googleCredentials = GoogleAuthProvider.credential(idToken);
        await signInWithCredential(auth, googleCredentials);
      } catch (error) {
        console.log('got error: ',error.message);
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
    };*/
  return (
    <ScreenWrapper>
      <View className="h-full flex justify-around" style={{backgroundColor:'#9ca3af'}}>
        <View className="flex-row justify-center mt-10">
            <Image source={require('../assets/images/timetoTravel.webp')} className="shadow" style={{borderBottomWidth:3, borderColor:'black', borderRadius:20, width:340, height:250}}/>
        </View>
        <View className="mx-5 mb-20">
            <Text className={`text-center font-bold text-4xl ${colors.heading} mb-10`}>TripsMemories</Text>
            
            <TouchableOpacity onPress={()=> navigation.navigate('SignIn')} className="shadow p-3 rounded-full mb-5" style={{backgroundColor: '#66696d'}}>
                <Text className="text-center text-white text-lg font-bold">Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('SignUp')} className="shadow p-3 rounded-full mb-5" style={{backgroundColor: '#66696d'}}>
                <Text className="text-center text-white text-lg font-bold">Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> signIn()} className="shadow p-3 rounded-full bg-white" >
              <View className="flex-row justify-center items-center space-x-3">
                <Image source={require('../assets/images/googleIcon.png')} className="h-8 w-8" />
                <Text className="text-center text-gray-600 text-lg font-bold">Sign In with Google</Text>
              </View>
                
            </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  )
}