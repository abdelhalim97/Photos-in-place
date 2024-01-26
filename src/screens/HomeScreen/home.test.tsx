import {Home} from '.';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import React from 'react';
import RNFS from 'react-native-fs';
import {decode} from 'base64-arraybuffer';
//@ts-ignore
import ExifReader from '../../../node_modules/exifreader/src/exif-reader.js';
const fakeBuffers = [0x4d, 0x5a, 0x90, 0x00, 0x03, 0x00];

//mocking multiple packages
jest.mock('react-native-image-picker', () => ({
  launchImageLibrary: jest.fn((options, callback) => {
    // Simulate the callback with a fake image data
    callback({assets: [{uri: 'fake-image-uri'}]}); //response.assets[0].uri
  }),
  launchCamera: jest.fn((options, callback) => {
    // Simulate the callback with a fake image data
    callback({assets: [{uri: 'fake-image-uri'}]}); //response.assets[0].uri
  }),
}));

jest.mock('react-native-fs', () => {
  return {
    readFile: jest.fn(),
  };
});

jest.mock('base64-arraybuffer', () => {
  return {
    decode: jest.fn(),
  };
});

ExifReader.load = jest.fn(() => Promise.resolve({}));

describe('test home component', () => {
  it.only('test camera button', async () => {
    render(<Home />);

    const button = screen.getByRole('button', {name: '📸'});
    fireEvent.press(button);

    await waitFor(() => expect(launchCamera).toHaveBeenCalled());

    const b64Buffer = await RNFS.readFile('fake-image', 'base64');

    const fileBuffer = decode(b64Buffer);

    await ExifReader.load(fakeBuffers, {
      expanded: true,
      includeUnknown: true,
    });

    await waitFor(() =>
      expect(ExifReader.load).toHaveBeenCalledWith(fakeBuffers, {
        expanded: true,
        includeUnknown: true,
      }),
    );

    const image = screen.getByTestId('selectedImage');
    expect(image).toBeOnTheScreen();
  });

  it('test gallery button', async () => {
    render(<Home />);

    const button = screen.getByRole('button', {name: '🎞'});
    fireEvent.press(button);

    await waitFor(() => expect(launchImageLibrary).toHaveBeenCalled());

    const b64Buffer = await RNFS.readFile('fake-image', 'base64');

    const fileBuffer = decode(b64Buffer);

    await ExifReader.load(fakeBuffers, {
      expanded: true,
      includeUnknown: true,
    });

    await waitFor(() =>
      expect(ExifReader.load).toHaveBeenCalledWith(fakeBuffers, {
        expanded: true,
        includeUnknown: true,
      }),
    );

    const image = screen.getByTestId('selectedImage');
    expect(image).toBeOnTheScreen();
  });
});
