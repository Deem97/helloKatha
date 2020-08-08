/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect, useState, useLayoutEffect} from 'react';
import {View, Text, Alert, FlatList,SafeAreaView} from 'react-native';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import ImagePicker from 'react-native-image-picker';
import {Profile, ShowUsers, StickyHeader} from '../../components';
import firebase from '../../firebase/config';
import {Store} from '../../context/store';
import {UpdateUser, LogOutUser} from '../../network';
import {clearAsyncStorage} from '../../asyncStorage';
import { deviceHeight } from "../../utility/styleHelper/appStyle";
import {LOADING_STOP, LOADING_START} from '../../context/actions/types';
import {uuid, smallDeviceHeight} from '../../utility/constants';

const Dashboard = ({navigation}) => {

  const globalState = useContext(Store);
  const { dispatchLoaderAction } = globalState;

  const [userDetail, setUserDetail] = useState({
    id: "",
    name: "",
    profileImg: "",
  });

  const [getScrollPosition, setScrollPosition] = useState(0);
  const [allUsers, setAllUsers] = useState([]);
  const { profileImg, name } = userDetail;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <SimpleLineIcons
          name="logout"
          size={26}
          color="white"
          style={{right: 10}}
          onPress={() =>
            Alert.alert(
              'Logout',
              'Are you sure to Logout?',
              [
                {
                  text: 'Yes',
                  onPress: () => logout(),
                },
                {
                  text: 'No',
                },
              ],
              {
                cancelable: false,
              },
            )
          }
        />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    dispatchLoaderAction({
      type: LOADING_START,
    });
    try {
      firebase
        .database()
        .ref("users")
        .on("value", (dataSnapshot) => {
          let users = [];
          let currentUser = {
            id: "",
            name: "",
            profileImg: "",
          };
          dataSnapshot.forEach((child) => {
            if (uuid === child.val().uuid) {
              currentUser.id = uuid;
              currentUser.name = child.val().name;
              currentUser.profileImg = child.val().profileImg;
            } else {
              users.push({
                id: child.val().uuid,
                name: child.val().name,
                profileImg: child.val().profileImg,
              });
            } 
          });
          setUserDetail(currentUser);
          setAllUsers(users);
          dispatchLoaderAction({
            type: LOADING_STOP,
          });
        });
    } catch (error) {
      alert(error);
      dispatchLoaderAction({
        type: LOADING_STOP,
      });
    }
  }, []);

  const selectPhotoTapped = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled photo picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        // Base 64 image:
        let source = "data:image/jpeg;base64," + response.data;
        dispatchLoaderAction({
          type: LOADING_START,
        });
        UpdateUser(uuid, source)
          .then(() => {
            setUserDetail({
              ...userDetail,
              profileImg: source,
            });
            dispatchLoaderAction({
              type: LOADING_STOP,
            });
          })
          .catch(() => {
            alert(err);
            dispatchLoaderAction({
              type: LOADING_STOP,
            });
          });
      }
    });
  };

  const nameTap = (profileImg, name, guestUserId) => {
    if (!profileImg) {
      navigation.navigate("Chat", {
        name,
        imgText: name.charAt(0),
        guestUserId,
        currentUserId: uuid,
      });
    } else {
      navigation.navigate("Chat", {
        name,
        img: profileImg,
        guestUserId,
        currentUserId: uuid,
      });
    }
  };

  const selectNameTapped = () =>{
    console.log(name)
  }

  const logout = () => {
    LogOutUser()
      .then(() => {
        clearAsyncStorage()
          .then(() => {
            navigation.replace('Login');
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => alert(err));
  };

  const getOpacity = () => {
    if (deviceHeight < smallDeviceHeight) {
      return deviceHeight / 4;
    } else {
      return deviceHeight / 6;
    }
  };

  return (
    <SafeAreaView>
      <View style={{alignItems:'center'}}> 
        <Text style={{fontSize:20}}>17000254 -Deemantha H.K.T</Text>
      </View>
      <FlatList
         alwaysBounceVertical={false}
         data={allUsers}
         keyExtractor={(_, index) => index.toString()}
         onScroll={(event) =>
           setScrollPosition(event.nativeEvent.contentOffset.y)
         }
         ListHeaderComponent={
             <Profile
               img={profileImg}
               onImgTap={() => imgTap(profileImg, name)}
               onEditImgTap={() => selectPhotoTapped()}
               onEditNameTap={() => selectNameTapped()}
               name={name}
             />
         }

         renderItem={({ item }) => (
          <ShowUsers
            name={item.name}
            img={item.profileImg}
            onNameTap={() => nameTap(item.profileImg, item.name, item.id)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Dashboard;
