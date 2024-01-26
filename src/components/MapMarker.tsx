import {Image, StyleSheet} from 'react-native';
import React from 'react';
import MapboxGL from '@rnmapbox/maps';
import {MarkerInterface} from './types/marker-type';

const markerIcon = require('../../assets/images/icons8-location-96.png');

//setting up the image marker
const MarkerImage = () => {
  return (
    <Image source={markerIcon} style={style.imageMarker} resizeMode="cover" />
  );
};
//Our application position marker
export const MapMarker = ({longitude, latitude}: MarkerInterface) => {
  return (
    <MapboxGL.MarkerView coordinate={[longitude, latitude]} isSelected>
      {MarkerImage()}
    </MapboxGL.MarkerView>
  );
};

const style = StyleSheet.create({
  imageMarker: {
    width: 50,
    height: 50,
  },
});
