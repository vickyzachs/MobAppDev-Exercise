import React, {useState, useEffect} from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Axios from 'axios';
import Gap from '../../Atoms/Gap';
import List from '../../Molecules';

const ListStudent = () => {

    const[users, setUsers]= useState([]);

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>
        setUsers(res.data))
    }, []);


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Text style={styles.text}>User List</Text>
            <Gap height={31} />
            {users.map(i => {
                return(
                    <List
                        key={i.id}
                        name={i.name}
                        username={i.username}
                        email={i.email}
                        address={`${i.address.street}, ${i.address.suite}, ${i.address.city}, ${i.address.zipcode}`}
                        phone={i.phone} 
                        />
                );
            })};
        </View>
    </ScrollView>
    )
}

export default ListStudent;

const styles = StyleSheet.create({})
