import React, { Component } from 'react';
import {
  FlatList,
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  ListRenderItemInfo,
  Text,
  StatusBar,
  Animated,
  Easing,
} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { height, width } = Dimensions.get('window');

interface IpoScreenProps {
  navigation: any;
}

type VideoItem = {
  id: string;
  videoUrl: string;
  title: string;
  description: string;
};

type State = {
  activeIndex: number;
  isMuted: boolean;
  currentTime: number;
  duration: number;
  isPaused: boolean;
  showIcon: boolean;
  fadeAnim: Animated.Value;
};

const mockVideos: VideoItem[] = [
  {
    id: '1',
    videoUrl: 'https://indiaipo.in/assets/app_assets/Aye%20Finance.mp4',
    title: 'IndiaIPO',
    description: 'India IPO, a leading Indian Business Services Portal, helps firms launch IPOs',
  },
  {
    id: '2',
    videoUrl: 'https://www.indiaipo.in/assets/app_assets/PhonePe%2022%20March%202025.mp4',
    title: 'IndiaIPO',
    description: 'India IPO, a leading Indian Business Services Portal, helps firms launch IPOs',
  },
  {
    id: '3',
    videoUrl: 'https://www.indiaipo.in/assets/app_assets/optical%20fibers.mp4',
    title: 'IndiaIPO',
    description: 'India IPO, a leading Indian Business Services Portal, helps firms launch IPOs',
  },
  {
    id: '4',
    videoUrl: 'https://www.indiaipo.in/assets/app_assets/Aman%20Gupta%20ne%20banaya%20BOAT.mp4',
    title: 'IndiaIPO',
    description: 'India IPO, a leading Indian Business Services Portal, helps firms launch IPOs',
  },
];

export default class ReelsScreen extends Component<IpoScreenProps, State> {
  constructor(props: IpoScreenProps) {
    super(props);
    this.state = {
      activeIndex: 0,
      isMuted: false,
      currentTime: 0,
      duration: 1,
      isPaused: false,
      showIcon: false,
      fadeAnim: new Animated.Value(0),
    };
  }

  viewabilityConfig = { viewAreaCoveragePercentThreshold: 80 };

  onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      this.setState({
        activeIndex: viewableItems[0].index,
        currentTime: 0,
        duration: 1,
        isPaused: false,
      });
    }
  };

  toggleMute = () => {
    this.setState((prevState) => ({ isMuted: !prevState.isMuted }));
  };

  handleProgress = (progress: { currentTime: number }) => {
    this.setState({ currentTime: progress.currentTime });
  };

  handleLoad = (meta: { duration: number }) => {
    this.setState({ duration: meta.duration });
  };

  handleBack = () => {
    this.props.navigation.goBack();
  };

  togglePlayPause = () => {
    this.setState(
      (prevState) => ({ isPaused: !prevState.isPaused, showIcon: true }),
      () => {
        Animated.sequence([
          Animated.timing(this.state.fadeAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
            easing: Easing.out(Easing.ease),
          }),
          Animated.timing(this.state.fadeAnim, {
            toValue: 0,
            duration: 800,
            delay: 300,
            useNativeDriver: true,
          }),
        ]).start(() => {
          this.setState({ showIcon: false });
        });
      }
    );
  };

  renderItem = ({ item, index }: ListRenderItemInfo<VideoItem>) => {
    const { activeIndex, isMuted, currentTime, duration, isPaused, showIcon, fadeAnim } =
      this.state;
    const progressWidth = (currentTime / duration) * width;

    return (
      <TouchableOpacity activeOpacity={1} onPress={this.togglePlayPause} style={styles.videoContainer}>
        <Video
          source={{ uri: item.videoUrl }}
          style={styles.video}
          resizeMode="contain"
          repeat
          paused={activeIndex !== index || isPaused}
          muted={isMuted}
          onProgress={this.handleProgress}
          onLoad={this.handleLoad}
        />

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: progressWidth }]} />
        </View>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={this.handleBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Overlay Content */}
        <View style={styles.overlay}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>

        {/* Mute Toggle */}
        <TouchableOpacity style={styles.muteButton} onPress={this.toggleMute}>
          <Ionicons
            name={isMuted ? 'volume-mute' : 'volume-high'}
            size={26}
            color="white"
          />
        </TouchableOpacity>

        {/* Play/Pause Icon */}
        {showIcon && (
          <Animated.View style={[styles.centerIconContainer, { opacity: fadeAnim }]}>
            <Ionicons
              name={isPaused ? 'play' : 'pause'}
              size={40}
              color="rgba(255,255,255,0.8)"
            />
          </Animated.View>
        )}
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <FlatList
          data={mockVideos}
          keyExtractor={(item) => item.id}
          renderItem={this.renderItem}
          pagingEnabled
          snapToInterval={height}
          decelerationRate="fast"
          disableIntervalMomentum={ true }
          showsVerticalScrollIndicator={false}
          onViewableItemsChanged={this.onViewableItemsChanged}
          viewabilityConfig={this.viewabilityConfig}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  videoContainer: {
    width,
    height,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  header: {
    position: 'absolute',
    top: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  description: {
    color: 'white',
    fontSize: 14,
  },
  muteButton: {
    position: 'absolute',
    bottom: 100,
    right: 20,
  },
  progressContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 3,
    width: width,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  progressBar: {
    height: 3,
    backgroundColor: 'white',
  },
  centerIconContainer: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
