import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {TextInput, Gap, Button} from '../../Component/Atoms'


const Register = () => {

    const [name, setName]= useState("");
    const [userName, setUserName]= useState("");
    const [email, setEmail]= useState("");
    const [address, setAddress]= useState("");
    const [phoneNumber, setPhoneNumber]= useState("");

    const onSubmit = () => {
        const data = {
            name: name,
            userName: userName,
            email: email,
            address: address,
            phoneNumber: phoneNumber,
        };
        console.log(data);
    }


    return (
        <View style={styles.background}>
            <View style={styles.container}>
            <Text style={styles.RegisText}>Registration</Text>
            <Gap height={40} />
            <View style={styles.textInput}>
                <Text style={styles.textStyle}>Name</Text>
                <Gap height={8} />
                <TextInput 
                placeholder= "Masukkan nama lengkap anda"
                value={name}
                onChangeText={value => setName(value)} />
                <Gap height={20} />
                <Text style={styles.textStyle}>Username</Text>
                <Gap height={8} />
                <TextInput
                placeholder="Masukkan username anda" 
                value={userName}
                onChangeText={value => setUserName(value)} />
                <Gap height={20} />
                <Text style={styles.textStyle}>Email</Text>
                <Gap height={8} />
                <TextInput
                placeholder="Masukkan email anda" 
                value={email}
                onChangeText={value => setEmail(value)} />
                <Gap height={20} />
                <Text style={styles.textStyle}>Address</Text>
                <Gap height={8} />
                <TextInput
                placeholder="Masukkan alamat anda"
                value={address}
                onChangeText={value => setAddress(value)}  />
                <Gap height={20} />
                <Text style={styles.textStyle}>Phone Number</Text>
                <Gap height={8} />
                <TextInput
                placeholder="Masukkan Nomor telepon anda" 
                value={phoneNumber}
                onChangeText={value => setPhoneNumber(value)} />
                <Gap height={29} />
                <Button title="Register" onPress={onSubmit}/>
            </View>
        </View>
        </View>
    )
}

export default Register;

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white'
    },
    container: {
        marginTop: 24,
        paddingHorizontal: 24,
        alignSelf: 'center',
        backgroundColor: 'white'
    },
    RegisText: {
        fontSize: 36,
        fontWeight: 'bold'
    },
    textStyle: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    textInput: {
        backgroundColor: 'white',
        flex:1
    }
    
})
