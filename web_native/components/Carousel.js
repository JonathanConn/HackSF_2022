import { React, useState, useRef, useCallback, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions } from 'react-native';
import NftCard from './NftCard';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");



const Carousel = ({slides}) => {
    const slideList = Array.from(slides);

    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    indexRef.current = index;
    const onScroll = useCallback((event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);

        const distance = Math.abs(roundIndex - index);

        // Prevent one pixel triggering setIndex in the middle
        // of the transition. With this we have to scroll a bit
        // more to trigger the index change.
        const isNoMansLand = 0.4 < distance;

        if (roundIndex !== indexRef.current && !isNoMansLand) {
        setIndex(roundIndex);
        }
    }, []);

    function Pagination({ index }) {
        return (
          <View style={styles.pagination} pointerEvents="none">
            {slideList.map((_, i) => {
              return (
                <View
                  key={i}
                  style={[
                    styles.paginationDot,
                    index === i
                      ? styles.paginationDotActive
                      : styles.paginationDotInactive,
                  ]}
                />
              );
            })}
          </View>
        );
    }

    const flatListOptimizationProps = {
        initialNumToRender: 0,
        maxToRenderPerBatch: 1,
        removeClippedSubviews: true,
        scrollEventThrottle: 16,
        windowSize: 2,
        keyExtractor: useCallback(s => String(s.id), []),
        getItemLayout: useCallback(
        (_, index) => ({
            index,
            length: windowWidth,
            offset: index * windowWidth,
        }),
        []
        ),
    };

    const renderItem = useCallback(function renderItem({ item }) {
        return <NftCard contactCard={ item } />;
    }, []);

    return (
        <>
          <FlatList
            data={slideList}
            style={styles.carousel}
            renderItem={renderItem}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
            onScroll={onScroll}
            {...flatListOptimizationProps}
          />
          <Pagination index={index}></Pagination>
        </>
    );
}

const styles = StyleSheet.create({
    slide: {
      height: windowHeight,
      width: windowWidth,
      justifyContent: "center",
      alignItems: "center",
    },
    slideImage: { width: windowWidth , height: windowHeight * 0.7 },
    slideTitle: { fontSize: 24 },
    slideSubtitle: { fontSize: 18 },
  
    pagination: {
      paddingTop: 10,
      width: "100%",
      justifyContent: "center",
      flexDirection: "row",
    },
    paginationDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 2,
    },
    paginationDotActive: { backgroundColor: "#8ABCFE" },
    paginationDotInactive: { backgroundColor: "gray" },
  
    carousel: { flex: 1 },
  });

export default Carousel;
