import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Button, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// MARK: WELCOME HEADER (Hello * default = Guest!)
  // custom button to an alert for entering a name switch guest to entered name

const Header = () => {
  const [nameEntered, setNameEntered] = useState('Guest')
  const [isVisible, setIsVisible] = useState(false)

  return (
  <SafeAreaView>  
    <View style={{ height: 80, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'purple',}}>

      <View style={{ flex: 1,flexDirection: 'row', justifyContent: 'flex-start', paddingLeft:20}}>
        <Text style={{fontSize:28, fontWeight:'bold', color:'white'}}> Hello {nameEntered} !</Text>
      </View>

      <View style={{flex: 1,flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingRight:20}}>
        <TouchableOpacity style={{backgroundColor:'green' ,width:50, height:50, paddingLeft:20, borderRadius:25}} onPress={() => setIsVisible(true)}
        />
        <Modal visible={isVisible} transparent>
            <View style={{backgroundColor:'red', justifyContent:'center', alignItems:'center',height:100, width:200}}>
              <Text style={{textAlign:'center'}} >Enter Your Name</Text>
              <TextInput style={{justifyContent:'center',width:100,height:30, backgroundColor:'lightgrey'}}>

              </TextInput>
              <Button title="Submit" onPress={() => setIsVisible(false)}/>
            </View>
        </Modal>
      </View>
    
    </View>
  </SafeAreaView>
  );
};

const Post = ({articleTitle}) =>{
  return (
    <View style={{backgroundColor:'beige', padding:10, margin:10, borderRadius:5}}>
    <Text style={{fontSize:18, fontWeight:'bold', color:'black'}}>
      {articleTitle}
    </Text>
    <Text>
    {'\n'}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec vitae lectus non lectus convallis bibendum.
      Nunc commodo ac risus in iaculis. Duis pharetra sagittis leo non sodales.
      Sed at vulputate mauris. Nulla nec lorem nec ipsum molestie pulvinar.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec vitae lectus non lectus convallis bibendum.
      Nunc commodo ac risus in iaculis. Duis pharetra sagittis leo non sodales.
      Sed at vulputate mauris. Nulla nec lorem nec ipsum molestie pulvinar.
    </Text>
  </View>
  );
};
// MARK: POST (Scrollable View)

const Feed = () => {
  return (
    <ScrollView>

    <Post articleTitle='Noticias Importantes' />
    <Post articleTitle='Viktiga Nyheter' />
    <Post articleTitle='重要なニュース'/>
    <Post articleTitle='Ważne wiadomości'/>


    </ScrollView>
  );
};





// Load More / Loading Button with indicator

const LoadMore = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingText, setLoadingText] = useState(true)
  
  function showAlert() {  
    Alert.alert('Unable to load','There was an error, Please try again', [  
            {  
              text: 'OK',  
              onPress: () => {setLoadingText((prev) => !prev); setIsLoading((prev) => !prev)  }
            }
        ]  
    );  
} 

  return (
    <View style={{height:100, justifyContent:'center' ,flexDirection:'row'}}>
      <View style={{ flex: 1,flexDirection: 'row', justifyContent: 'center', alignItems:'center', backgroundColor: 'white'}}>
        <Button title={loadingText ? 'Load More' : 'Loading'} onPress={()=> {setLoadingText((prev) => !prev); setIsLoading((prev) => !prev);{showAlert()}}}/>
        <ActivityIndicator animating={isLoading} />
      </View>
    </View>
  );
};


export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>

      <View style={{height:40, justifyContent:'center', paddingLeft:20}}>
        <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>
          Today's Highlights
        </Text>
      </View>

      <Feed></Feed>

      <LoadMore></LoadMore>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    width:'100%',
    height:'100%',
  },
});
