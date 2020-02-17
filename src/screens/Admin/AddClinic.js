import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {Card} from '../../components/Card';
import {CardSection} from '../../components/CardSection';
import {Btn} from '../../components/Buton';

const AddClinic = ({navigation, onSubmit, initialValues}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [timing, setTiming] = useState(initialValues.timing);
  const [description, setDescription] = useState(initialValues.description);
  const [doctorsInfo, setDoctorsInfo] = useState(initialValues.doctorsInfo);
  const [address, setAddress] = useState(initialValues.address);

  return (
    <View style={styles.container}>
      <Card>
        <CardSection>
          <View style={{flexDirection: 'column', margin: 5}}>
            <Image
              style={styles.imageStyle}
              source={require('../../../assets/img2.jpg')}
            />
            <Text style={{marginLeft: 7, marginTop: 5}}> Add Logo</Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.clinicData}>
              <View style={styles.descriptionStyle}>
                <Text>Clinic Name</Text>
                <TextInput
                  autoCorrect={false}
                  autoCapitalize="none"
                  style={styles.inputStyle}
                  value={title}
                  onChangeText={text => setTitle(text)}
                />
              </View>
              <View style={styles.descriptionStyle}>
                <Text>Timing</Text>
                <TextInput
                  style={styles.inputStyle}
                  value={timing}
                  onChangeText={timing => setTiming(timing)}
                />
              </View>
              <View style={styles.descriptionStyle}>
                <Text>Address</Text>
                <TextInput
                  style={styles.inputStyle}
                  value={address}
                  onChangeText={address => setAddress(address)}
                />
              </View>
              <View style={styles.descriptionStyle}>
                <Text>Descrition</Text>
                <TextInput
                  autoCorrect={false}
                  autoCapitalize="none"
                  style={styles.descriptionInput}
                  value={description}
                  onChangeText={text => setDescription(text)}
                />
              </View>
              <View style={styles.descriptionStyle}>
                <Text>Doctors Info</Text>
                <TextInput
                  autoCorrect={false}
                  autoCapitalize="none"
                  style={styles.descriptionInput}
                  value={doctorsInfo}
                  onChangeText={text => setDoctorsInfo(text)}
                />
              </View>
              <View style={styles.btnViewStyle}>
                <Btn onPress={() => onSubmit(title, timing)} text="Add" />
              </View>
            </View>
          </ScrollView>
        </CardSection>
      </Card>
    </View>
  );
};

AddClinic.defaultProps = {
  initialValues: {
    title: '',
    timing: '',
    description: '',
    doctorsInfo: '',
    address: '',
  },
};

AddClinic.navigationOptions = {
  headerShown: false,
};

export default AddClinic;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  searchBarContainer: {
    backgroundColor: '#f2f2f2',
    borderBottomColor: '#f2f2f2',
    borderTopColor: '#f2f2f2',
  },
  searchBar: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  btnViewStyle: {
    margin: 10,
  },
  clinicData: {
    flex: 1,
    flexDirection: 'column',
  },
  inputStyle: {
    fontSize: 14,
    backgroundColor: 'white',
  },
  descriptionStyle: {
    backgroundColor: '#d3d3d3',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: '#d3d3d3',
    shadowOpacity: 0.2,
    elevation: 1,
  },
  descriptionInput: {
    backgroundColor: 'white',
  },
});
