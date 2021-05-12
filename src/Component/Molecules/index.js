import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const List = ({name, username, email, address, phone}) => {
return (
    <View style={styles.container}>
        <Text style={styles.outext}>
            Name :
            <Text styles={styles.intext}> {name}</Text>
        </Text>
        <Text style={styles.outext}>
            Username:  
            <Text style={styles.intext}> {username}</Text>
        </Text>
        <Text style={styles.outext}>
            Email:  
            <Text style={styles.intext}> {email}</Text>
        </Text>
        <Text style={styles.outext}>
            Address:  
            <Text style={styles.intext}> {address}</Text>
        </Text>
        <Text style={styles.outext}>
            Phone:  
            <Text style={styles.intext}> {phone}</Text>
        </Text>
    </View>
);
};
export default List;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 26,
        paddingHorizontal: 26,
        marginBottom: 15,
    },
    outext: {
        fontWeight: '700',
        fontSize: 14,
    },
    intext:{
        fontWeight: '100',
    },
});