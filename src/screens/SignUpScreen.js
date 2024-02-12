import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../components/screenWrapper';
import { colors } from '../theme';
import BackButton from '../components/backButton';
import { useNavigation } from '@react-navigation/native';
// to show messages on the screen
import { showMessage } from 'react-native-flash-message';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'
import { useDispatch, useSelector } from 'react-redux'
import { setUserLoading } from '../redux/slices/userSlice'
import Loading from '../components/loading'

export default function SignInScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {userLoading} = useSelector(state=> state.user);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleSubmit = async ()=>{
        if(email && password){
            // good to go
            // navigation.goBack();
            // navigation.navigate('Home');
            
            try{
                dispatch(setUserLoading(true));
                await createUserWithEmailAndPassword(auth, email, password);
                dispatch(setUserLoading(false));
            }catch(e){
                dispatch(setUserLoading(false));
                // show error
        showMessage({
            type: 'danger',
            message: e.message,
        })     
            }
        }else{
            // show error
            showMessage({
                type: 'danger',
                message: 'Email and Password are required!'
            })
        }
    }
  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
            <View className="relative">
                <View className="absolute top-0 left-0 z-10">
                    <BackButton />
                </View>
                
                <Text className={`${colors.heading} text-xl font-bold text-center`}>Sign Up</Text>
            </View>
            
            <View className="flex-row justify-center my-3 mt-5">
                <Image className="" source={require('../assets/images/SIGNUP01.jpg')} style={{borderRadius:20, borderWidth:5, borderColor:'black', width:300, height:200}}/>
            </View>
            <View className="space-y-2 mx-2">
                <Text className={`${colors.heading} text-lg font-bold`}>Email</Text>
                <TextInput value={email} onChangeText={value=> setEmail(value)} className="p-4 bg-white rounded-full mb-3" />
                <Text  className={`${colors.heading} text-lg font-bold`}>Password</Text>
                <TextInput value={password} secureTextEntry onChangeText={value=> setPassword(value)} className="p-4 bg-white rounded-full mb-3" />
            </View>
        </View>
        
        <View>
            {
                userLoading? (
                    <Loading />
                ):(
                    <TouchableOpacity onPress={handleSubmit} style={{backgroundColor: '#66696d'}} className="my-6 rounded-full p-3 shadow-sm mx-2">
                        <Text className="text-center text-white text-lg font-bold">Sign Up</Text>
                    </TouchableOpacity>
                )
            }
            
        </View>
      </View>
    </ScreenWrapper>
  )
}