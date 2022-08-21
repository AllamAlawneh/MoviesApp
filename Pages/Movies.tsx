import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Movies, Movie } from '../Types';
export default function MoviesScreen() {


    const [state, setState] = useState<Movies>({
        data: {

            movies: []
        }
    })
    const [loading, setLoading] = useState<boolean>(false)


    const getJsonData = () => {
        setLoading(true);
        fetch('https://reactnative.dev/movies.json',
            { method: 'GET' })
            .then((response) => response.json())
            .then((responseJson) => {
                setLoading(false);
                console.log(responseJson);
                setState({
                    data: responseJson
                })
            })
            .catch((error) => {
                setLoading(false)
                console.error(error)
            });
    }
    useEffect(() => {
        getJsonData()
    }, [])



    return (
        <View style={styles.container}>



            {loading ? (
                <Text style={{
                    marginBottom: 20,
                    fontSize: 30,
                    backgroundColor: 'black',
                    color: 'white'
                }}>Loading please wait ...</Text>
            ) :
                (

                    <View style={{ width: '97%', flex: 1, height: '100%', marginTop: 25, marginBottom: 10 }}>
                        <Text style={{

                            textAlign: 'center',
                            fontSize: 40,
                            color: 'red',
                            backgroundColor: '#d9dbdd9e'


                        }}>List Of Movies</Text>

                        <View style={{ width: '100%', marginBottom: 50 }}>
                            <FlatList

                                data={state.data.movies}
                                renderItem={({ item }) => (

                                    <View style={{ borderWidth: 1, alignItems: 'center' }}>
                                        <Image
                                            style={{

                                                resizeMode: "contain",
                                                height: 100,
                                                width: 200
                                            }}
                                            source={{ uri: 'https://i.pinimg.com/564x/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg' }}
                                        />
                                        <Text style={{

                                            marginBottom: 10,
                                            textAlign: 'center',
                                            fontSize: 25,
                                        }}>{item.title + '\n' + item.releaseYear}</Text>
                                    </View>




                                )}
                            /></View>
                    </View>




                    //</View>
                )}



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: "space-around",
        alignItems: "center",
        height: "100%",
        textAlign: "center"
    }
});
