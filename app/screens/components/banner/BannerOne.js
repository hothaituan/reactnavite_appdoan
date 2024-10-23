import * as React from "react";
import { View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

import { SBItem } from './SBItem';

function BannerOne() {
  const [mode] = React.useState("horizontal-stack");
  const [snapDirection] = React.useState("left");


  const datas = [
    { id: 1, title: "title1", image: "https://katinat.vn/wp-content/uploads/2024/04/KAT_BANNER-WEB_OBL.jpg" },
    { id: 2, title: "title2", image: "https://katinat.vn/wp-content/uploads/2024/04/KAT_BANNER-WEB_BGDN.jpg" },
    { id: 3, title: "title3", image: "https://katinat.vn/wp-content/uploads/2023/12/KAT_NEWBRANDING_COVERFB_3-scaled.jpg" },
    { id: 4, title: "title4", image: "https://katinat.vn/wp-content/uploads/2024/06/WEB-BANNER.jpg" },
  ];

  const viewCount = 3;

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <Carousel
        style={{
          width: "100%",
          height: 240,
          alignItems: "center",
          justifyContent: "center",

        }}
        width={350}
        height={210}
        pagingEnabled={true}
        snapEnabled={true}
        mode={"horizontal-stack"}
        loop={true}
        autoPlay={true}
        autoPlayReverse={false}
        data={datas}
        modeConfig={{
          snapDirection,
          stackInterval: mode === "vertical-stack" ? 8 : 18,
        }}
        customConfig={() => ({ type: "positive", viewCount })}
        renderItem={({ item, index }) => (
          <SBItem
            key={item.id}
            item={item}
          />
        )}
      />
    </View>
  );
}

export default BannerOne;
