import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {Card} from '../components/Card';
import {CardSection} from '../components/CardSection';
import {Btn} from '../components/Buton';
import {Timing} from '../components/Timing';


const Dashboard = () => {
  
 
  const {container, searchBarContainer, searchBar} = styles;

  return (
    <View>
      <SearchBar
        containerStyle={searchBarContainer}
        inputContainerStyle={searchBar}
        placeholder="Search Hospitals"
      />
      <Card>
        <CardSection>
          <View>
            <Image
              style={styles.imageStyle}
              source={require('../../assets/img1.jpg')}
            />
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={{paddingLeft: 10}}>Doctor Ehsan's Clinic</Text>
            <View>
              <Timing>
                <Text> 12:00 am - 6:00 am </Text>
              </Timing>
            </View>
          </View>
          <View style={styles.btnViewStyle}>
            <Btn text="Book" />
          </View>
          
        </CardSection>


        {/* <FlatList 
          data={clinicData}
          keyExtractor={(clinicData)=>clinicData.title}
          renderItem={({item}) =>{
          return <Text>{item.title}</Text>
          }}
        /> */}
      </Card>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {},
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
    margin: 10,
  },
  btnViewStyle: {
    justifyContent: 'flex-end',
    flex: 1,
    margin: 10,
    marginLeft: 50,
  },
});
