import { View, Text, Image } from "react-native";
import React from "react";
import { assets, COLORS, SHADOWS, SIZES } from "../constants";

export const NFTTitle = ({ title, subTitle, subTitleSize, titleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: titleSize,
          color: COLORS.primary,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        {subTitle}
      </Text>
    </View>
  );
};

export const EthPrice = ({ price }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 2 }}
      />
      <Text style={{ fontWeight: "bold" }}>{price}</Text>
    </View>
  );
};

export const ImageCmp = ({ imageUrl, index }) => {
  return (
    <Image
      source={imageUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const People = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imageUrl, index) => {
          return <ImageCmp imageUrl={imageUrl} index={index} key={index} />;
        }
      )}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Ending in
      </Text>
      <Text
        style={{
          fontSize: SIZES.medium,
          color: COLORS.primary,
          fontWeight: "bold",
        }}
      >
        12h 30m
      </Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.extraLarge,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EndDate />
    </View>
  );
};
