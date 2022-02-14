import {Text, Pressable, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Ionicons} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useForm, Controller} from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import AppLoading from 'expo-app-loading';

import {styles} from '../../SignUpForm/FormStyleSheet';
import {LaunchEventController} from './LaunchEventController';
import {launchStyles} from './LaunchEventStyleSheet';
import {useEffect, useState} from 'react';

import {apiService} from '../../../apiService';

export const LaunchEvent = ({navigation, route}) => {
  const credentials = route.params; // User information

  const {
    setValue,
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      owner: credentials.name,
      type: credentials.type,
      eventName: '',
      location: credentials.type === 'Firm' ? credentials.address : '',
      date: '',
      ticketLink: '',
      numPeople: '',
      eventDescription: '',
      imageLink: '',
    },
  });

  // On Submit function:
  const onSubmit = async (data) => {
    const source = {
      uri: data.imageLink.uri,
      type: data.imageLink.type,
      name: 'banana.jpeg',
    };
    const imageLink = await cloudinaryUpload(source);
    const created = await apiService.postEvent({
      ...data,
      imageLink,
    });

    return created ? navigation.navigate('Home') : <AppLoading />;
  };

  // Datetime picker set up:
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setValue('date', date);
  });

  const dateOnChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  // Image Picker set up:
  const [imageURI, setImageURI] = useState('');

  const pickImage = async () => {
    const photo = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!photo.cancelled) {
      setValue('imageLink', photo); // We set the ImageLink value to the whole object to access its properties it later
      setImageURI(photo.uri); // We get the image from the local URI to display it
    }
  };

  // Function to upload the image picked to Cloudinary:
  const cloudinaryUpload = async (photo) => {
    const data = new FormData();
    data.append('file', photo);
    data.append('upload_preset', 'What2DoApp');
    data.append('cloud_name', 'dhq0teliy');
    try {
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dhq0teliy/image/upload',
        {
          method: 'post',
          body: data,
        },
      );
      const data = await res.json(); // We block the upload process to receive the data
      setValue('imageLink', data.secure_url);
      return data.secure_url;
    } catch (err) {
      console.log('An Error Occured While Uploading');
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAwareScrollView>
        <Pressable
          title="Back"
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.backButton}
        >
          <Ionicons name="ios-return-up-back" size={40} color="#FFD158" />
        </Pressable>
        <View style={launchStyles.titleView}>
          <Text style={launchStyles.title}>Launch An Event</Text>
        </View>
        <View style={launchStyles.launchForm}>
          <LaunchEventController
            name="Event Name"
            formEntry="eventName"
            control={control}
            errors={errors}
          />
          <LaunchEventController
            name="Location"
            formEntry="location"
            control={control}
            errors={errors}
          />
          <View>
            <Text style={styles.formLabel}>Date</Text>
            <View style={launchStyles.datetimeView}>
              <Controller
                control={control}
                render={() => (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="datetime"
                    is24Hour={true}
                    onChange={dateOnChange}
                    minimumDate={new Date()}
                    style={launchStyles.datetime}
                  />
                )}
                name="date"
              />
            </View>
          </View>
          {credentials.type === 'Firm' ? (
            <LaunchEventController
              name="Ticket Link"
              formEntry="ticketLink"
              control={control}
              errors={errors}
            />
          ) : (
            <LaunchEventController
              name="Number Of People"
              formEntry="numPeople"
              control={control}
              errors={errors}
            />
          )}
          <LaunchEventController
            name="Description"
            formEntry="eventDescription"
            control={control}
            errors={errors}
          />
          <Text style={styles.formLabel}>Image</Text>
          <Pressable onPress={pickImage} style={launchStyles.imagePicker}>
            {imageURI ? (
              <Image
                source={{uri: imageURI}}
                style={{width: '100%', height: '100%', opacity: 0.5}}
              />
            ) : (
              <MaterialIcons
                name="add-photo-alternate"
                size={50}
                color="#D1D0D0"
              />
            )}
          </Pressable>
          <View style={launchStyles.submitView}>
            <Pressable
              title="Cancel"
              onPress={() => {
                reset();
                navigation.navigate('Home');
              }}
              style={[launchStyles.submit, {backgroundColor: '#FCF2D8'}]}
            >
              <Text style={styles.submitText}>Cancel</Text>
            </Pressable>
            <Pressable
              title="Submit"
              onPress={handleSubmit(onSubmit)}
              style={[launchStyles.submit, {backgroundColor: '#FFD158'}]}
              disabled={false}
            >
              <Text style={styles.submitText}>Launch</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
