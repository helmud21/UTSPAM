import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable, Modal, Alert } from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [actionTriggered, setActionTriggered] = useState('');


  return (

    <View style={styles.latar}>

      <Modal animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }} >

        {
        actionTriggered === 'ACT_1' ?
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View><Text style={styles.headerModal}>Pilih Pelabuhan</Text></View>
              <Pressable
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle1}>Lampung</Text>
                <Text style={styles.textStyle2}>Bakauheni</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle1}>Lampung</Text>
                <Text style={styles.textStyle2}>Bakauheni</Text>
              </Pressable>
            </View>
          </View>:
        actionTriggered === 'ACT_2' ?
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View><Text style={styles.headerModal}>Pilih Pelabuhan</Text></View>
              <Pressable
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle1}>Banten</Text>
                <Text style={styles.textStyle2}>Merak</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle1}>Banten</Text>
                <Text style={styles.textStyle2}>Merak</Text>
              </Pressable>
            </View>
          </View>:
        actionTriggered === 'ACT_3' ?
          <View style={styles.centeredView}>
            
          </View>:
          null
        }
      </Modal>

      <View style={styles.form}>
        <View style={styles.view1}>
          <Text style={styles.text}>Kapalzy</Text>
          <StatusBar style="auto" />
        </View>
        <View>
          <Text style={styles.label}>Pelabuhan Awal</Text>
          <TouchableOpacity onPress={() =>
            {setModalVisible(true);
            setActionTriggered('ACT_1');
          }} style={styles.pelabuhanawal} ><Text>Pilih Pelabuhan Awal</Text></TouchableOpacity>
        </View>
        <View>
          <Text style={styles.label}>Pelabuhan Tujuan</Text>
          <TouchableOpacity onPress={() => {
            setModalVisible(true);
            setActionTriggered('ACT_2');
          }} style={styles.pelabuhanawal}><Text>Pilih Pelabuhan Awal</Text></TouchableOpacity>
        </View>
        <View>
          <Text style={styles.label}>Kelas Layanan</Text>
          <TouchableOpacity style={styles.pelabuhanawal}><Text>Pilih Pelabuhan Awal</Text></TouchableOpacity>
        </View>
        <View>
          <Text style={styles.label}>Tanggal Masuk Pelabuhan</Text>
          <TouchableOpacity style={styles.pelabuhanawal}><Text>Pilih Pelabuhan Awal</Text></TouchableOpacity>
        </View>
        <View>
          <Text style={styles.label}>Jam Masuk Pelabuhan</Text>
          <TouchableOpacity style={styles.pelabuhanawal}><Text>Pilih Pelabuhan Awal</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  latar: {
    backgroundColor: 'grey',
    flex: 1
  },
  text: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'blue'
  },
  view1: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20
  },
  pelabuhanawal: {
    height: 35,
    width: 300,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginBottom: 10,
    paddingTop: 6
  },
  label: {
    fontSize: 20
  },
  form: {
    zIndex: 2,
    backgroundColor: 'white',
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 80
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    flex: 0.3,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    marginVertical: 5,
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle1: {
    color: "black",
    textAlign: "center",
    fontSize: 13
  },
  textStyle2: {
    color: "black",
    textAlign: "center",
    fontSize: 15
  },
  headerModal: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black'
  }
});

export default App;