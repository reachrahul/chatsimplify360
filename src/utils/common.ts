import {themeProps} from '../theme';

export const getColorByStr = (string: any, color: themeProps) => {
  const chat = string?.charAt(0)?.toLocaleLowerCase();
  const set1 = ['a', 'f', 'k', 'p', 'u', 'z'];
  const set2 = ['b', 'g', 'l', 'q', 'v'];
  const set3 = ['c', 'h', 'm', 'r', 'w'];
  const set4 = ['d', 'i', 'n', 's', 'x'];
  const set5 = ['e', 'j', 'o', 't', 'y'];
  if (set1.includes(chat)) return color.thumbnail_01;
  if (set2.includes(chat)) return color.thumbnail_02;
  if (set3.includes(chat)) return color.thumbnail_03;
  if (set4.includes(chat)) return color.thumbnail_04;
  if (set5.includes(chat)) return color.thumbnail_05;
  return '#F3FBF7';
};

export const bytesToSize = (bytes: number, precision: number) => {
  if (bytes !== undefined) {
    bytes = bytes * 1024;
    var kilobyte = 1024;
    var megabyte = kilobyte * 1024;
    var gigabyte = megabyte * 1024;
    var terabyte = gigabyte * 1024;

    if (bytes >= 0 && bytes < kilobyte) {
      return bytes.toFixed(precision) + ' B';
    } else if (bytes >= kilobyte && bytes < megabyte) {
      return (bytes / kilobyte).toFixed(precision) + ' KB';
    } else if (bytes >= megabyte && bytes < gigabyte) {
      return (bytes / megabyte).toFixed(precision) + ' MB';
    } else if (bytes >= gigabyte && bytes < terabyte) {
      return (bytes / gigabyte).toFixed(precision) + ' GB';
    } else if (bytes >= terabyte) {
      return (bytes / terabyte).toFixed(precision) + ' TB';
    } else {
      return bytes + ' B';
    }
  }
  return '';
};

export function getFileSize(fileSize: number, decimalSize?: number) {
  let size = fileSize;
  if (size >= 1024 ** 5) {
    return (size / 1024 ** 5).toFixed(decimalSize ? decimalSize : 2) + 'PB';
  } else if (size >= 1024 ** 4) {
    return (size / 1024 ** 4).toFixed(decimalSize ? decimalSize : 2) + 'TB';
  } else if (size >= 1024 ** 3) {
    return (size / 1024 ** 3).toFixed(decimalSize ? decimalSize : 2) + 'GB';
  } else if (size >= 1024 ** 2) {
    return (size / 1024 ** 2).toFixed(decimalSize ? decimalSize : 2) + 'MB';
  } else if (size >= 1024 ** 1) {
    return (size / 1024 ** 1).toFixed(decimalSize ? decimalSize : 2) + 'KB';
  } else {
    return (size / 1024 ** 0).toFixed(decimalSize ? decimalSize : 2) + 'B';
  }
}

export default {
  bytesToSize,
};
